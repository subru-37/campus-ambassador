import React,{useState} from "react";
import {FaRegPlusSquare } from "react-icons/fa";

export default function Card(props){
    const [boolCheck,setBoolCheck] = useState(false);
    const [onMouseHover,setOnMouseHover] = useState(false);
    function changeBool(){
        setBoolCheck(!boolCheck);
    }
    function onHover(){
        setOnMouseHover(!onMouseHover);
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
                            color: onMouseHover ? "#05E8FA" : "white",
                            border: "none",
                            cursor:"pointer"
                        }}>
                            <FaRegPlusSquare
                                onMouseEnter={onHover}
                                onMouseOut={onHover}
                            />
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