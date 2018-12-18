import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
           {/* <iframe

           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30267.805165315516!2d73.78710184256288!3d18.507395840987332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfea4bd65a33%3A0x861411c69538d318!2sCity+Pride!5e0!3m2!1sen!2sin!4v1545110258483" 
           width="100%" 
           height="500" 
           frameBorder="0" 
        //    style="border:0" 
           allowFullScreen
           >
          
           </iframe> */}

<iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.8677913209467!2d73.80882141436895!3d18.534875673575268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf40bef092f1%3A0x48c508ccaa4ef9a!2sCentre+For+Development+Of+Advanced+Computing%2C+Innovation+Park!5e0!3m2!1sen!2sin!4v1545119367860" 
width="100%" 
height="500" 
frameBorder="0" 
// style="border:0" 
allowFullScreen>

</iframe>

           <div className="location_tag">
           <div>
               Location
            </div>
           
           </div>
        </div>
    );
};

export default Location;