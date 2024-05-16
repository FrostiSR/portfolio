import "./Button.css";

export default function Button({ name, children, ...props }) {
  return (
    <>
      <button {...props}>
        {name} {children}
      </button>
    </>
  );
}
