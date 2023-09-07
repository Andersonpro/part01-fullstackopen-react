/* eslint-disable react/prop-types */


export const Historico = ({todosOsCliques}) => {
    if(todosOsCliques === 0) {
      return (
        <div>Clique em um dos botões para usar a aplicação!</div>
      );
    }

    return (
      <div>Histórico de clique nos botões: {todosOsCliques}</div>
    );
}