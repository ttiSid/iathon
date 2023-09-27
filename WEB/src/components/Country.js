import { useEffect, useState } from "react";
import Chart from "./Chart";

function Country() {
  /*Precisamos saber qual o tipo de dado é esse*/
  const [data, setData] = useState([]);

  useEffect(() => {
    /*Precisamos renomear esse json*/
    fetch("./utils/data.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  let anos = [];
  let valores = [];

  data?.forEach((item) => {
    const ano = item.year;
    anos.push(ano);
    const valor = item.val.toFixed(2);
    valores.push(valor);
  });

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
        <Chart
          type="line"
          titleText="Precisamos definir"
          valores={valores}
          anos={anos}
        />
        <Chart
          type="line"
          titleText="Precisamos definir"
          valores={valores}
          anos={anos}
        />
        <Chart
          type="line"
          titleText="Precisamos definir"
          valores={valores}
          anos={anos}
        />
        {/*         <li className="country__item">
        </li>
        <li className="country__item">
          <h4 className="country__item-percentage">90%</h4>
          <p className="country__text">Active users</p>
        </li>
        <li className="country__item">
          <h4 className="country__item-percentage">80%</h4>
          <p className="country__text">Paid users</p>
        </li> */}
      </ul>
    </section>
  );
}

export default Country;
