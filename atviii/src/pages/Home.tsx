import ButtonHome from '../components/ButtonHome';
import NavBar from '../components/Navbar';
import './home.css'

function Home () {
    return (
        <>
            <NavBar />
            <div className="body">
                <p className='paragrafo'>BEM-VINDO(A) AO WORLD BEAUTY!</p>
                <div className='botoes'>
                    <ButtonHome />
                </div>
            </div>
        </> 
    )
}

export default Home;