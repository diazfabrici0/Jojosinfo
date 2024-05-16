import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaCircleArrowLeft } from "react-icons/fa6";

import { useJojos } from "../../hook/useJojos";

import { Loading, Title, Tooltip} from "../../components";

import style from "./Details.module.css";

export const Details = () =>{
    const [jojo, setJojo] = useState([]);
    const { jojos, isLoading } = useJojos();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() =>{
        const foundJojo = jojos.find((jojo) => jojo.id === id) || [];
        setJojo(foundJojo);
    }, [jojos, id]);

    const onClickGoBackHandler = () =>{
        navigate(-1);
    };
    
    if (isLoading || jojo.length === 0)
        return (
            <div>
                <Loading text="Cargando..." />
            </div>
    );

    return (
        <div className={style.details_container}>
          <div className="absolute">
            <Tooltip message="volver a galeria">
              <FaCircleArrowLeft
                className="text-5xl ml-5 cursor-pointer  hover:text-red-700"
                onClick={onClickGoBackHandler}
              />
            </Tooltip>
          </div>
          <div className="text-center">
            <Title text={jojo.name} />
          </div>
          {/* espacio para primeros datos */}
          <div className="flex flex-col justify-center p-10">
            <div className="flex flex-row gap-10">
              <div className="w-60">
                <img src={jojo.image} alt={jojo.name} className="w-full h-auto" />
              </div>
            </div>
          </div>
          {/* espacio para miembros */}

          {/* espacio para discografia*/}
        </div>
      );
};