import "./Content.css"
import Component1 from "../Component1/Component1";
import Component2 from "../Component2/Component2";
import Component6 from "../Component6/Component6";
import Component4 from "../Component4/Component4";
import Component3 from "../Component3/Component3";
import Component5 from "../Component5/Component5";

export default function Content(){

    return (
        <>
            <div className="main-content">
                <div className="left">
                    <Component1/>
                    <Component2/>
                    <Component6/>
                </div>
                <div className="right">
                    <Component3/>
                    <Component4/>
                    <Component5/>
                </div>
            </div>
        </>
    );
}