import { useState } from "react";
import { filterJojosByName } from "../../helper";
import { Card, CardInfo, Loading, SearchInput, Title } from "../../components";

import style from "./Galery.module.css";
import { useJojos } from "../../hook/useJojos";

export const Galery = () =>{
    const { jojos, isLoading } = useJojos();
    const [searchJojo, setSearchJojo] = useState("");

    const onChangeSearch = (event) => {
        setSearchJojo(event.target.value);
    };

    const filteredJojo = filterJojosByName(jojos, searchJojo);

    if (isLoading)
        return(
            <div className="flex justify-center">
            <Loading text="Cargando..." />
          </div>  
        );
    
    return (
        <div className={style.galery_container}>
            <div className="text-center">
                <Title text="Galeria" />
            </div>
            <div className="flex justify-end">
                <SearchInput placeholder="Buscar Jojo" onChange={onChangeSearch} />
            </div>
            <div className={style.galery_container_card}>
                {searchJojo === "" ? (
                jojos.map((jojo) => <Card jojo={jojo} key={jojo.id} />)
                ) : filteredJojo.length === 0 ? (
                    <CardInfo text="No se encontró el personaje" />
                ) : (
                    filteredJojo.map((jojo) => <Card jojo={jojo} key={jojo.id} />)
                )}
            </div>
        </div>
    );
}