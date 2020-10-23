import ButtonIcon from 'core/components/ButtonIcon';
import { GitHubProfile } from 'core/types/GitHubProfile';
import { makeRequest } from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageLoader from '../Loaders/ImageLoader';
import './styles.scss';


const Form = () => {

        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const profile = nameToSearch;

        console.log();
    }

    const [profile, setProfile] = useState<GitHubProfile>();

    const [nameToSearch, setNameToSearch] = useState('Usuário GitHub');

    const handleOnChangeNameToSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameToSearch(event.target.value);
    }

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: `${profile}` })
            .then(response => setProfile(response.data)) 
            .finally(() => {
                setIsLoading(false)
            })
    }, [profile]);


return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                    <div>
                            <input className="form-input"
                                value={nameToSearch}
                                name="githubname"
                                type="text" 
                                onChange={handleOnChangeNameToSearch}
                                //                                                                                                                                                                                                                          to"
                            />
                    </div>
                    <ButtonIcon text='Encontrar'/>
            </form>
        </div>
 </div>
        
        

    

);

};


export default Form;