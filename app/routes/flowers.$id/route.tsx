import type { MetaFunction } from "@remix-run/node";
import { unstable_defineLoader as defineLoader } from "@remix-run/node";

import "./flowers.css";
import { useLoaderData } from "@remix-run/react";
import { getInfo } from "~/api";

export const meta: MetaFunction = () => {
  return [
    { title: "Yellow flowers By Id" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = defineLoader(async ({ params }) => {
  const { id } = params;

  try {
    const response = await getInfo(id as string);

    if (!response) throw new Error("No hay datos");

    return response;
  } catch (e) {
    throw new Error("Hubo un error xD");
  }
});

export default function Index() {
  const data = useLoaderData<CardDBO>();
  return (
    <div className="container-flowers">
      <p>Flores Amarillas Por ID: {data.id}</p>
    </div>
  );
}
