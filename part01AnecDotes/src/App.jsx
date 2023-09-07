import { useState } from 'react'
import { Button } from './button/Button';
import { Title } from './title/Title';

function App() {

  const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência.',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const [current, setCurrent] = useState(0);
  const [mostVotes, setMostVotes] = useState(0);

  const switchAnecDotes = () => {
    const index = Math.round(Math.random() * (anecdotes.length - 1));
    setCurrent(index);
    setSelected(index);
  }

  const vote = () => {
    const novoArray = [...points];
    novoArray[current] += 1;
    const maiorElemento = novoArray.indexOf(Math.max(...novoArray));
    setMostVotes(maiorElemento);
    setPoints(novoArray);
  }

  return (
    <>
      <Title text='Anecdote of the day' />
      <p>{anecdotes[selected]}</p>
      <p>has {points[current]} votes</p>
      <Button onClick={vote} content='vote' />
      <Button onClick={switchAnecDotes} content='next anecdote'/>
      <Title text='Anecdote with most votes' />
     <p>{anecdotes[mostVotes]}</p>
     <p>has {points[mostVotes]} votes</p>
    </>
  )
}

export default App
