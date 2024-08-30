import type { MetaFunction } from "@remix-run/node";
import { unstable_defineLoader as defineLoader } from "@remix-run/node";

import "./flowers.css";
import {  useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Yellow flowers By Id" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = defineLoader(async ({ params }) => {
  const { id } = params;

 
  

  try{
    console.log("este es el ID:", id )
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    
    const data = await  response.json()

    return data
  }catch(e){

    throw new Error ("Hubo un error xD")
  }

  
});

export default function Index() {
  const data = useLoaderData<{
    id: string
  }>();
  return (
    <div className="container-flowers">
      <p>Flores Amarillas Por ID: {data.id}</p>
      
    </div>
  );
}
