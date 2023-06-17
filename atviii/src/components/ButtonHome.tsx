import { Button } from "react-bootstrap";
import './button-home.css'

function ButtonHome() {
    return (
    <>
        <Button className="button-home" href="/cliente">CLIENTES</Button>
        <Button className="button-home" href="/produto">PRODUTOS</Button>
        <Button className="button-home" href="/servico">SERVIÇOS</Button>
    </>
    )
}

export default ButtonHome;