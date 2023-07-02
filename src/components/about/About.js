import React from "react";
import './About.css';
import imgAngelica from '../images/angelica.png'; 


const About = () => {
    return (
        <div className="aboutwrapper">
            <div className="introduction">
                    <img src={imgAngelica} className=" img" alt="imageAngelica" />
                    <div className="box smallbox">
                        <p>Hi there!<br/>I'm Angelica, a web developer who brings a touch of artistic flair to the digital<br/> realm.
                        </p>
                    </div>
                    <div className="box midbox">
                        <p>Before<br/> diving into the <br/>world of coding, I had the privilege of pursuing <br/>a career as an<br/> opera singer.
                        </p>
                    </div>
                    <div className="box midbox">
                        <p>While<br/> my path may have<br/> taken a different turn, the passion for creativity and expression still burns within me.
                        </p>
                    </div> 
                    <div className="box midbox">
                        <p>As a <br/>web developer,<br/> I strive to infuse my projects with the same dedication and passion that drove me <br/> on stage.</p>
                    </div> 
                    <div className="box bigbox">
                        <p>Drawing from<br/> my background in the performing arts, I understand the importance of captivating<br/> an audience and creating an immersive experience.</p> 
                    </div>
                    <div className="box bigbox">
                        <p>Collaboration<br/> is key in my work. Just<br/>as I once collaborated with fellow musicians and directors, I now collaborate with clients to understand their unique goals and bring their digital <br/>visions to life.</p>
                    </div>
                    <div className="box midbox">
                        <p>I believe<br/> in listening attentively, adapting to their needs, and ensuring that the websites I create<br/> reflect their<br/> distinctive<br/> identities.</p>
                    </div>
                    <div className="box midbox">
                        <p>The discipline<br/> and perseverance developed during my time as an opera singer have translated seamlessly into the<br/> realm of web development.</p>
                    </div> 
                    <div className="box bigbox">
                        <p>I approach every <br/>project with a humble<br/> mindset, embracing challenges <br/> as opportunities for growth<br/> and continuously expanding<br/> my skill set to provide<br/> top-notch solutions.</p>
                    </div>
            
            </div>
    </div>
       
    )
}

export default About;