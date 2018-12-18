import React from 'react';
import Fade from 'react-reveal/Fade';
const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">
                    CDAC Acts
                </div>

                <div className="footer_copyright">
                    CDAC Acts 2018.All right reserved.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;