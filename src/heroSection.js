import "./heroSection.css"
import background from "./imgs/hero_background.jpg"
import {Component} from "react";

class HeroSection extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="heroSection">
                <div>
                    <h1>Amr El-Saady</h1>
                    <h2>Full-Stack Web developer</h2>
                    <div id="contact_hero_sec_btn">
                        contact me
                    </div>
                </div>
            </div>
        );
    }
}

export default HeroSection;