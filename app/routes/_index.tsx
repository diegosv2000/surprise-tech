import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Inicio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container-root">
      <div className="header-root">
        <h1>Arte en tu foto</h1>
      </div>
      <div className="main-root">
        <div className="title-root">
          <h2>TU FOTO, NUESTRO ARTE</h2>
        </div>
        <p className="description-root">
          Transforma tus recuerdos en un regalo digital único. Sube tu foto y
          permítenos darle un toque especial que alegrará a esa persona especial
          en tu vida.
        </p>
        <a href="https://wa.me/51987870396?text=Hola,%20quiero%20informacion!" target="_blank" className="go-whatsapp" rel="noreferrer">
          Contáctanos
        </a>
      </div>
    </div>
  );
}
