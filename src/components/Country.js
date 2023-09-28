import { useEffect, useState } from "react";
import Chart from "./Chart";

function Country() {
  /*Dados de óbitos no Brasil por diabetes*/
  const [obitosBr, setObitosBr] = useState([]);

  useEffect(() => {
    fetch("./utils/obitos-por-diabetes-br.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setObitosBr(res));
  }, []);

  let anos = [];
  let obitos = [];
  let percentuais = [];

  obitosBr?.forEach((item) => {
    const ano = item.year;
    anos.push(ano);
    const obito = item.obitos;
    obitos.push(obito);
    const percentual = item.percent * 100;
    percentuais.push(percentual.toFixed(2));
  });

  let obitoChart = {
    series: [
      {
        name: "Obitos",
        type: "column",
        data: obitos,
      },
      {
        name: "Percentual",
        type: "line",
        data: percentuais,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
      },
      stroke: {
        width: [0, 6],
      },
      title: {
        text: "Óbitos por Diabetes no Brasil",
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      labels: anos,
      xaxis: {
        type: "year",
      },
      yaxis: [
        {
          title: {
            text: "",
          },
        },
        {
          opposite: true,
          title: {
            text: "Percentual (%)",
          },
        },
      ],
    },
  };
  /* ---------------------------------------------------*/

  return (
    <section className="country" id="country">
      <div className="country__container-text">
        <h2 className="country__title">No Brasil</h2>
        <p className="country__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad
          minim.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad
          minim.
        </p>
      </div>
      <ul className="country__charts">
        {<Chart series={obitoChart.series} options={obitoChart.options} />}
      </ul>
    </section>
  );
}

export default Country;
