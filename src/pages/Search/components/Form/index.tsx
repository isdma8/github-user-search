import ButtonIcon from 'core/components/ButtonIcon';
import { GitHubProfile } from 'core/types/GitHubProfile';
import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import './styles.scss';

type Params = {
    profileGitHub: (profiles: GitHubProfile) => void;
    loading: (signal: boolean) => void;
}


const Form = ({profileGitHub, loading}: Params) => {

    const [nameToSearch, setNameToSearch] = useState('Usuário GitHub');
    
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            loading(true);
            
            makeRequest({ url: `${nameToSearch}` })
                .then(response => profileGitHub(response.data))
                .finally(() => {
                    loading(false)
                })

            
        }

    

    const handleOnChangeNameToSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameToSearch(event.target.value);
    }

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
                                //                                                                                                                                                                                            to"
                            />
                    </div>
                    <ButtonIcon text='Encontrar'/>
            </form>
        </div>
 </div>
        
        

    

);

};


export default Form;