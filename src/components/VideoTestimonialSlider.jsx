import { useState, useEffect, useRef } from 'react';

const DEFAULT_REVIEWS = [
    { id: 'v1', videoId: 'ttej9TVU9WM' },
    { id: 'v2', videoId: '13GYx-siWeY' },
    { id: 'v3', videoId: 'S7cmcCuEH5w' },
];

function VideoTestimonialSlider() {
    const [reviews, setReviews] = useState(DEFAULT_REVIEWS);
    const [isAnimating, setIsAnimating] = useState(false);
    const [activeVideo, setActiveVideo] = useState(null);
    const sectionRef = useRef(null);

    // Get API Key and Channel ID from environment variables
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || 'UC_x5XG1OV2P6uYZ5ujfWXBw';

    useEffect(() => {
        const fetchReviewVideos = async () => {
            if (!API_KEY) return;

            try {
                // Fetch videos from the channel specifically searching for "review" or "testimonial"
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10&type=video&q=review`
                );
                const data = await response.json();

                if (data.items && data.items.length > 0) {
                    const fetchedReviews = data.items.map((item) => ({
                        id: item.id.videoId,
                        videoId: item.id.videoId
                    }));
                    setReviews(fetchedReviews);
                }
            } catch (error) {
                console.error("Error fetching YouTube review videos:", error);
            }
        };

        fetchReviewVideos();
    }, [API_KEY, CHANNEL_ID]);

    const allReviews = [...reviews, ...reviews];

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
    }, [isAnimating, reviews]);

    return (
        <section className="video-testimonials" ref={sectionRef}>
            <div className="video-testimonials-container">
                <h2>Video Reviews from Our Students</h2>
                <div className={`video-testimonials-slider ${isAnimating && !activeVideo ? 'animate' : ''}`}>
                    {allReviews.map((review, index) => (
                        <div key={index} className="video-review-col">
                            {activeVideo === index ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${review.videoId}?autoplay=1&mute=0`}
                                    title="YouTube Review Video"
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
                                        src={`https://img.youtube.com/vi/${review.videoId}/hqdefault.jpg`}
                                        alt="Video Review Thumbnail"
                                        loading="lazy"
                                    />
                                    <div className="play-overlay">
                                        <i className="fa fa-play-circle"></i>
                                    </div>
                                    <div className="review-label">Student Review</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
                .video-testimonials {
                    width: 100%;
                    margin: auto;
                    padding: 80px 0;
                    background: linear-gradient(180deg, #050c18 0%, #000 100%);
                    overflow: hidden;
                    border-top: 1px solid rgba(0, 212, 255, 0.1);
                }
                .video-testimonials-container h2 {
                    text-align: center;
                    font-size: clamp(1.8rem, 4vw, 2.5rem);
                    margin-bottom: 50px;
                    background: linear-gradient(135deg, #ffffff 0%, #00d4ff 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-weight: 700;
                    font-family: 'Poppins', sans-serif;
                }
                .video-testimonials-slider {
                    display: flex;
                    position: relative;
                    width: max-content;
                    animation: slide 50s linear infinite;
                    animation-play-state: paused;
                }
                .video-testimonials-slider.animate {
                    animation-play-state: running;
                }
                .video-review-col {
                    min-width: 320px;
                    height: 560px;
                    margin: 0 20px;
                    position: relative;
                }
                .video-placeholder {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                    overflow: hidden;
                    background: #000;
                    border-radius: 15px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .video-placeholder img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
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
                    background: rgba(0,0,0,0.3);
                    transition: background 0.3s ease;
                }
                .play-overlay i {
                    font-size: 3.5rem;
                    color: white;
                    opacity: 0.8;
                    transition: all 0.3s ease;
                }
                .video-placeholder:hover .play-overlay {
                    background: rgba(0,0,0,0.5);
                }
                .video-placeholder:hover .play-overlay i {
                    transform: scale(1.1);
                    opacity: 1;
                }
                .review-label {
                    position: absolute;
                    bottom: 15px;
                    left: 15px;
                    background: rgba(0, 212, 255, 0.8);
                    color: white;
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    backdrop-filter: blur(5px);
                }
                .video-review-col iframe {
                    border-radius: 15px;
                    width: 100%;
                    height: 100%;
                    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
                }

                @media (max-width: 768px) {
                    .video-review-col {
                        min-width: 300px;
                        height: 168.75px;
                    }
                    .play-overlay i {
                        font-size: 2.5rem;
                    }
                }
            `}} />
        </section>
    );
}

export default VideoTestimonialSlider;
