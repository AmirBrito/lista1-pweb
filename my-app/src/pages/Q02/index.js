import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Q02() {
  const [consumo, setConsumo] = useState("");
  const [pessoas, setPessoas] = useState("");
  const [gorjeta, setGorjeta] = useState("");

  function emitirConta(event) {
    event.preventDefault();
    let floatConsumo = parseFloat(consumo.replace(",", "."));
    let intPessoas = pessoas;
    let floatGorjeta = parseFloat(gorjeta.replace(",", "."));

    const resultado =
      (floatConsumo + (floatConsumo * floatGorjeta) / 100) / intPessoas;
    alert("Valor por pessoa: R$ " + resultado);

    setConsumo("");
    setPessoas("");
    setGorjeta("");
  }

  return (
    <div className="page-q02">
      <Link to="/"> Home </Link>
      <h1> Nota de Consumo </h1>
      <form onSubmit={emitirConta}>
        <input
          type="text"
          value={consumo}
          onChange={(event) => setConsumo(event.target.value)}
          placeholder="Consumo"
          required
        />
        <input
          type="text"
          value={pessoas}
          onChange={(event) => setPessoas(event.target.value)}
          placeholder="Pessoas"
          required
        />
        <input
          type="text"
          value={gorjeta}
          onChange={(event) => setGorjeta(event.target.value)}
          placeholder="Gorjeta %"
          required
        />
        <button type="submit"> Gerar Nota </button>
      </form>
    </div>
  );
}

export default Q02;
