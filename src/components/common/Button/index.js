import "./style.css";

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {label}
    </button>
  );
};

export default Button;
