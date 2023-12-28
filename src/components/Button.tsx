export default function Button({ classCss, children, ...props }) {
  return (
    <button className={"btn " + classCss} {...props}>
      {children}
    </button>
  );
}
