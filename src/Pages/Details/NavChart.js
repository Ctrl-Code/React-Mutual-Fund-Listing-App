import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";

const DomId = "navChart";
const DaysDifference = 365;

const getChartData = dataArray => {

    let navArray = [];
    let years = [];

    let index = 0;
    let count = 5;

    while (count > 0) {
        let value = dataArray?.[index]?.nav;

        if (value) {

            navArray.push(value);
            years.push(dataArray[index].date.slice(-4));

            index = index + DaysDifference;
            --count;
        }
        else
            break;
    }


    return [
        years.reverse(),
        navArray.reverse(),
    ];
}

const generateConfigObject = (labels, temp) => {
    return {
        type: "line",
        data: {
            labels,
            datasets: [{
                label: "NAV value",
                backgroundColor: "rgb(6, 73, 82)",
                borderColor: "rgb(35, 213, 236)",
                data: temp,
            }]
        },
        options: {}
    }
}

function NavChart(props) {

    const [chartObj, setChartObj] = useState(null);
    const { data } = props;

    useEffect(function setChart() {

        const [chartLabels, chartNav] = getChartData(data ?? []);
        const configObject = generateConfigObject(chartLabels, chartNav);

        if (chartObj)
            chartObj.destroy();

        // create chart
        let myChart = new Chart(
            document.getElementById(DomId),
            configObject,
        );

        setChartObj(myChart);

    }, []);

    return <div>
        <div style={{
            fontSize: "25px",
            fontWeight: "500",
            color: "#4d5202",
        }}>5 Year NAV</div>
        <div>
            <canvas id={DomId} style={{ backgroundColor: "#e8e8b3" }}></canvas>
        </div>
    </div>
}

export default NavChart;