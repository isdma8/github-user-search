import ButtonIcon from 'core/components/ButtonIcon';
import { GitHubProfile } from 'core/types/GitHubProfile';
import dayjs from 'dayjs';
import React from 'react';

type Params = {
    gitProfileFound?: GitHubProfile;
}


const SearchResponse = ({ gitProfileFound }: Params) => {

    const htt = `https://github.com/${gitProfileFound?.login}`;
    
    const created_at = dayjs(gitProfileFound?.created_at).format('DD/MM/YYYY');

    return (
                <>
                <div className="img-box">
                    <img src={gitProfileFound?.avatar_url} alt={gitProfileFound?.login} className="form-img-found"/>
                    <div className="container-button">
                        <a href={htt}>
                            <ButtonIcon text="Ver perfil"/>
                        </a>
                    </div>
                </div>
                    
                <div>
                    <div className="small-info">
                        <div className="small-info-1">
                            <h6>Repositórios públicos: {(gitProfileFound?.public_repos)}</h6>
                        </div>
                        <div className="small-info-2">
                            <h6>Seguidores: {(gitProfileFound?.followers)}</h6>
                        </div>
                        <div className="small-info-3">
                            <h6>Seguindo: {(gitProfileFound?.following)}</h6>
                        </div>
                    </div>
                    <div className="big-info">
                        <div className="form-result-title">
                            <h4>Informações</h4>
                        </div>
                        
                        <div className="form-result-field">
                            <h5><b>Empresa: </b>{(gitProfileFound?.login) || 'Não definido'}</h5> 
                        </div>
                        <div className="form-result-field">
                            <h5><b>Website/Blog: </b>{(gitProfileFound?.blog) || 'Não definido'}</h5> 
                        </div>
                        <div className="form-result-field">
                            <h5><b>Localidade: </b>{(gitProfileFound?.location) || 'Não definido'}</h5> 
                        </div>
                        <div className="form-result-field">
                            <h5><b>Membro desde: </b>{(created_at) || 'Não definido'}</h5> 
                        </div>
                    </div>
                    
                </div>
            </>
            
            
        
    );


}


export default SearchResponse; 