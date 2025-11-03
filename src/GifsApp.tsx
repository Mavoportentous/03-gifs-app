import GifList from './gifs/components/GifList'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import CustomHeader from './shared/components/CustomHeader'
import SearchBar from './shared/components/SearchBar'
import { useGif } from './gifs/hooks/useGifs'

const GifsApp = () => {
    const { handleSearch, previousTerms, handleClick, gifs } = useGif();

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