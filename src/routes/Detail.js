import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import styles from "./Detail.module.css"

function Detail() {
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState([])
    const { id } = useParams()
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        console.log(json)
        setMovie(json.data.movie)
        setLoading(false)
    };
    useEffect(() => {
        getMovie()
    }, [])
    return (
        <div className={styles.container}>
            {loading ?
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div> :
                <div className={styles.movie}>
                    <img src={movie.large_cover_image} alt={movie.title} className={styles.movie__img} />
                    <div>
                        <h2 className={styles.movie__title}>
                            {movie.title}
                        </h2>
                        <h3 className={styles.movie__year}>
                            {movie.year}
                        </h3>
                        <p>
                            {movie.description_full}
                        </p>
                        {movie.genres !== null ? <ul className={styles.movie__genres}>
                            {movie.genres.map(g => <li key={g}>{g}</li>)}
                        </ul> : null}
                    </div>
                </div>
            }
        </div>
    )
}

export default Detail;