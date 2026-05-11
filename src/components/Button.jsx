import "./Button.css";

function Button({ text, className = "btn-primary" }) {
  return <button className={`btn ${className}`}>{text}</button>;
}

export default Button;