import Movie from "../components/Movie.js"
import styles from "./Home.module.css"
import { useState, useEffect } from "react";


function Home() {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const getMovies = async () => {
        const json = await (
            await fetch(
                "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
            )
        ).json()
        setMovies(json.data.movies)
        setLoading(false)
    }
    useEffect(() => {
        getMovies()
    }, [])
    return (
        <div className={styles.container}>
            {loading ?
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div> :
                <div className={styles.movies}>
                    {movies.map((movie) =>
                        <Movie
                            medium_cover_image={movie.medium_cover_image}
                            title={movie.title}
                            year={movie.year}
                            summary={movie.summary}
                            genres={movie.genres}
                            id={movie.id}
                            key={movie.id}
                        />
                    )}
                </div>}
        </div>
    );
}

export default Home;