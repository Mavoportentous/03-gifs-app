import { useState } from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import CustomHeader from './shared/components/CustomHeader'
import SearchBar from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import GifList from './gifs/components/GifList'


const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);

    const handleSearch = (query: string) => {
        if (query != '') {
            query.toLocaleLowerCase();
            if (previousTerms.includes(query) === false) {
                previousTerms.unshift(query);
            }
        }
        console.log({ query, previousTerms });
    }
    const handleClick = (term: string) => {
        handleSearch;
        console.log(term);
    }
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
            <GifList gifs={mockGifs} />
        </>
    )
}

export default GifsApp
GifsApp