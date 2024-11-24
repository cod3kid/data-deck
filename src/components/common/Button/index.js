import "./style.css";

const Button = ({ label, onClick, ...props }) => {
  return (
    <button onClick={onClick} className="button" {...props}>
      {label}
    </button>
  );
};

export default Button;
