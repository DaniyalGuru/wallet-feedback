import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <>

        <div className="main__container main__container1" style={{backgroundImage: 'url(./images/bg.png)'}}>

            <div className="content__1">

                <div className="heading__1">

                    <img src="./images/home1.png" alt="" />

                    <h1>HomePage</h1>

                </div>

                <p>a web3 gateway to hidden experiences</p>

            </div>

            <div className="content__bottom">
                <p>powered by</p>

                <img src="./images/logo.png" alt="" />
            </div>

        </div>
    
    </>
  );
};

export default Home;
