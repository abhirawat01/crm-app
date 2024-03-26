import './Component1.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import { componentData } from '../../data/data';


export default function Component1(){

    const [Stats, setStats] = useState('');
    const [StatData, setStatData] = useState({})

    useEffect(()=>{
        componentData(1).then(data => setStatData(data))
        
    },[])

    const handleChange = (event) => {
        setStats(event.target.value);
    };

    return (
        <>
        <div className={"component1"}>
            <div className={"top"}>
                <div className={"title"}>
                    Dashboard
                </div>
                <div className={"dropdown"}>
                    <p>Compare to</p>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">Stats</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={Stats}
                            label="Stats"
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>Last Year</MenuItem>
                            <MenuItem value={2}>Last Month</MenuItem>
                            <MenuItem value={3}>Last Quarter</MenuItem>
                        </Select>
                    </FormControl>
                </div>

            </div>
            <div className={"bottom"}>
                <div className={"purchases"}>
                    <p>Purchases</p>
                    <div className="data">
                        <h2>{StatData.purchases}</h2>
                        <div className="rise">
                            <p>+32%</p>
                            <TrendingUpIcon sx={{ fontSize: 'small' }}/>
                        </div>
                    </div>
                </div>
                <div className={"revenue"}>
                    <p>Revenue</p>
                    <div className="data">
                        <h2>${StatData.revenue}</h2>
                        <div className="rise">
                            <p>+32%</p>
                            <TrendingUpIcon sx={{ fontSize: 'small' }}/>
                        </div>
                    </div>
                </div>
                <div className={"refunds"}>
                    <p>Refunds</p>
                    <div className="data">
                        <h2>${StatData.refunds}</h2>
                        <div className="down">
                            <p>+7%</p>
                            <TrendingDownOutlinedIcon sx={{ fontSize: 'small' }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}