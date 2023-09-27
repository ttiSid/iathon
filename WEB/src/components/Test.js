function Test() {
  return (
    <section className="test" id="test">
      <div className="test__text-container">
        <h2 className="test__title">Faça seu teste aqui!</h2>
        <p className="test__paragraph">
          Este teste tem como base, dados coletados do ....... , não serve como
          diagnóstico médico, para maiores esclarecimentos, consulte o seu
          médico, ou se dirija até o agente de saúde mais próximo.
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
