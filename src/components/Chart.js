import ApexChart from "react-apexcharts";

export default function Chart(props) {
  const { options, series } = props;

  return (
    <ApexChart options={options} series={series} className="country__chart" />
  );
}
