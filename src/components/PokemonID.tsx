import { useParams } from "react-router-dom";
import { getPokemon } from "../Hooks/usePokemonApi";

export default function PokemonID() {
    const {id} = useParams();
    const pokemon = getPokemon(id);
    console.log(pokemon)
    return <>
        <img src = {pokemon?.sprites.front_default}></img>
        <img src = {pokemon?.sprites.back_default}></img>
        <p>Weight: {pokemon?.weight} lb</p>
        <p>Height: {pokemon?.height}</p>
        
    </>
}