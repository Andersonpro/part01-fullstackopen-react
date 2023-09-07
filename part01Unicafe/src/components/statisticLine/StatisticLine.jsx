/* eslint-disable react/prop-types */

export const StatisticLine = ({text, value, other=''}) => {

  return (
    <tr>
      <td>{text}</td>
      <td>{value}{other}</td>
    </tr>
  );
}