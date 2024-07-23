import "./portofolioSection.css"
import {Component} from "react";
import {Card} from "react-bootstrap";

class PortofolioSection extends Component{
    constructor() {
        super();
    }
    render() {
        return (
            <div className="portofolioSection">
                <h1>Portfolio </h1>
                <div style={{
                    padding:"2rem 10rem",
                    display:'grid',
                    gridTemplateColumns:'repeat(3, 1fr)',
                    gridTemplateRows:'repeat(2, 1fr)',
                    gridGap: '1.5rem',

                }}>
                    {portfolioItem({name: "WEB DESIGN", color:"gray"})}
                    {portfolioItem({name: "WEB DESIGN", color:"darkgray"})}
                    {portfolioItem({name: "WEB DESIGN", color:"lightgray"})}
                    {portfolioItem({name: "WEB DESIGN", color:"lightgray"})}
                    {portfolioItem({name: "WEB DESIGN", color:"gray"})}
                    {portfolioItem({name: "WEB DESIGN", color:"darkgray"})}

                </div>
            </div>
        )
    }
}

function portfolioItem(props){
    return (

            <Card className={"px-2 py-4"}>
                <h1 style={{}}>{props.name}</h1>
            </Card>

    )
}

export default PortofolioSection