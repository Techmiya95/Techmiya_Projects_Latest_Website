import { useState, useEffect, useRef } from 'react';

const DEFAULT_SHORTS = [
    { id: '1', videoId: '0Fe2Lpk91R0' },
    { id: '2', videoId: 'UgF29StIDt4' },
    { id: '3', videoId: '0Fe2Lpk91R0' },
    { id: '4', videoId: 'UgF29StIDt4' },
    { id: '5', videoId: '0Fe2Lpk91R0' },
    { id: '6', videoId: 'UgF29StIDt4' },
];

function YoutubeShortsSlider() {
    const [shorts, setShorts] = useState(DEFAULT_SHORTS);
    const [isAnimating, setIsAnimating] = useState(false);
    const sectionRef = useRef(null);

    // Get API Key and Channel ID from environment variables
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || 'UC_x5XG1OV2P6uYZ5ujfWXBw'; // Techmiya Channel ID

    useEffect(() => {
        const fetchLatestShorts = async () => {
            if (!API_KEY) return;

            try {
                // Fetch the latest 10 videos from the channel
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10&type=video`
                );
                const data = await response.json();

                if (data.items) {
                    const fetchedShorts = data.items.map((item, index) => ({
                        id: item.id.videoId,
                        videoId: item.id.videoId
                    }));
                    setShorts(fetchedShorts);
                }
            } catch (error) {
                console.error("Error fetching YouTube shorts:", error);
            }
        };

        fetchLatestShorts();
    }, [API_KEY, CHANNEL_ID]);

    // Duplicate shorts for infinite scroll effect
    const allShorts = [...shorts, ...shorts];

    useEffect(() => {
        let timeoutId;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isAnimating) {
                        timeoutId = setTimeout(() => {
                            setIsAnimating(true);
                        }, 800);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [isAnimating, shorts]);

    return (
        <section className="shorts" ref={sectionRef}>
            <div className="shorts-container">
                <h2>Our Projects</h2>
                <div className={`shorts-slider ${isAnimating ? 'animate' : ''}`}>
                    {allShorts.map((short, index) => (
                        <div key={index} className="shorts-col">
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${short.videoId}?autoplay=0&hl=en&cc_lang_pref=en&cc_load_policy=1&mute=1&loop=1`}
                                title="YouTube Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default YoutubeShortsSlider;
