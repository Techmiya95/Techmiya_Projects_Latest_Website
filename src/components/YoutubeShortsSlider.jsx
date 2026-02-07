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
    const [activeVideo, setActiveVideo] = useState(null);
    const sectionRef = useRef(null);

    // Get API Key and Channel ID from environment variables
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || 'UC_x5XG1OV2P6uYZ5ujfWXBw';

    useEffect(() => {
        const fetchLatestShorts = async () => {
            if (!API_KEY) return;

            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10&type=video`
                );
                const data = await response.json();

                if (data.items) {
                    const fetchedShorts = data.items.map((item) => ({
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
                <div className={`shorts-slider ${isAnimating && !activeVideo ? 'animate' : ''}`}>
                    {allShorts.map((short, index) => (
                        <div key={index} className="shorts-col">
                            {activeVideo === index ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${short.videoId}?autoplay=1&mute=0`}
                                    title="YouTube Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <div
                                    className="video-placeholder"
                                    onClick={() => {
                                        setActiveVideo(index);
                                        setIsAnimating(false);
                                    }}
                                >
                                    <img
                                        src={`https://img.youtube.com/vi/${short.videoId}/hqdefault.jpg`}
                                        alt="Video Thumbnail"
                                        loading="lazy"
                                    />
                                    <div className="play-overlay">
                                        <i className="fa fa-play-circle"></i>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
                .video-placeholder {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                    overflow: hidden;
                    background: #000;
                    border-radius: 15px;
                }
                .video-placeholder img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }
                .video-placeholder:hover img {
                    transform: scale(1.1);
                }
                .play-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0,0,0,0.2);
                    transition: background 0.3s ease;
                }
                .play-overlay i {
                    font-size: 4rem;
                    color: white;
                    opacity: 0.8;
                    transition: all 0.3s ease;
                }
                .video-placeholder:hover .play-overlay {
                    background: rgba(0,0,0,0.4);
                }
                .video-placeholder:hover .play-overlay i {
                    transform: scale(1.2);
                    opacity: 1;
                }
                .shorts-col iframe {
                    border-radius: 15px;
                    width: 100%;
                    height: 100%;
                }
            `}} />
        </section>
    );
}

export default YoutubeShortsSlider;
