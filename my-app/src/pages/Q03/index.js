import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Q03() {
  const [numero, setNumero] = useState(0);
  const [sorteado, setSorteado] = useState(0);
  const [resultado, setResultado] = useState("");

  useEffect(() => {
    setSorteado(Math.floor(Math.random() * 100));
  }, []);

  let calcular = useCallback(() => {
    if (numero > sorteado) {
      setResultado("o numero é menor");
    } else if (numero < sorteado) {
      setResultado("o numero é maior");
    } else {
      setResultado("acertou!");
    }
    alert(resultado);
  }, [numero, sorteado]);

  return (
    <div className="page-q03">
      <Link to="/"> Home </Link>
      <h1> Zero a Cem </h1>
      <form onSubmit={calcular}>
        <input
          type="text"
          value={numero}
          onChange={(event) => setNumero(event.target.value)}
          placeholder="Numero"
          required
        />
        <button onClick={() => calcular()}> Jogar </button>
      </form>
    </div>
  );
}

export default Q03;
