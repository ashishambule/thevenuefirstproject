import React, { Component } from 'react';


import Fade from 'react-reveal/Fade';
import Slide from'react-reveal/Slide';

import MyButton from '../utils/MyButton';


class Discount extends Component {


    state ={
        discountStart:0,
        discountEnd:30
    }

    porcentage=()=>{
        if(this.state.discountStart<this.state.discountEnd){
                this.setState({
                    discountStart:this.state.discountStart+1
                })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.porcentage()
        },50)
    }

    render() {
        return (
            <div className="centre_wrapper">
                <div className="discount_wrapper">
                   <Fade
                    onReveal={()=>this.porcentage()}
                   >
                   <div className="discount_porcentage">
                    
                    <span>
                       {this.state.discountStart}%
                    </span>
                
                    <span>
                        Prepared
                    </span>
                </div>
                   </Fade>

                   <Slide right>

                   <div className="discount_description">
                        <h3>Complete Study before 01 Jan 2019</h3>
                        <p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    
                        <MyButton
                        text="Do Study"
                        bck="#ffa800"
                        color="#ffffff"
                        link="http://google.com"
                        />
                    </div>


                   </Slide>
                    
                </div>
                
            </div>
        );
    }
}



export default Discount;