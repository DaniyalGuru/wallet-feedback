import React from 'react';
import './NumberBox.css'

const NumberBox = ({num, content}) => {
  return (
        <>

            <div className="phraseBox1">
                <div className="numberDiv">{num}</div>
                <span>{content}</span>
            </div>

        </>
    );
};

export default NumberBox;
