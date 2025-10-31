import { useState } from 'react'
import GifList from './gifs/components/GifList'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import CustomHeader from './shared/components/CustomHeader'
import SearchBar from './shared/components/SearchBar'
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action'
import type { Gif } from './gifs/interfaces/gif.interface'


const GifsApp = () => {
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




    };

    return (
        <>{/*Header*/}
            <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el gif perfecto' />
            {/*Search*/}
            <SearchBar placeholder="Busca lo que quieras"
                onQuery={handleSearch}
            />
            {/*Busquedas previas*/}
            <PreviousSearches searches={previousTerms}
                onLabelClicked={handleClick} />
            {/*Gifs*/}
            <GifList gifs={gifs} />
        </>
    )
}

export default GifsApp
GifsApp