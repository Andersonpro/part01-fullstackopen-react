/* eslint-disable react/prop-types */

export const Hello = ({nome, idade}) => {

  const anoDeNascimento = () => new Date().getFullYear() - idade;

  return (
    <>
      <p>
        Olá {nome}, você tem {idade} anos.
      </p>
      <p>Então, você nasceu provavelmente em {anoDeNascimento()}.</p>
    </>
  );
}