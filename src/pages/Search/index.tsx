import ButtonIcon from 'core/components/ButtonIcon';
import React from 'react';
import Form from './components/Form';

import './styles.scss';

const Search = () => (
    <div>
        <div className="container-search">
            <div className="search-form">
                <div className="search-data">
                    <h4>
                        Encontre um perfil Github
                    </h4>
                    <Form />
                </div>
            </div>
        </div>

        <div className="container-result">
            <div className="container-result-align">
                
                <div className="img-box">
                    <img src="https://media1.gamingreplay.com/162642-tm_thickbox_default/base-de-carregamento-para-dualsense-playstation-5-ps5.jpg" alt="hello" className="form-img-found"/>
                    <div className="container-button">
                        <ButtonIcon text="Ver perfil"/>
                    </div>
                </div>
                    
                <div>
                    <div className="small-info">
                        <div className="small-info-1">
                            <h6>Repositórios públicos: 62</h6>
                        </div>
                        <div className="small-info-2">
                            <h6>Seguidores: 127</h6>
                        </div>
                        <div className="small-info-3">
                            <h6>Seguindo: 416</h6>
                        </div>
                    </div>
                    <div className="big-info">
                        <div className="form-result-title">
                            <h4>Informações</h4>
                        </div>
                        
                        <div className="form-result-field">
                            <h5><b>Empresa: </b>@ZupIT</h5> 
                        </div>
                        <div className="form-result-field">
                            <h5><b>Website/Blog: </b>https://thewashington.dev</h5> 
                        </div>
                        <div className="form-result-field">
                            <h5><b>Localidade: </b>Uberlândia</h5> 
                        </div>
                        <div className="form-result-field">
                            <h5><b>Membro desde: </b>19/10/2013</h5> 
                        </div>
                    </div>
                    
                </div>
            </div>
            
            
        </div>

    </div>


);


export default Search; 