import Header from "../Header/Header";

export default function Section({ title, subTitle, children, ...props }) {
  return (
    <section {...props}>
      <Header title={title} subTitle={subTitle} />
      {children}
    </section>
  );
}
