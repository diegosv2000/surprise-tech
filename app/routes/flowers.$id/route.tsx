import type { MetaFunction } from "@remix-run/node";
import "./flowers.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Yellow flowers By Id" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container-flowers">
      <p>Flores Amarillas Por ID</p>
      
    </div>
  );
}
