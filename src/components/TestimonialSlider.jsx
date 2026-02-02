import { useState, useEffect, useRef } from 'react';

const testimonials = [
    { name: 'Vajra', review: 'I have tried many tools, but this one stands out.', rating: 4, image: '/images/user1.jpeg' },
    { name: 'Hamsa Lekha R', review: 'The software provided by Techmiya Solutions has been a game-changer for us.', rating: 5, image: '/images/user2.jpeg' },
    { name: 'Tejaswini', review: 'Working with Techmiya Solutions was a breeze!', rating: 4.5, image: '/images/user3.jpeg' },
    { name: 'Varsha HD', review: 'Techmiya Solutions revolutionized the way we handle our business processes.', rating: 5, image: '/images/user4.jpeg' },
    { name: 'Trupthi', review: 'The customer support from Techmiya Solutions is exceptional.', rating: 4, image: '/images/user5.jpeg' },
    { name: 'Sanjay', review: "We've been using Techmiya Solutions for over a year, and it's been a game-changer.", rating: 4, image: '/images/user6.jpeg' },
    { name: 'Prasad', review: 'I was impressed by how quickly Techmiya Solutions understood our business needs and delivered a solution that exceeded our expectations.', rating: 4.5, image: '/images/user7.jpeg' },
    { name: 'Tameem', review: 'The ease of use and customization options are fantastic.', rating: 5, image: '/images/user8.jpeg' },
    { name: 'Mohan', review: "Techmiya Solutions' software is exactly what we needed. It's fast, reliable, and incredibly easy to navigate.", rating: 4.5, image: '/images/user9.jpeg' },
    { name: 'Adil', review: 'The best decision we made for our business was partnering with Techmiya Solutions.', rating: 5, image: '/images/user10.jpeg' },
    { name: 'Mudashir', review: 'The best decision we made for our business was partnering with Techmiya Solutions.', rating: 5, image: '/images/user11.jpeg' },
];

function StarRating({ rating }) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

    return (
        <>
            {[...Array(fullStars)].map((_, i) => (
                <i key={`full-${i}`} className="fa fa-star"></i>
            ))}
            {hasHalf && <i className="fa fa-star-half-o"></i>}
            {[...Array(emptyStars)].map((_, i) => (
                <i key={`empty-${i}`} className="fa fa-star-o"></i>
            ))}
        </>
    );
}

function TestimonialSlider() {
    // Duplicate testimonials for infinite scroll effect
    const allTestimonials = [...testimonials, ...testimonials];
    const [isAnimating, setIsAnimating] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        let timeoutId;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isAnimating) {
                        // Start animation after a short delay
                        timeoutId = setTimeout(() => {
                            setIsAnimating(true);
                        }, 800); // 0.8 second delay
                    }
                });
            },
            {
                threshold: 0.1, // Trigger earlier
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [isAnimating]);

    return (
        <section className="testimonials" ref={sectionRef}>
            <div className="testimonial-container">
                <h2>Hear From Our Customers</h2>
                <div className={`testimonial-slider ${isAnimating ? 'animate' : ''}`}>
                    {allTestimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-col">
                            <img loading="lazy" src={testimonial.image} alt="Techmiya review" />
                            <div>
                                <p>{testimonial.review}</p>
                                <h3>{testimonial.name}</h3>
                                <StarRating rating={testimonial.rating} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TestimonialSlider;
