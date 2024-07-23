import './footerSection.css'
import {Component} from "react";

class FooterSection extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className="footerSection" style={{
                marginTop:'2rem',
                backgroundColor:'black',
                color:'white',
                padding:"2rem 10rem",
                display:'grid',
                gridTemplateColumns:'repeat(3, 1fr)',
                gridTemplateRows:'repeat(1, 1fr)',
                gridGap: '3rem',
            }}>
                <div style={{
                    textAlign: "left"
                }}>
                    <h2>GET IN TOUCH</h2>
                    <i className="fa-regular fa-envelope"></i> <span>amrelsaady98@gmail.com <br/></span>
                    <i className="fa-brands fa-whatsapp"></i> +20 106 9849 627
                </div>
                <div style={{
                    padding:'0.5rem',
                    border:'1px solid gray',

                }}>
                    <p> Contact Me</p>
                </div>
                <div style={{
                    textAlign:"right",

                }}>
                    <p>copyright</p>
                    <a href={'https://www.facebook.com'} style={{
                        textDecoration:'none',
                        margin:'0.5rem',
                        color:'white',
                    }}><i className="fa-brands fa-twitter"></i></a>
                    <a href={'https://www.twitter.com'} style={{
                        textDecoration:'none',
                        color:'white',
                        margin:'0.5rem',
                    }}><i className="fa-brands fa-github"></i></a>
                    <a href={'https://www.facebook.com'} style={{
                        textDecoration:'none',
                        color:'white',
                        margin:'0.5rem',
                    }}><i className="fa-brands fa-facebook"></i></a>
                </div>

            </div>
    );
    }

}
export default FooterSection