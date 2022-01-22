import React, { useState, useRef, useEffect } from 'react';
import './EmailReg.css'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { handleEmail, handlePhone } from '../../redux/actions';
import { useHistory } from 'react-router-dom'

const EmailReg = () => {

    const history = useHistory()

    const dispatch = useDispatch()

    const inputBoxFocus = useRef(null)

    useEffect(() => {
        inputBoxFocus.current.focus()
    })

    const [isActive, setIsActive] = useState(true)

    const handleBtnSwitch1 = () => {
        let btn__switch1 = document.querySelector('.btn__switch1')
        let btn__switch2 = document.querySelector('.btn__switch2')
        
        btn__switch1.classList.add('btn__switch__active')
        btn__switch2.classList.remove('btn__switch__active')

        let emailLblError = document.getElementById('emailLbl')
        emailLblError.innerHTML = ''

        setIsActive(!isActive)
    }

    const handleBtnSwitch2 = () => {
        let btn__switch1 = document.querySelector('.btn__switch1')
        let btn__switch2 = document.querySelector('.btn__switch2')
        
        btn__switch1.classList.remove('btn__switch__active')
        btn__switch2.classList.add('btn__switch__active')

        let emailLblError = document.getElementById('emailLbl')
        emailLblError.innerHTML = ''

        setIsActive(!isActive)
    }

    const [data, setData] = useState({
        email: '',
        phone: ''
    })
    
    const handleData = (e) => {
        if(e.target.value !== ''){
            setData({[e.target.name]: e.target.value})

            let continue__btn = document.querySelector('.continue__btn')
            continue__btn.classList.remove('continue__btn__active')  
        }
        else{
            let continue__btn = document.querySelector('.continue__btn')
            continue__btn.classList.add('continue__btn__active')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(data.email !== ''){
            history.push('/verifyEmail')
            dispatch(handleEmail(data))
        }
        else{
            let emailLblError = document.getElementById('emailLbl')
            emailLblError.innerHTML = 'All fields must be filled!'
        }
        
        if(data.phone !== ''){
            dispatch(handlePhone(data))
            history.push('/verifyPhone')
        }
        else{
            let emailLblError = document.getElementById('emailLbl')
            emailLblError.innerHTML = 'All fields must be filled!'
        }
    }

  return (
    <>

        <div className="main__container main__container2">

            <Container fluid={true} className='p-0'>

                <Row className='m-0 p-0'>

                    <Col className='m-0 p-0'>
                       <div className="top__heading">

                            <img src="./images/home2.png" alt="" />

                            <h1><span>Home</span>Page</h1>

                        </div>         
                    </Col>

                </Row>

                <Row className='p-0 m-0'>

                    <Col className='p-4 d-flex justify-content-center align-items-center'>
                    
                        <div className="btn__switch1 btn__switch__active" onClick={handleBtnSwitch1}>Email</div>
                        <div className="btn__switch2" onClick={handleBtnSwitch2}>Phone</div>

                    </Col>

                </Row>
                
                <form onSubmit={handleSubmit}>

                <Row className='m-0 p-0'>

                    <Col className='p-4 pt-0 pb-0 d-flex justify-content-center align-items-start flex-column'>
                        
                        {isActive && <input type="text" name='email' onChange={handleData}  placeholder='example@example.com' className='emailInp' required ref={inputBoxFocus}/>}
                            
                        {!isActive && <input type="number" name='phone' placeholder='Ex (337) 378 8383' onChange={handleData}  className='emailInp phoneInp' required ref={inputBoxFocus}/>}                        

                        <label id='emailLbl' className='accLblError'></label>

                    </Col>

                </Row>

                <Row className='m-0 p-0'>

                    <Col className='p-4 d-flex justify-content-center align-items-center'>
                        <button type='submit' className='continue__btn continue__btn__active' onClick={handleSubmit}>Continue <img src="./images/left-arrow.png" alt="" /></button>
                    </Col>

                </Row>
                
                </form>

                <Row className='m-0 p-0'>

                    <Col className='p-4 pt-0 pb-0  d-flex justify-content-center align-items-center'>
                        <p className='emailPara1'>By clicking continue you must agree to near labs <span>Terms & Conditions</span> and <span>Privacy Policy</span></p>
                    </Col>

                </Row>

                <Row className='m-0 p-0'>

                    <Col className='p-4 pt-5 pb-5 d-flex justify-content-center align-items-center'>
                        <div className='customHr'></div>
                    </Col>

                </Row>

                <Row className='m-0 p-0'>

                    <Col className='p-4 pt-2 pb-2 d-flex justify-content-center align-items-center flex-column'>
                        <p className='emailPara2'>Already have NEAR account?</p>

                        <div className='continue__btn login__btn'>Log in with NEAR <img src="./images/left-arrow.png" alt="" /></div>
                    </Col>

                </Row>

            </Container>

        </div>

    </>
  );
};

export default EmailReg;
