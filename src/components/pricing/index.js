import React, { Component } from 'react';


import MyButton from '../utils/MyButton';

import Zoom from 'react-reveal/Zoom';
class Pricing extends Component {

    state={
        prices:[90,75,60],
        position:['Scholar','Average','Poor'],
        desc:[
            'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
            'All the Lorem Ipsum generators on the Internet tend to repeat ',
            'Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem'

        ],
        linkto:['http://sales.b','http://sales.m','http://sales.s'],
        delay:[500,0,500]
    }

    showBoxes = () =>(
        this.state.prices.map((box,i)=>(

            <Zoom delay={this.state.delay[i]} key={i}>
<div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>{this.state.prices[i]}%</span>
                        <span>{this.state.position[i]}</span>
                    </div>
                    
                    <div className="pricing_description"> 
                        <span>{this.state.desc[i]}</span>
                    </div>

                    <div className="pricing_buttons">
                        <MyButton
                            text="Do Study Guyzz"
                            bck="#ffa800"
                            color="#ffffff"
                            link={this.state.linkto[i]}
                        />
                        
                    </div>

                </div>
            </div>

            </Zoom>
            
        ))
    )       
    

    render() {
        return (
            <div className="bck_black">
            <div className="entre_wrapper pricing_section">
                <h2>Marking Scheme</h2>
                <div className="pricing_wrapper">
                    {this.showBoxes()}
                </div>
            </div>
                
            </div>
        );
    }
}

export default Pricing;