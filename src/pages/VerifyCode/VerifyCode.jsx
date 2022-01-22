import React, { useRef, useState } from 'react';
import './VerifyCode.css'
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const VerifyCode = ({para1, para2}) => {

    const history = useHistory()

    const verifyBox = useRef(null)

    useEffect(() => {

        verifyBox.current.focus()

    }, [])

    const [data, setData] = useState({
        inp1: '',
        inp2: '',
        inp3: '',
        inp4: '',
        inp5: '',
        inp6: '',
    })

    const handleData = (e) => {
        if(e.target.value !== ''){
            setData({...data, [e.target.name]: e.target.value})

            let continue__btn = document.querySelector('.continue__btn1')
            continue__btn.classList.remove('continue__btn__active')  
        }
        else{
            let continue__btn = document.querySelector('.continue__btn1')
            continue__btn.classList.add('continue__btn__active')
        }
    }

    const handleSubmit = () => {

        if(data.inp1 !== '' && data.inp2 !== '' && data.inp3 !== '' && data.inp4 !== '' && data.inp5 !== '' && data.inp6 !== ''){
            history.push('/createAccount')
        }
        else{
            let emailLblError = document.getElementById('veifyLbl')
            emailLblError.innerHTML = 'All fields must be filled!'
        }
    }

  return (
    <>

        <div className="main__container main__container3">

            <Container fluid={true} className='p-0'>

                <Row className='m-0 p-0'>

                    <Col className='m-0 p-0'>
                        <div className="top__heading">

                            <h1>Verification</h1>

                            <div className="close__btn">
                                <img src="./images/close.png" alt="" />
                            </div>

                        </div>         

                    </Col>

                </Row>

                <Row className='m-0 p-0'>

                    <Col className='p-4 d-flex justify-content-center align-items-center flex-column'>
                        <p className='verifyPara1'>{para1}</p>
                        <p className='verifyPara2'>{para2}</p>
                    </Col>

                </Row>

                <Row className='m-0 p-0'>

                    <Col className='p-4 pt-0 pb-0 d-flex justify-content-center align-items-center flex-column'>
                        <p className='verifyPara3'>Enter verification code</p>
                        <div className="code__collection">
                            <input type='text' name='inp1' maxLength={1} onChange={handleData} className="box1" ref={verifyBox} />
                            <input type='text' name='inp2' maxLength={1} onChange={handleData} className="box1"/>
                            <input type='text' name='inp3' maxLength={1} onChange={handleData} className="box1"/>
                            <input type='text' name='inp4' maxLength={1} onChange={handleData} className="box1"/>
                            <input type='text' name='inp5' maxLength={1} onChange={handleData} className="box1"/>
                            <input type='text' name='inp6' maxLength={1} onChange={handleData} className="box1"/>
                        </div>

                        <label id='veifyLbl' className='mt-4 accLblError'></label>

                    </Col>


                </Row>

                <Row className='m-0 p-0'>

                    <Col className='p-4 pt-2 d-flex justify-content-center align-items-center'>
                        <button type='button' onClick={handleSubmit} className='continue__btn continue__btn1 continue__btn__active'>Continue <img src="./images/left-arrow.png" alt="" /></button>
                    </Col>

                </Row>

                <Row className='m-0 p-0'>

                    <Col className='p-4 pt-3 pb-3 d-flex justify-content-center align-items-center'>
                        <div className='customHr'></div>
                    </Col>

                </Row>

                <Row className='m-0 p-0'>

                    <Col className='p-4 d-flex justify-content-center align-items-center flex-column'>
                        <p className='verifyPara1'>Didn't receive your code?</p>
                        <p className='verifyPara2 my-2'>Send to a different email address</p>
                        <p className='verifyPara2'>Resend your code</p>
                    </Col>

                </Row>

            </Container>

        </div>

    </>
  );
};

export default VerifyCode;
