import "./skillsSection.css"
import {Component} from "react";

class SkillsSection  extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="skillsSection"
            style={{
                padding:'2.5rem 4rem',
                backgroundColor:'#333',
                color:'white',
            }}
            >
                <h1>Skills</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex explicabo facere fugit hic veritatis? Beatae commodi deserunt dolorem enim iusto minima molestias odit quae. Aliquam animi dolorem odio pariatur?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aliquam aliquid asperiores dolorum eligendi ex facilis hic incidunt itaque labore minima molestiae necessitatibus officia omnis placeat possimus quaerat ut voluptatem.
                </p>
                {skillItem({name: "HTML", width:70})}
                {skillItem({name: "CSS", width:40})}
                {skillItem({name: "JavaScript", width:90})}
                {skillItem({name: "React", width:57})}
                {skillItem({name: "PhotoShop", width:20})}
                {skillItem({name: "Adobe XD", width:67})}
            </div>
        )
    }
}
export default SkillsSection;

function skillItem(props){
    return (
        <div style={{
            display:"flex",
            margin:"0.5rem"
        }}>
            <div style={{
                flex:'max-content',
                padding:"0.5rem",
                color:"white",
                minInlineSize:"max-content",
                backgroundColor:"grey"
            }}><span>{props.name}</span></div>
            <div style={{width: `${props.width}%`, backgroundColor:"darkgray"}}></div>
            <div style={{width: `${100 - props.width}%`, backgroundColor:"lightgray"}}></div>

        </div>
    )
}
