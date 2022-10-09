import React from "react";
import './faq.css'
import { data } from "./Content";
import Card from "./Card";
export default function Faq(){
    return(
        <div className="faq-parent">
            {data.map(x=>(
                <div>
                    <Card
                        question={x.Q}
                        answer={x.A}
                    />
                    <br/>
                </div>

            ))}
        </div>
    );
}