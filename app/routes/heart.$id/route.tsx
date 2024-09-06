import type { MetaFunction } from "@remix-run/node";
import { unstable_defineLoader as defineLoader } from "@remix-run/node";

import "./hearts.css";
// import { useLoaderData } from "@remix-run/react";
import { getInfo } from "~/api";
import { Hearts } from "./hearts";
import { NotFound } from "../components";

export const meta: MetaFunction = () => {
  return [
    { title: "🎁" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export function ErrorBoundary() {
  return <NotFound />;
}

export const loader = defineLoader(async ({ params }) => {
  const { id } = params;

  try {
    const response = await getInfo(id as string);

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
  // const data = useLoaderData<CardDBO>();
  return (
    <div className="hearts-view-container">
      <section className="section-heart heart-section-home">
        <p>TENGO ALGO QUE DECIRTE</p>
      </section>
      <section className="section-heart container-heart-section">
        <Hearts text="¿Quieres ser mi novia?" />
      </section>
    </div>
  );
}
