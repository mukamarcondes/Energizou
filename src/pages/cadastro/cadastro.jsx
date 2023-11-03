import "./cadastro.css";
import Eu from "../../img/Captura de tela 2023-10-31 121350.png";
import { Link } from "react-router-dom";


function Certificados() {
  return (
    <div className="geral">
      <div className="t">
        <div className="topo">
          <img className="logo" src={Eu} alt="minha foto" />
        </div>

        <div className="Subtopo">
          <h1>Nova Empresa</h1>
        </div>
      </div>

      <div className="container-geral">
        <div className="primeiro">

          <div class="text">
            <input type="text"  placeholder="Nome Completo"/>
          </div>

          <div class="text">
            <input type="text"  placeholder="Nome da Empresa"/>
          </div>

          <div class="text">
            <input type="text"  placeholder="Cnpj"/>
          </div>

          <div class="text">
            <input type="text"  placeholder="Senha"/>
          </div>

        </div>

        <div className="segundo">

        <div class="text">
            <input type="text"  placeholder="Cep"/>
          </div>

          <div class="text">
            <input type="text"  placeholder="Endereço"/>
          </div>

          <div class="text">
            <input type="text"  placeholder="Telefone"/>
          </div>

          <div class="text">
            <input type="text"  placeholder="Email"/>
          </div>

        </div>
      </div>

      <div className="terceiro">

          <div class="text">
            <input type="text"  placeholder="Confirmar Senha"/>
          </div>

      </div>

        <div class="button">
            <input type="button" value="Cadastrar"/>
        </div>

        <Link to="/">
      <div class="button2">
     <input type="button2" value="Cancelar"/>
      </div>
    </Link>
      </div>

      

  );
}

export default Certificados;
