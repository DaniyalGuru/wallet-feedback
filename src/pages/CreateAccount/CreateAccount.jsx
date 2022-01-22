import React, { useRef, useEffect, useState } from 'react';
import './CreateAccount.css'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { handleFname, handleAccId } from '../../redux/actions';
import { useHistory } from 'react-router-dom';

const CreateAccount = () => {

    const history = useHistory()

    const dispatch = useDispatch()

    const inputBoxFocus = useRef(null)

    useEffect(() => {
        inputBoxFocus.current.focus()
    }, [])

    const [data, setData] = useState({
        fname: '',
        accId: ''
    })

    const handleData = (e) => {
        if(e.target.value !== ''){
            setData({...data, [e.target.name]: e.target.value})
            let continue__btn = document.querySelector('.continue__btn2')
            continue__btn.classList.remove('continue__btn__active')  
        }
        else{
            let continue__btn = document.querySelector('.continue__btn2')
            continue__btn.classList.add('continue__btn__active')  
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(data.fname !== '' && data.accId !== ''){
            dispatch(handleFname(data.fname))
            dispatch(handleAccId(data.accId))
    
            history.push('/createPassword')
        }
        else{
            let accLblError = document.getElementById('accLblId')
            accLblError.innerHTML = 'All fields must be filled!'
        }
    }

  return (

        <>
        
            <div className="main__container main__container4">

                <Container fluid={true} className='p-0'>

                    <Row className='m-0 p-0'>

                        <Col className='m-0 p-0'>
                            <div className="top__heading">

                                <h1>Create NEAR account</h1>

                                <div className="close__btn">
                                    <img src="./images/close.png" alt="" />
                                </div>

                            </div>         

                        </Col>

                    </Row>

                    <Row className='m-0 p-0'>

                        <Col className='p-0 d-flex justify-content-start align-items-center'>
                            <div className='taskHr'></div>
                        </Col>

                    </Row>

                    <Row className='m-0 p-0 pt-1'>

                        <Col className='p-4 pb-3 d-flex justify-content-center align-items-center flex-column'>
                            <p className='accountPara1'>Enter an Account ID to use with your NEAR account. Your Account ID will be used for all NEAR operations, including sending and receiving assets.</p>
                        </Col>

                    </Row>

                    <form onSubmit={handleSubmit}>

                    <Row className='m-0 p-0'>

                        <Col className='p-4 pt-0 pb-0 d-flex justify-content-center align-items-start flex-column'>
                            <label htmlFor="nameid" className='nameLbl'>
                                Full Name
                            </label>

                            <input type="text" id='nameid' name='fname' onChange={handleData} placeholder='Ex. John doe' className='fnameInp' required ref={inputBoxFocus}/>
                            
                            <label htmlFor="accid" className='accLbl'>
                                Account ID
                            </label>
                            
                            <div className='accContainer'>

                                <input type="text" id='accId' name='accId' onChange={handleData} placeholder='yourname' className='accInp' required />

                                <span>.near</span>

                            </div>  

                            <label id='accLblId' className='accLblError'></label>              
                        
                        </Col>

                    </Row>

                    <Row className='m-0 p-0'>

                        <Col className='p-4 pt-2 d-flex justify-content-center align-items-center'>
                            <button type='submit' onClick={handleSubmit} className='continue__btn continue__btn2 continue__btn__active'>Continue <img src="./images/left-arrow.png" alt="" /></button>
                        </Col>

                    </Row>

                    </form>

                    <Row className='m-0 p-0'>

                        <Col className='p-4 pt-0 pb-0  d-flex justify-content-center align-items-center'>
                            <p className='accountPara2'>By creating a NEAR account, you agree to the NEAR Wallet <span>Terms & Conditions</span> and <span>Privacy Policy</span>.</p>
                        </Col>

                    </Row>

                    <Row className='m-0 p-0'>

                        <Col className='p-0 pt-4 pb-3 d-flex justify-content-center align-items-center'>
                            <div className='customHr'></div>
                        </Col>

                    </Row>

                    <Row className='m-0 p-0'>

                        <Col className='p-4 pt-0 pb-0 d-flex justify-content-center align-items-center flex-column'>
                            <p className='emailPara2'>Already have NEAR account?</p>

                            <div className='continue__btn login__btn'>Log in with NEAR <img src="./images/left-arrow.png" alt="" /></div>
                        </Col>

                    </Row>

                </Container>

            </div>

        </>
    
    );
};

export default CreateAccount;
