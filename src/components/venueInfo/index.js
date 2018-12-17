import React from 'react';

import icon_calender from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';


const VenueInfo = () => {
    return (
        <div className="back_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_red"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background:`url(${icon_calender})`
                                        }}    
                                    ></div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default VenueInfo;