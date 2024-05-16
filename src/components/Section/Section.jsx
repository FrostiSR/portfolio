import Header from "../Header/Header";
import React from "react";

export default React.memo(function Section({
  title,
  subTitle,
  children,
  ...props
}) {
  return (
    <section {...props}>
      <Header title={title} subTitle={subTitle} />
      {children}
    </section>
  );
});
