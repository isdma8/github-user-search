import React from 'react';
import './styles.scss';


type Props = {
    text: string;
}


const ButtonIcon = ({text}: Props) => { 
      return( 

        <button className="button-content">
            <h5>{text}</h5>
        </button>
        
);



};

export default ButtonIcon;