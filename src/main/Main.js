import React from "react";
import './Main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faHeart } from '@fortawesome/free-solid-svg-icons';
import {Animated} from "react-animated-css";


function Main() {
    return (
        <div className="main">
            <div className="titles"> 
                <Animated animationIn="bounceInDown"  isVisible={true}>
                    <h3 className="junior">Junior</h3>
                </Animated>
                    <h2 className="webDev" >Webdeveloper</h2>
                    <h2 className="frontend">Frontend</h2>
            </div>
            <div className="animatedSection"> 
                <Animated animationIn="fadeIn" animationInDelay="2500" animationInDuration="3000" isVisible={true}>
                    <p>with</p>
                </Animated>
                <Animated animationIn="rollIn" animationInDelay="1000" animationOut="fadeOut" isVisible={true}>
                    <div className="brain"> <FontAwesomeIcon icon={faBrain} size="2xl" style={{color: "#f3148f",}} />
                    </div>
                </Animated>
                <Animated animationIn="fadeIn" animationInDelay="2500" animationInDuration="3000" isVisible={true}>
                    <p>and</p>
                </Animated>
                <Animated animationIn="tada" animationInDelay="2000"  isVisible={true}>
                    <div className="heart">
                    <FontAwesomeIcon icon={faHeart} size="xl" style={{color: "#f31486",}} />
                    </div>
                </Animated>
            </div>
        </div>
    );
}

export default Main;