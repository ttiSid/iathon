import { useEffect, useState } from "react";
import Chart from "./Chart";

function World() {
  const [diabetesPorGenero, setDiabetesPorGenero] = useState();

  useEffect(() => {
    fetch("./utils/diabetes_por_genero.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setDiabetesPorGenero(res));
  }, []);

  let generos = [];
  let valores = [];

  diabetesPorGenero?.forEach((item) => {
    const genero = item.genero;
    generos.push(genero);
    const valor = item.taxa_de_diabetes;
    valores.push(valor);
  });

  console.log(diabetesPorGenero);

  const graficoPorGenero = {
    series: [
      {
        name: generos[1],
        data: [Number(valores[1])],
      },
      {
        name: generos[0],
        data: [Number(valores[0])],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      title: {
        text: "Relação Diabetes por gênero",
      },
      xaxis: {
        categories: ["Genero"],
        labels: {
          show: true,
        },
      },
      yaxis: {
        title: {
          text: "%",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "%";
          },
        },
      },
    },
  };

  const [diabetesPorPeso, setDiabetesPorPeso] = useState();

  useEffect(() => {
    fetch("./utils/diabetes_peso.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setDiabetesPorPeso(res));
  }, []);

  let graus = [];
  let taxasPorPeso = [];

  diabetesPorPeso?.forEach((item) => {
    const grau = item.grau;
    graus.push(grau);
    const taxaPorPeso = item.taxa;
    taxasPorPeso.push(taxaPorPeso);
  });

  const graficoPorPeso = {
    series: [
      {
        name: graus[0],
        data: [Number(taxasPorPeso[0])],
      },
      {
        name: graus[1],
        data: [Number(taxasPorPeso[1])],
      },
      {
        name: graus[2],
        data: [Number(taxasPorPeso[2])],
      },
      {
        name: graus[3],
        data: [Number(taxasPorPeso[3])],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      title: {
        text: "Relação Diabetes por peso",
      },
      xaxis: {
        categories: ["Genero"],
        labels: {
          show: false,
        },
      },
      yaxis: {
        title: {
          text: "%",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "%";
          },
        },
      },
    },
  };

  return (
    <section className="world" id="world">
      <h2 className="world__title">Números do Diabetes no Mundo</h2>
      <p className="world__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliquat enim ad minim. Lorem
        ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliquat enim ad minim.
      </p>
      <div className="world__list">
        {
          <>
            <Chart
              options={graficoPorGenero.options}
              series={graficoPorGenero.series}
              type="bar"
              className="world__chart"
            ></Chart>
            <Chart
              options={graficoPorPeso.options}
              series={graficoPorPeso.series}
              type="bar"
              className="world__chart"
            ></Chart>
          </>
        }
      </div>
    </section>
  );
}

export default World;
