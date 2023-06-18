import NavBar from "../components/Navbar";
import { useState } from "react";
import './consumo.css'

function Consumo() {
  // Estado para controlar qual botão está ativo
  const [activeButton, setActiveButton] = useState("cliente");

  // Função para atualizar o estado ao clicar em um botão
  const handleClick = (buttonId: string) => {
    setActiveButton(buttonId);
  };

  return (
    <>
      <NavBar />
      <div className="page">
        <div className="buttons">
          <button
            className={`btn ${activeButton === "cliente" ? "active" : ""}`}
            onClick={() => handleClick("cliente")}
          >
            Cliente
          </button>
          <button
            className={`btn ${activeButton === "produto" ? "active" : ""}`}
            onClick={() => handleClick("produto")}
          >
            Produto
          </button>
          <button
            className={`btn ${activeButton === "servico" ? "active" : ""}`}
            onClick={() => handleClick("servico")}
          >
            Serviço
          </button>
        </div>
        <div className="content">
          {activeButton === "cliente" && (
            <div>
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Data</th>
          <th>Consumo <br />
            (Produto ou Serviço)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mabel</td>
          <td>20/11</td>
          <td>Cabeleleiro</td>
        </tr>
        <tr>
          <td>Ludimila</td>
          <td>21/11</td>
          <td>Shampoo</td>
        </tr>
        <tr>
          <td>Micaela</td>
          <td>21/11</td>
          <td>Manicure</td>
        </tr>
      </tbody>
            </div>
          )}
          {activeButton === "produto" && (
            <div>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Data</th>
          <th>Cliente</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Shampoo</td>
          <td>20/11</td>
          <td>Maria</td>
        </tr>
        <tr>
          <td>Esmalte</td>
          <td>21/11</td>
          <td>Alice</td>
        </tr>
        <tr>
          <td>Esmalte</td>
          <td>21/11</td>
          <td>Micaela</td>
        </tr>
      </tbody>
            </div>
          )}
          {activeButton === "servico" && (
            <div>
              <thead>
        <tr>
          <th>Serviço</th>
          <th>Data</th>
          <th>Cliente</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cabeleleiro</td>
          <td>20/11</td>
          <td>Maria</td>
        </tr>
        <tr>
          <td>Manicure</td>
          <td>21/11</td>
          <td>Alice</td>
        </tr>
        <tr>
          <td>Pedicure</td>
          <td>21/11</td>
          <td>Micaela</td>
        </tr>
      </tbody>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Consumo;
