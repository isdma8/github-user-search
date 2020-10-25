import { GitHubProfile } from 'core/types/GitHubProfile';
import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import ImageLoader from './components/Loaders/ImageLoader/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader/InfoLoader';
import SearchResponse from './components/SearchResponse';

import './styles.scss';

const Search = () => {

    const [profile, setProfile] = useState<GitHubProfile>();
    

    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(()=> {

        //console.log(profile?.id);
        
    }, [profile, isLoading]);


return (    
    <div>
        <div className="container-search">
            <div className="search-form">
                <div className="search-data">
                    <h4>
                        Encontre um perfil Github
                    </h4>
                    <Form 
                        profileGitHub= {(profile) => setProfile(profile)}
                        loading = {isLoading => setIsLoading(isLoading) }
                    />
                </div>
            </div>
        </div>
        {(profile || isLoading) && (
        <div className="container-result">
            <div className="container-result-align">

                {isLoading ? (
                                <>
                                    <div className="imageloader-container"><ImageLoader /></div>
                                    <div className="infoloader-container"><InfoLoader /></div>
                                </>
                            ) : (<SearchResponse gitProfileFound={profile}/>)
                    
                }
                
            </div>
        </div>)
    }
    </div>
);

};


export default Search; 