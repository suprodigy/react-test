import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function Movie({ medium_cover_image, title, year, summary, genres, id }) {
    return (
        <div key={id}>
            <h2><Link to={`/movie/${id}`}>{title} ({year})</Link></h2>
            <img src={medium_cover_image} />
            <p>{summary}</p>
            {"genres" !== null ? <ul>
                {genres.map(g => <li key={g}>{g}</li>)}
            </ul> : null}
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;