export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="text-center">
      <p>
        Copyright © {year} <span className="span-text">Daniël dos Ramos</span>.
        All Rights Reserved.
      </p>
    </div>
  );
}
