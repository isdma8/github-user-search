import ButtonIcon from 'core/components/ButtonIcon';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => (

    <div className="home-container">
        <div className="home-title">
            <h1>Desafio do Capítulo 3,<br/> Bootcamp DevSuperior</h1>
        </div>
        <div className="home-subtitle">
            <p>Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br/>
                Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br/>
                Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <a href="">antforfigma@gmail.com</a></p>
        </div>
        <Link to="/search">
            <ButtonIcon text="Começar"/>
        </Link>
       

    </div>

);


export default Home;
//<div className="btn btn-primary">
//Começar
//</div>
