import { useNavigate } from 'react-router-dom';
//import { ROUTES } from '../const/routes';
import { Button } from '../Button/Button';

export const Card = ({ character }) => {
    const { id, image, name, alias, stand, introduction } = character;
    const navigate = useNavigate();

    const onClickDetailsHandler = () =>{
        navigate(`$ROUTES.details.repalce(":id", id)`);
    };

    return (
        <div>
            <div>
                <img src={image} alt={name} />
            </div>

            <div className="">
                <p>{name}</p>
                <p>{alias}</p>
                <p>{stand}</p>
                <p>{introduction}</p>
                <div>
                    <Button onClick={onClickDetailsHandler} />
                </div>
            </div>
        </div>
    );
};