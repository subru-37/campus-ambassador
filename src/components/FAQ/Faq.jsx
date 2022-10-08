import React from "react";
import './faq.css'
import { data } from "./Content";
import Card from "./Card";
export default function Faq(){
    return(
        <div>
            {data.map(x=>(
                <Card
                    question={x.Q}
                    answer={x.A}
                />
            ))}
        </div>
    );
}