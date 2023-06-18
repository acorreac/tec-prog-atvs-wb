import { Button } from 'react-bootstrap';
import NavBar from '../components/Navbar';
import './cadastro-produto.css'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput}
from 'mdb-react-ui-kit';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';

function CadastroProduto() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/produto');
    };
  return (
    <>
    <NavBar />
    <div className='pages'>
    <MDBContainer fluid>
          <MDBRow className='justify-content-center align-items-center m-5'>

              <MDBCard>
                  <MDBCardBody className='px-4'>

                    <h2 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5 titulo">Cadastro de Produto</h2>
                    <div className='forms-prod'>
                    <div className='forms-prod2'>

                      <MDBRow>

                          <MDBCol md='6' className='custom-prod'>
                              Nome do produto: <span className="required-asterisk">*</span>
                              <MDBInput wrapperClass='mb-4' size='lg' id='form1' type='text' required />
                          </MDBCol>

                      </MDBRow>

                      <MDBRow>

                      <MDBCol md='6' className='custom-prod2'> Código do produto: <span className="required-asterisk">*</span> <br />
                        <InputMask
                            mask="999-9"
                            className="mb-4 form-control"
                            size="lg"
                            id="form3"
                            type="text"
                            required
                        />
                        </MDBCol>

                      </MDBRow>
                      </div>
                      <Button className='mb-4 custom-btn' size='lg' onClick={handleClick}>Cadastrar</Button>
                    </div>
                  </MDBCardBody>
              </MDBCard>

          </MDBRow>
    </MDBContainer>
    </div>
      </>
  );
}

export default CadastroProduto;