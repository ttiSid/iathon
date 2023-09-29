function Test() {
  return (
    <section className="test" id="test">
      <div className="test__text-container">
        <h2 className="test__title">Faça seu teste aqui!</h2>
        <p className="test__paragraph">Este teste tem como base dados coletados do Repositório da <a className="test__link" href="https://archive.ics.uci.edu/dataset/529/early+stage+diabetes+risk+prediction+dataset" target="_blanc">UC Irvine</a>, a partir do qual um modelo de Machine Learning foi construído para fazer uma previsão de chances de desenvolver ou estar com diabetes. INFORMAMOS que este modelo não serve como diagnóstico médico, orientamos a buscar informações junto aos agentes de saúde mais próximo.
        </p>
      </div>
      <div className="test__container">
        <iframe
          className="test__input-container"
          src="https://iathon-diabetes-prediction.streamlit.app/?embedded=true"
        ></iframe>
      </div>
    </section>
  );
}

export default Test;
