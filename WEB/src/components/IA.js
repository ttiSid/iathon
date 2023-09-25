import { iaNaDiabetes } from "../mock/ia-na-diabetes";

export default function Ia() {
  const listItems = iaNaDiabetes.map((item) => {
    return (
      <li className="ia__item" key={item.id}>
        <img className="ia__image" src={item.img} alt={item.alt} />

        <p className="ia__text">{item.text}</p>
      </li>
    );
  });

  return (
    <section className="ia" id="ia">
      <h2 className="ia__title">
        Os desafios e potenciais da regulamentação da IA no Brasil, no âmbito da
        prática médica
      </h2>
      <p className="ia__authors">Por Fernando Malerbi e Márcio Krakauer</p>
      <ul className="ia__items">{listItems}</ul>
      <p className="ia__quote">
        *Fernando Malerbi é médico do Departamento de Oftalmologia da
        Universidade Federal de São Paulo e integrante do Departamento de
        Doenças Oculares da Sociedade Brasileira de Diabetes (SBD).Márcio
        Krakauer é Coordenador Geral da Endocrinologia do Grupo Leforte – HMCG e
        Coordenador do Departamento de Tecnologia, Saúde Digital e Telemedicina
        em Diabetes da SBD.
      </p>
    </section>
  );
}
