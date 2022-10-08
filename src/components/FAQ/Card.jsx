import React,{useState} from "react";
import {FaRegPlusSquare } from "react-icons/fa";
export default function Card(props){
    const [boolCheck,setBoolCheck] = useState(false);
    function changeBool(){
        setBoolCheck(!boolCheck);
    }
    return(
        <div className="faq-container">
            <div className="faq-bar">
                <h1 className="faq-page">
                        {props.question}
                </h1>
                <div>
                    <button 
                        onClick={()=>(changeBool())} 
                        className="button" 
                        style=
                        {{
                            backgroundColor:"#001c3d",
                            color:"white",
                            border: "none"
                        }}>
                            <FaRegPlusSquare/>
                    </button>
                </div>
            </div>

            <div className="faq-body">
                <p>
                    { boolCheck ? props.answer : null}
                </p>
            </div>
        </div>
    );
}