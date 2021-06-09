import React from 'react'

const Pokemon = ({pokemon}) => {

    return (

        <div className="pokemon">
            <div className="pokemon__name">
                <p>{pokemon.name}</p>
            </div>
            <div className="pokemon--meta">
                <span>HP: {pokemon.maxHP} </span>
                 <span>CP: {pokemon.maxCP}</span>
            </div>
            <div className="pokemon__image">
                <img src={pokemon.image} alt={pokemon.name}></img>
            </div>
            <div className="pokemon__attacks">
                {pokemon.attacks.special.slice(0,3).map(attack => (
                <span key={`${attack.name}-${attack.damage}`}>{attack.name}: {attack.damage}</span>
                ))}
            </div>
            
        </div>
    )
}

export default Pokemon
