import React, { useRef, useEffect, useState } from 'react';
import './Login.css'
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

const Login = () => {

    const history = useHistory()

    const inputBoxFocus = useRef(null)

    const selector = useSelector(state => state.reducer1)


    console.log(selector.Pass);

    console.log(selector, 'selector');

    useEffect(() => {
        inputBoxFocus.current.focus()
    }, [])

    const [pass, setPass] = useState('')

    const getPass = (e) => {
        if(e.target.value !== null){
            setPass(e.target.value)
            let continue__btn = document.querySelector('.unclock__btn')
            continue__btn.classList.remove('continue__btn__active')
        }
        else{
            let continue__btn = document.querySelector('.unclock__btn')
            continue__btn.classList.add('continue__btn__active')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(pass !== null){
            if(pass === selector.password){
                let accLblError = document.getElementById('loginPassLbl')
                accLblError.style.color = 'green'
                accLblError.innerHTML = 'Login Successfully!'

                setTimeout(() => {
                    history.push('/')
                }, 2000)
            }
            else{
                let accLblError = document.getElementById('loginPassLbl')
                accLblError.innerHTML = 'Incorrect Password!'
            }
        }
        else{
            let accLblError = document.getElementById('loginPassLbl')
            accLblError.innerHTML = 'Password field must be filled!'
        }

    }

  return (
        <>

            <div className="main__container main__container7">

                <Container fluid={true} className='p-0'>

                    <Row className='p-0 m-0'>

                        <Col className='p-0'>

                            <div className="bg__header" style={{backgroundImage: 'url(./images/bg2.png)'}}>

                                <div className="login__heading1">

                                    <img src="./images/home3.png" alt="" />

                                    <h1>HomePage</h1>

                                </div>

                                <p className='loginPara1'>a web3 gateway to hidden experiences</p>

                            </div>

                        </Col>

                    </Row>

                    <Row className='m-0 p-0 pt-1'>

                        <Col className='p-3 pt-4 pb-0 d-flex justify-content-center align-items-center flex-column'>
                            <h1 className='loginHeading2'>Welcome back!</h1>
                        </Col>

                    </Row>

                    <Row className='m-0 p-0 pt-1'>

                        <Col className='p-4 pt-1 pb-1 d-flex justify-content-center align-items-center flex-column'>
                            <p className='loginPara2'>Please enter the password to unlock this wallet</p>
                        </Col>

                    </Row>

                    <form onSubmit={handleSubmit}>

                    <Row className='m-0 p-0'>

                        <Col className='p-4 pt-0 pb-0 d-flex justify-content-center align-items-start flex-column'>
                            <label htmlFor="passid" className='nameLbl'>
                                Password
                            </label>

                            <input type="password" id='passid' onChange={getPass} value={pass} className='fnameInp' required ref={inputBoxFocus}/>

                            <label id="loginPassLbl" className='accLblError'></label>              
                            
                        </Col>

                    </Row>

                    <Row className='m-0 p-0'>

                        <Col className='p-4 pt-2 pb-2 d-flex justify-content-center align-items-center'>
                            <button type='submit' onClick={handleSubmit} className='continue__btn unclock__btn continue__btn__active'>Unlock <img src="./images/left-arrow.png" alt="" /></button>
                        </Col>

                    </Row>

                    </form>

                </Container>

            </div>

        </>
    );
};

export default Login;
