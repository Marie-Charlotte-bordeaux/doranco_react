import PropTypes from "prop-types";

export function Hobbies({ hobbies }) {
  return (
    <>
      <h3>Hobbies</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li className="italic list-disc" key={hobby.id}>{hobby.name}</li>
        ))}
      </ul>
    </>
  );
}

Hobbies.propTypes = {
  hobbies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};