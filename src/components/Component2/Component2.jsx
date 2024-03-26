import './Component2.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import { data } from "../../data/data"

export default function Component2(){

  const [State, setState] = useState('');
  const [LastYear, setLastYear] = useState([]);
  const [ThisYear, setThisYear] = useState([]);
  const [Sales, setSales] = useState({
    options: {
      colors: ["#E91E63", "#FF9800"],
      chart: {
        id: "basic-bar",
        height: "300px",
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
    }
  });

  useEffect(() => {
    data("sales").then((data1) => {
      const LastYearData = data1.map((item) => item.Last_year)
      setLastYear(LastYearData);
    });

    data("sales").then((data1) => {
      const ThisYearData = data1.map((item) => item.This_year)
      setThisYear(ThisYearData);
    });

  }, []);

    const handleChange = (event) => {
      setState(event.target.value);
    };

    return (
        <>
        <div className={"component2"}>
            <div className={"top2"}>
                <div className={"title2"}>
                    Comparison
                </div>
                <div className={"dropdown"}>
                    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                        <InputLabel id="demo-select-small-label">Sales</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={State}
                            label="Chart"
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>6 Months</MenuItem>
                            <MenuItem value={2}>1 Year</MenuItem>
                            <MenuItem value={3}>2 Year</MenuItem>
                        </Select>
                    </FormControl>
                </div>

            </div>
            <div className={"chart"}>
                <div className="bar-chart">
                    <Chart
                        options={Sales.options}
                        series={[
                          {
                            name: "Last year",
                            data: LastYear
                          },
                          {
                            name: "This year",
                            data: ThisYear
                          },
                        ]}
                        type="bar"
                        width="750"
                        height={Sales.options.chart.height}
                    />
                </div>
            </div>
        </div>
        </>
    )
}