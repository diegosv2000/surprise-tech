import type { MetaFunction } from "@remix-run/node";
import { unstable_defineLoader as defineLoader } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getInfo } from "~/api";
import { Hearts } from "./hearts";
import { NotFound } from "../components";
import "./hearts.css";
import { GiftTypes } from "~/utils";

export const meta: MetaFunction = () => {
  return [
    { title: "🎁" },
    { name: "description", content: "Welcome!" },
  ];
};

export function ErrorBoundary() {
  return <NotFound />;
}

export const loader = defineLoader(async ({ params }) => {
  const { id } = params;

  try {
    const response = await getInfo(id as string, GiftTypes.DECLARATION);

    if (!response) {
      throw new Response(null, {
        status: 404,
        statusText: "Not Found",
      });
    }

    return response;
  } catch (e) {
    throw new Error("Page Not Found");
  }
});

export default function Index() {
  const {data} = useLoaderData<DeclarationDBO>();
  return (
    <div className="hearts-view-container">
      <section className="section-heart heart-section-home">
        <p className="heart-initial-text">TENGO ALGO QUE DECIRTE</p>
        <p className="heart-indication">(DESLIZA HACIA ABAJO)</p>
      </section>
      <section className="section-heart heart-section-home">
        <p className="heart-section-home-text">{data.introduction}</p>
        <p className="heart-indication">(SIGUE DESLIZANDO)</p>
        </section>
      <section className="section-heart container-heart-section">
        <Hearts text={data.declaration} />
      </section>
    </div>
  );
}
