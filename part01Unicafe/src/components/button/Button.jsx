/* eslint-disable react/prop-types */

export const Button = ({onClick, content}) => {

  return (
    <button onClick={onClick}>{content}</button>
  );
}