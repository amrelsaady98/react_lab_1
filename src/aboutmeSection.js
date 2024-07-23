import "./aboutmeSection.css"
import {Component} from "react";
import cv from './cv.txt'

class AboutMeSection extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="aboutmeSection">
                <h1> About Me </h1>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda, doloremque eaque facilis illo praesentium quaerat totam. Consequuntur dignissimos et exercitationem, minima, molestiae nulla numquam obcaecati quibusdam quidem unde ut!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis consequatur corporis culpa dicta et, ex in incidunt ipsum, necessitatibus officiis perferendis, porro quasi quia reiciendis vel velit vero vitae!
                    </p>
                    <a href={cv} download>
                        <div>
                            Download Resume
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default AboutMeSection;