/* eslint-disable react/prop-types */

export const Total = (props) => {
  return (
    <>
      <p>Number of exercices {props.course.parts.reduce((sum, value) => sum + value.exercises, 0)}</p>
    </>
  );
}