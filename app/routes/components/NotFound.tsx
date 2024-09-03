import { Link } from "@remix-run/react"
import "./style.css"

export const NotFound = () =>{
  return <div className="container-404">
    <h1>Pagina no encontrada 🤐 </h1>
    <Link to="/" className="link-not-found">Ir a página principal</Link>
  </div>
}