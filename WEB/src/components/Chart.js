import ApexChart from "react-apexcharts";

export default function Chart(props) {
  const { valores, anos, type, titleText } = props;

  /* let lineChart = {
    options: {
      chart: {
        type: type,
        zoom: {
          enabled: false,
        },
      },
      xaxis: {
        categories: anos,
      },
    },
    title: {
      text: titleText,
      align: "left",
    },
    series: [
      {
        name: "Definir",
        data: valores,
      },
    ],
  }; */

  /* console.log(titleText); */
  const lineChart = {
    series: [
      {
        name: "Definir",
        data: valores,
      },
    ],
    options: {
      chart: {
        type: type,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: titleText,
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: anos,
      },
    },
  };

  return (
    <ApexChart
      options={lineChart.options}
      series={lineChart.series}
      width={"300px"}
      height={"300px"}
    />
  );
}
