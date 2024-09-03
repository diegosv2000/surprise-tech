import type { MetaFunction } from "@remix-run/node";
import { unstable_defineLoader as defineLoader } from "@remix-run/node";

import "./flowers.css";
import { useLoaderData } from "@remix-run/react";
import { getInfo } from "~/api";
import { Flowers } from "./flower";
import { NotFound } from "../components";

export const meta: MetaFunction = () => {
  return [
    { title: "Yellow flowers By Id" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export function ErrorBoundary() {
  return <NotFound />
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
    throw new Error("Hubo un error xD");
  }
});

export default function Index() {
  const data = useLoaderData<CardDBO>();
  return (
    <div className="container-flowers">
      <div className="container-photo">
        <img src={data.photoUrl} alt="s" />
      </div>

      <Flowers />
    </div>
  );
}
