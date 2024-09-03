import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Surprise Tech" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container-root">
      <div className="header-root">
        <h1>Surprise Tech</h1>
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
        <a href="./" target="_blank" className="go-whatsapp">
          Contáctanos
        </a>
      </div>
    </div>
  );
}
