import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function Detail() {
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState([])
    const { id } = useParams()
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        setMovie(json.data.movie)
        setLoading(false)
    };
    useEffect(() => {
        getMovie()
    }, [])
    return <div>{
        loading ? <h1>Loading...</h1> :
            <div key={movie.id}>
                <h2>{movie.title} ({movie.year})</h2>
                <img src={movie.large_cover_image} />
                <p>{movie.description_full}</p>
                {movie.genres !== null ? <ul>
                    {movie.genres.map(g => <li key={g}>{g}</li>)}
                </ul> : null}
            </div>
    }
    </div>
}

export default Detail;