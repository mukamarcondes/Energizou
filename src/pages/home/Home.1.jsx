import Eu from "../../img/Captura de tela 2023-10-31 121350.png";
import Lixo from "../../img/lata-de-lixo (1).png";
import Lapis from "../../img/lapis.png";
import "./home.css";
import { Link } from "react-router-dom";

export function Home() {
    return (

        <div className='geral'>

            <div className="t">
                <div className="topo">
                    <img className="logo" src={Eu} alt="minha foto" />
                </div>

                <div className='Subtopo'>
                    <div className="row">
                        <h1>Empresas Cadastradas</h1>

                       <Link to="/cadastro"  style={{color:"#fff"}}> <button onClick="" className='botão3'>  Novo </button></Link>
                    </div>

                    <div className="pes">
                        <form class="search-container">
                            <input type="text" id="search-bar" placeholder="Pesquisar"></input>
                        </form>
                    </div>
                </div>
            </div>
            {/* tabela */}

            <table style={{ border: '1px' }}>
                <thead>
                    <tr className='linha1'>
                        <th>ID</th>
                        <th>Empresa</th>
                        <th>Cliente</th>
                        <th>CNPJ</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <br />
                <tbody>
                    <tr className='linha2'>
                        <th>1</th>
                        <th>Empresa1</th>
                        <th>Fulano1</th>
                        <th>35.418.435/0001-35</th>
                        {/* <th> <a href='#'><img src={Olho}/> </a> </th> */}
                        <th> <Link to="/editar">  <img style={{ width: "30px", height: "30px" }} src={Lapis} /> </Link> </th>
                        <th> <a href='#'><img style={{ width: "30px", height: "30px" }} src={Lixo} /> </a> </th>
                    </tr>
                </tbody>
                <br />
                <tbody>
                    <tr className='linha2'>
                        <th>2</th>
                        <th>Empresa2</th>
                        <th>Fulano2</th>
                        <th>45.667.488/0001-43</th>
                        {/* <th> <a href='#'><img src={Olho}/> </a> </th> */}
                       <th> <Link to="/editar">  <img style={{ width: "30px", height: "30px" }} src={Lapis} /> </Link> </th>
                        <th> <a href='#'><img style={{ width: "30px", height: "30px" }} src={Lixo} /> </a> </th>
                    </tr>
                </tbody>
                <br />
                <tbody>
                    <tr className='linha2'>
                        <th>3</th>
                        <th>Empresa3</th>
                        <th>Fulano3</th>
                        <th>74.093.058/0001-63</th>
                        {/* <th> <a href='#'><img src={Olho}/> </a> </th> */}
                        <th> <Link to="/editar">  <img style={{ width: "30px", height: "30px" }} src={Lapis} /> </Link> </th>
                        <th> <a href='#'><img style={{ width: "30px", height: "30px" }} src={Lixo} /> </a> </th>
                    </tr>
                </tbody>
                <br />
                <tbody>
                    <tr className='linha2'>
                        <th>4</th>
                        <th>Empresa4</th>
                        <th>Fulano4</th>
                        <th>39.325.524/0001-98</th>
                        {/* <th> <a href='#'><img src={Olho}/> </a> </th> */}
                        <th> <Link to="/editar">  <img style={{ width: "30px", height: "30px" }} src={Lapis} /> </Link> </th>
                        <th> <a href='#'><img style={{ width: "30px", height: "30px" }} src={Lixo} /> </a> </th>
                    </tr>
                </tbody>
                <br />
                <tbody>
                    <tr className='linha2'>
                        <th>5</th>
                        <th>Empresa5</th>
                        <th>Fulano5</th>
                        <th>92.050.056/0001-79</th>
                        {/* <th> <a href='#'><img src={Olho}/> </a> </th> */}
                        <th> <Link to="/editar">  <img style={{ width: "30px", height: "30px" }} src={Lapis} /> </Link> </th>
                        <th> <a href='#'><img style={{ width: "30px", height: "30px" }} src={Lixo} /> </a> </th>
                    </tr>
                </tbody>
            </table>    
            
                        <br />
                        <br />
                        <br />
        </div>

    );
}

export default Home;