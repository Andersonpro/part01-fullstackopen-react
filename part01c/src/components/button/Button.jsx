/* eslint-disable react/prop-types */

export const Button = ({onClick, descricao}) => {
  return (
    <button onClick={onClick}>{descricao}</button>
  );
}