import classNames from "classnames";

function Button({ onClick, className, children }) {
  return (
    <button
      type="button"
      className={classNames("p-2 border-2 rounded-md", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
