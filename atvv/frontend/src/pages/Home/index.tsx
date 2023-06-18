/* eslint-disable react/jsx-pascal-case */
import Navbar_ from '../../component/index';
import './styles.css'

function Home() {
    return (
       <section>
           <header>
               <Navbar_/>
           </header>
           <main>
               <div className="text">
                    <h1>Bem vindo ao Grupo World Beauty </h1>
                    <h3>Aqui você faz o controle de Clientes, Produtos, Serviços e o Consumo dos Clientes</h3>
               </div>
           </main>
       </section>
    );
}

export default Home;