import React from "react";
import '../Containers/App.css';

const Card = ({name, email, website, id}) => {
    return (
        <a href={'https://' + website} target="_blank">
            <div className='tc dib br3 pa3 ma2 grow bw2 shadow-5' style={
                {
                    background: 'linear-gradient(rgba(70, 104, 217, 0.9) 0%, rgb(172, 87, 219) 100%)'
                }
            }>
                <img alt='Robots' src={'https://robohash.org/' + id + '?200×200'} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </a>
    )
}

export default Card;