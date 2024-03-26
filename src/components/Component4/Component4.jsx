import "./Component4.css";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { data } from '../../data/data'

export default function Component4() {

  const [webSales, setWebSales] = useState([]);
  const [offlineSales, setofflineSales] = useState([]);
  const [Sales, setSales] = useState({
    options: {
      colors: ["#E91E63", "#FF9800"],
      chart: {
        id: "basic-bar",
        height: "200px",
      },
      xaxis: {
        categories: ["Dec"]
      },
    }
  });

  useEffect(() => {
    data("devices").then((data1) => {
      const WebSalesData = data1.map((item) => item.web_sales)
      setWebSales(WebSalesData);
    });

    data("devices").then((data1) => {
      const offlineSalesData = data1.map((item) => item.offline_sales)
      setofflineSales(offlineSalesData);
    });

  }, []);

  return (
    <>
      <div className="component4">
        <div className="title4">Customer by device</div>
        <div className="linechart">
          <Chart
            options={Sales.options}
            series={[
              {
                name: "Web sales",
                data: webSales
              },
              {
                name: "Offline selling",
                data: offlineSales
              },
            ]}
            type="line"
            width="300"
            height={Sales.options.chart.height}
          />
        </div>
        <div className="meta-data">
          <div className="web-sales">1,304%</div>
          <div className="Offline-sales">473%</div>
        </div>
      </div>
    </>
  );
}
