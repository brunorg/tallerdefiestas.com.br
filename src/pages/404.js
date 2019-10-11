import React from "react"

import SEO from "../components/seo"
import bg from "../images/vinho_derramado.jpg"

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <div id="not_found">
      <div className="shadow">
        <img src={bg} alt="Vinho Derramado na pagina nao encontrada" />
        <h1>A festa não pode parar!</h1>
        <p>A página solicitada não existe!</p>
        <p>
          <a href="/">Precisa de algo específico? Conte com nossa equipe!</a>
        </p>
      </div>
    </div>
  </div>
)

export default NotFoundPage
