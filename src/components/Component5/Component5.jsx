import "./Component5.css";
import { useEffect, useState } from 'react';
import { componentData } from '../../data/data';

export default function Component5(){
    const [Feedback, setFeedback] = useState({})

    useEffect(()=>{
        componentData(5).then(data => setFeedback(data))
        
    },[])

    return (
        <>
            <div className="component5">
                <div className="title5">
                    <div className="feedback">Community feedback</div>
                    <div className="main">Mostly Positive</div>
                </div>
                <div className="line">
                    <div className="category1"></div>
                    <div className="category2"></div>
                    <div className="category3"></div>
                </div>
                <div className="meta-data4">
                    <div className="common">
                        <p>Negative</p>
                        <strong>{Feedback.negative}</strong>
                    </div>
                    <div className="common">
                        <p>Neutral</p>
                        <strong>{Feedback.neutral}</strong>
                    </div>
                    <div className="common">
                        <p>Positive</p>
                        <strong>{Feedback.positive}</strong>
                    </div>
                </div>
            </div>
        </>
    )
}