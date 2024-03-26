import "./Component3.css";
import Chip from '@mui/material/Chip';
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  import ChangingProgressProvider from "./ChangingProgessProvider";
  import { componentData } from '../../data/data';
  import { useEffect, useState } from "react";

export default function Component3(){
    const [Status, setStatus] = useState(false)

    useEffect(()=>{
        componentData(3).then(data => setStatus(data))
    },[])

    return (
        <>
            <div className="component3">
                <div className="score">
                    {!Status ? 'Loading...' : <ChangingProgressProvider values={[0, 80, 80]}>
                                    {value => (
                                    <CircularProgressbar
                                        value={Status.score}
                                        text={`${Status.score}%`}
                                        circleRatio={0.5}
                                        styles={buildStyles({
                                        rotation: 1 / 2 + 1 / 4,
                                        strokeLinecap: "butt",
                                        trailColor: "#eee"
                                        })}
                                    />
                                    )}
                                </ChangingProgressProvider>
                    }
                </div>
                <hr />
                <div className="v-line"></div>
                <div className="status">
                        <div className="title3">{Status.title}</div>
                        <div className="description">
                            <p>{Status.message}</p>
                        </div>
                </div>
                <div className="meta-data3">
                    <Chip label="Improve your score" variant="outlined"/>
                </div>
            </div>
        </>
    )
}