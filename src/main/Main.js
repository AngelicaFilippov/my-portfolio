import React from "react";
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faHeart } from '@fortawesome/free-solid-svg-icons';
/*import  Animate from 'animate.css';*/
import {Animated} from "react-animated-css";





function Main() {
    return (
        <div className="Main">
            <div className="titles"> 
                <Animated animationIn="bounceInDown"  isVisible={true}>
                    <h3 className="Junior">Junior</h3>
                </Animated>
                    <h2 className="WebDev" >Webdeveloper</h2>
                    <h2 className="Frontend">Frontend</h2>
            </div>
            <div className="animatedSection"> 
                <Animated animationIn="fadeIn" animationInDelay="2500" animationInDuration="3000" isVisible={true}>
                    <p>with</p>
                </Animated>
                <Animated animationIn="rollIn" animationInDelay="1000" animationOut="fadeOut" isVisible={true}>
                    <div className="Brain"> <FontAwesomeIcon icon={faBrain} size="2xl" style={{color: "#f3148f",}} />
                    </div>
                </Animated>
                <Animated animationIn="fadeIn" animationInDelay="2500" animationInDuration="3000" isVisible={true}>
                    <p>and</p>
                </Animated>
                <Animated animationIn="tada" animationInDelay="2000"  isVisible={true}>
                    <div className="Heart">
                    <FontAwesomeIcon icon={faHeart} size="xl" style={{color: "#f31486",}} />
                    </div>
                </Animated>
            </div>
        </div>
    );

    }

export default Main;