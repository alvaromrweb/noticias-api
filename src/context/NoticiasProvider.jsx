import { useState, useEffect, createContext } from "react";
import axios from 'axios'

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])
    const [pagina, setPagina] = useState(1)
    const [totalNoticias, setTotalNoticias] = useState(0)

    const getNoticiasApi = async () => {
        var url = `${import.meta.env.VITE_API_URL}/top-headlines?category=${categoria}&country=mx&page=${pagina}&pageSize=20&apiKey=${import.meta.env.VITE_API_KEY}`;
        const {data} = await axios(url)
        console.log(data)
        setNoticias(data.articles)
        setTotalNoticias(data.totalResults)
    }

    useEffect(() => {
        setPagina(1)
        getNoticiasApi()
    }, [categoria])

    useEffect(() => {
        getNoticiasApi()
    }, [pagina])
    
    const handlePagChange = (e, value) => {
        setPagina(value);
    }
    

    return (
        <NoticiasContext.Provider value={{
            categoria,
            setCategoria,
            noticias,
            totalNoticias,
            pagina,
            handlePagChange
        }}>
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext