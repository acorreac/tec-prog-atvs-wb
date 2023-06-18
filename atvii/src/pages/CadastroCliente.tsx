import { Button } from 'react-bootstrap';
import NavBar from '../components/Navbar';
import './cadastro-cliente.css'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio
}
from 'mdb-react-ui-kit';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';

function CadastroCliente() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/cliente');
    };
  return (
    <>
    <NavBar />
    <div className='pages'>
    <MDBContainer fluid>
          <MDBRow className='justify-content-center align-items-center m-5'>

              <MDBCard>
                  <MDBCardBody className='px-4'>

                    <h2 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5 titulo">Cadastro de Cliente</h2>
                    <div className='forms-cli'>
                    <div className='forms-cli2'>

                      <MDBRow>

                          <MDBCol md='6' className='custom-cli'>
                              Nome Completo: <span className="required-asterisk">*</span>
                              <MDBInput wrapperClass='mb-4' size='lg' id='form1' type='text' required />
                          </MDBCol>

                          <MDBCol md='6' className='custom-cli'>
                              Nome Social:
                              <MDBInput wrapperClass='mb-4' size='lg' id='form2' type='text' />
                          </MDBCol>

                      </MDBRow>

                      <MDBRow>

                      <MDBCol md='6' className='custom-cli2'> CPF: <span className="required-asterisk">*</span> <br />
                        <InputMask
                            mask="999.999.999-99"
                            className="mb-4 form-control"
                            size="lg"
                            id="form3"
                            type="text"
                            required
                        />
                        </MDBCol>

                        <MDBCol md='6' className='custom-cli2'> RG: <span className="required-asterisk">*</span> <br />
                        <InputMask
                            mask="99.999.999-9"
                            className="mb-4 form-control"
                            size="lg"
                            id="form4"
                            type="text"
                            required
                        />
                        </MDBCol>

                        <MDBCol md='6' className='custom-cli2'> Telefone: <span className="required-asterisk">*</span> <br />
                        <InputMask
                            mask="(99) 99999-9999"
                            className="mb-4 form-control"
                            size="lg"
                            id="form5"
                            type="text"
                            required
                        />
                        </MDBCol>

                        <MDBCol md='6' className='custom-cli2'> Telefone 2: <br />
                        <InputMask
                            mask="(99) 99999-9999"
                            className="mb-4 form-control"
                            size="lg"
                            id="form6"
                            type="text"
                        />
                        </MDBCol>

                          <MDBCol md='6' className='mb-4 gender-section'>
                            <h4 className="fw-bold">Gênero: </h4><span className="required-asterisk">*</span>
                            <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Feminino' inline />
                            <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Masculino' inline />
                            <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Outro' inline />
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

export default CadastroCliente;