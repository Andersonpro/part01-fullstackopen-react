/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "./components/button/Button";
import { Historico } from "./components/historico/Historico";

function App() {
  const [esquerda, setEsquerda] = useState(0);
  const [direita, setDireita] = useState(0);
  const [todosOsCliques, setTodos] = useState(0);

  const handleClickEsquerda = () => {
    setEsquerda(esquerda + 1);
    setTodos(todosOsCliques + 1);
  }

  const handleClickDireita = () => {
    setDireita(direita + 1);
    setTodos(todosOsCliques + 1);
  }

  return (
    <div>
      <Button onClick={handleClickEsquerda} descricao={esquerda} />
      <Button onClick={handleClickDireita} descricao={direita} />
      <Historico todosOsCliques={todosOsCliques} />
    </div>
  );

}


export default App
