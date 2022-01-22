import React from 'react';
import './SecureSeed.css'
import { Container, Row, Col } from 'react-bootstrap';
import NumberBox from '../../components/NumberBox/NumberBox';
import { useHistory } from 'react-router-dom'

const SecureSeed = () => {

    const history = useHistory()

    const handleSubmit = () => {
        history.push('/login')
    }

  return (
        <>

            <div className="main__container main__container6">

                <Container fluid={true} className='p-0'>

                    <Row className='m-0 p-0'>

                        <Col className='m-0 p-0'>
                            <div className="top__heading">

                                <h1>Secure your account</h1>

                                <div className="close__btn">
                                    <img src="./images/close.png" alt="" />
                                </div>

                            </div>         

                        </Col>

                    </Row>

                    <Row className='m-0 p-0'>

                        <Col className='p-0 d-flex justify-content-start align-items-center'>
                            <div className='taskHr taskHr1'></div>
                        </Col>

                    </Row>

                    <Row className='m-0 p-0 pt-1'>

                        <Col className='p-4 pb-3 d-flex justify-content-center align-items-center flex-column'>
                            <p className='accountPara1'>Keep your apps safe from other with access to your computer.</p>
                        </Col>

                    </Row>

                    <Row className='m-0 p-0'>

                        <Col className='p-3 pt-0 pb-0  d-flex justify-content-center align-items-center flex-column'>
                            <h1 className='seedheading1'>Seed phrase</h1>
                            
                            <div className="phraseContainer">

                                <NumberBox num='1' content='gather' />
                                <NumberBox num='2' content='engage' />
                                <NumberBox num='3' content='father' />
                                <NumberBox num='4' content='plant' />
                                <NumberBox num='5' content='indego' />
                                <NumberBox num='6' content='dental' />
                                <NumberBox num='7' content='sick' />
                                <NumberBox num='8' content='fungus' />
                                <NumberBox num='9' content='river' />
                                <NumberBox num='10' content='morning' />
                                <NumberBox num='11' content='love' />
                                <NumberBox num='12' content='cow' />

                            </div>

                        </Col>

                    </Row>

                    <Row className='m-0 p-0 pt-1'>

                        <Col className='p-4 pb-3 d-flex justify-content-center align-items-center'>
                            <div className="copySeedDiv">
                                <img src="./images/Frame.png" alt="" />
                                <span className='copySeedPara'>Copy seed</span>
                            </div>
                        </Col>

                    </Row>

                    <Row className='m-0 p-0'>

                        <Col className='p-4 pt-2 pb-2 d-flex justify-content-center align-items-center'>
                            <button onClick={handleSubmit} type='submit' className='continue__btn continue__btn1'>Continue to Log in <img src="./images/left-arrow.png" alt="" /></button>
                        </Col>

                    </Row>

                </Container>

            </div>

        </>
    );
};

export default SecureSeed;
