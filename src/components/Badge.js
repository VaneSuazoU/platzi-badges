import React from 'react';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        const firstName = 'Vanessa';
        const lastName = 'Suazo';

        return (<div className="Badge">
            <div className="Badge__header">
            <img src= {confLogo} alt="Logo de la conferencia"/>
            </div>
            <div className="Badge__section-name">
            <img className= "Badge__avatar" src="https://s.gravatar.com/avatar/e58760a306717f81bb74b242682a2d2d?s=80" alt="Avatar"/>    
            {firstName} <br/>{lastName}
            </div>
            <div className="Badge__section-info">
            <h3>Frontend Engineer</h3>
            <div>@vanesuazo93</div>  
            </div>
            <div className="Badge__footer">
                #platziconf
            </div>
        </div>)
    }
}

export default Badge;