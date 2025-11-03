import { useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";


export const useGif = () => {

    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>([]);
    const handleClick = (term: string) => {

        console.log({ term });
    }

    const handleSearch = async (query: string = '') => {
        query = query.trim().toLocaleLowerCase();

        if (query.length === 0) return;

        setPreviousTerms((prev) => {
            if (prev.includes(query)) return prev;
            return [query, ...prev].slice(0, 8);
        });
        // petición
        const newGifs = await getGifsByQuery(query);

        // 👇 AQUÍ está lo importante
        // si tu API regresa { gifs: [...] }
        setGifs(newGifs);
        // si tu API regresara directamente un arreglo, sería: setGifs(resp);




    }

    return {/*objeto*/

        previousTerms,
        gifs,
        //Values
        handleSearch,
        handleClick,

    }
}