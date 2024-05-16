import { useEffect, useState } from "react";


export const useJojos = () => {
    const [jojos, setJojos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchJojos = async () =>{
        const response = await fetch("/mocks/personajes.json");
        const data = await response.json();
        setJojos(data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchJojos();
    }, []);

    return { jojos, isLoading};
}
