import getHash from "../utils/getHash";
import getInfo from "../utils/getInfo";
import getPersonajes from "../utils/getPersonajes";
//<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="img">
const Info = async () => {
    const id = getHash();
    const movie = await getInfo(id);
    const cast = await getPersonajes(id);
    const view = `
        <div class="info-movie">
            <div class="info-img">
                <img class="poster-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="img">
            </div>
            <div class="info-atributes">
                <h3 class="info-title">${movie.original_title}</h3>
                <p>${movie.overview}</p><br>
                <h3 class="info-anio">Año: </h3>
                <p>${movie.release_date}</p><br>
                <h3 class="info-min">Duración: </h3>
                <p>${movie.runtime} min.</p><br>
                <h3 class="info-vote">Puntuación: </h3>
                <p>${movie.vote_average.toFixed(1)}</p><br>
                <h3 class="info-genero">Géneros: </h3>
                <p>${movie.genres.map(gen => `${gen.name}` ).join(', ')}</p><br>
                <h3 class="info-reparto">Reparto: </h3>
                <p id="cast">${cast.cast.slice(0, 10).map(act => `${act.name}`).join(', ')}</p>
            </div>
        </div>
    `;
    return view;
}

export default Info;