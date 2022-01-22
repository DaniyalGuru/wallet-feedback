import React, { useRef, useEffect, useState } from 'react';
import './CreatePassword.css'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { handlePassword } from '../../redux/actions';
import { useHistory } from 'react-router-dom';

const CreatePassword = () => {
    const history = useHistory()

    const dispatch = useDispatch()

    const inputBoxFocus = useRef(null)

    useEffect(() => {
        inputBoxFocus.current.focus()
    },[])

    const [Pass, setPass] = useState('')
    const [CPass, setCPass] = useState('')

    const handlePass = (e) => {
        if(e.target.value !== ''){
            setPass(e.target.value)
            let continue__btn = document.querySelector('.continue__btn3')
            continue__btn.classList.remove('continue__btn__active')  
        }
        else{
            let continue__btn = document.querySelector('.continue__btn3')
            continue__btn.classList.add('continue__btn__active')
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if(Pass !== '' && CPass !== ''){
            if(Pass === CPass){
               dispatch(handlePassword({Pass}))
               history.push('/createSeedPhrase')
            }
            else{
                let passLbl = document.getElementById('passLbl')
                passLbl.innerHTML = 'Password not matching!'
            }
        }
        else{
            let passLbl = document.getElementById('passLbl')
            passLbl.innerHTML = 'All fields must be filled!'
        }
    }

  return (
    <>

        <div className="main__container main__container5">

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

                <form onSubmit={handleSubmit}></form>

                <Row className='m-0 p-0'>

                    <Col className='p-4 pt-0 pb-0 d-flex justify-content-center align-items-start flex-column'>
                        <label htmlFor="passid" className='nameLbl'>
                            Password
                        </label>

                        <input type="password" id='passid' onChange={handlePass} className='fnameInp' required ref={inputBoxFocus}/>
                            
                        <label htmlFor="cpassid" className='accLbl'>
                            Confirm Password
                        </label>
    
                        <input type="password" id='cpassId' className='fnameInp' onChange={(e) => setCPass(e.target.value)} required />

                        <label id='passLbl' className='accLblError'></label>              
                        
                    </Col>

                </Row>

                <Row className='m-0 p-0'>

                    <Col className='p-4 pt-2 pb-2 d-flex justify-content-center align-items-center'>
                        <button type="submit" onClick={handleSubmit} className='continue__btn continue__btn3 continue__btn__active'>Continue <img src="./images/left-arrow.png" alt="" /></button>
                    </Col>

                </Row>

                <Row className='m-0 p-0'>

                    <Col className='p-4 pt-0 pb-0  d-flex justify-content-center align-items-center flex-column'>
                        <p className='createP1'>claudio@metapool.app</p>
                        <p className='accountPara2'>By creating a NEAR account, you agree to the NEAR Wallet <span>Terms & Conditions</span> and <span>Privacy Policy</span>.</p>
                    </Col>

                </Row>

            </Container>

        </div>

    </>
  );
};

export default CreatePassword;
