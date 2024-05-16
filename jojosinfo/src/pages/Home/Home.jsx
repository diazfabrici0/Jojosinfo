import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import { Button, Subtitle, Title} from '../../components';

export const Home = () =>{
    const [characters, setCharacters] = useState([]);

    const navigate = useNavigate();

    const fetchCharacters = async () =>{
        const response = await fetch("/mocks/personajes.json");
        const data = await response.json();
        setCharacters(data);
    }

    useEffect(()=>{
        fetchCharacters();
    },[]);

    const onClickGaleryHandler = () =>{
        navigate(ROUTES.galery);
    };

    if (characters.length === 0) return <div>Loading...</div>

    return (
        <div>
            <Title text="Nombre personaje" />
            <Subtitle 
            text="Conoce a todos los Jojos con sus historias y enemigos. 
            En este sitio encontrarás informacion sobre cada uno de los jojos y 
            sus respectivas partes." 
            />
            <Subtitle text="Conoce la historia de los personajes y descubre contra que mal pelean" />
            <Button text="Ingresar" onClick={onClickGaleryHandler} />
        </div>
    )
}