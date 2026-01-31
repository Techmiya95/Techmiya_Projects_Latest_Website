function FloatingSocial() {
    return (
        <>
            {/* WhatsApp Button */}
            <div className="whatsapp-container">
                <a
                    href="https://api.whatsapp.com/send?phone=916363760275&forceIntent=true&load=loadInIOSExternalSafari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-button"
                >
                    <img src="/images/whatsapp-icon.png" alt="WhatsApp" />
                </a>
            </div>

            {/* Instagram Button */}
            <div className="instagram-container">
                <a
                    href="https://www.instagram.com/techmiyaprojects/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-button"
                >
                    <img src="/images/instagram-icon.png" alt="Instagram" />
                </a>
            </div>

            {/* LinkedIn Button */}
            <div className="linkedin-container">
                <a
                    href="https://www.linkedin.com/company/techmiyaprojects/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-button"
                >
                    <img src="/images/linkedin.png" alt="LinkedIn" />
                </a>
            </div>

            {/* YouTube Button */}
            <div className="youtube-container">
                <a
                    href="https://www.youtube.com/@TechMiyaProjects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="youtube-button"
                >
                    <img src="/images/youtube.png" alt="YouTube" />
                </a>
            </div>
        </>
    );
}

export default FloatingSocial;
