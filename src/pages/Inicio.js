import getTendencias from "../utils/getTendencias";
import getPopulares from "../utils/getPopulares";

const Inicio = async() => {
    const infoTendencias = await getTendencias();
    const infoPopulares = await getPopulares();
    const view = `
        <div class="movies">
            <article class="trending-movies">
                <section class="section-title">
                    <h2 id="tendencias">Tendencias</h2><br>
                </section>
                <section class="section-movie">
                    ${infoTendencias.results.map(movie => `
                        <div class="movie-item">
                            <a href="#/${movie.id}">
                                <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" class= "movie-img" alt=${movie.original_title}/>
                                <h3 class="movie-title">${movie.original_title}</h3>
                                <br>
                                <p class="movie-vote">Puntuación: ${movie.vote_average.toFixed(1)}</p>
                            </a>
                        </div>
                       `
                    ).join('')}
                </section>
            </article>

            <article class="popularity-movies">
                <section class="section-title">
                    <h2 id="populares">Más populares</h2>
                </section>
                <section class="section-movie">
                    ${infoPopulares.results.map(movie => `
                        <div class="movie-item">
                            <a href="#/${movie.id}">
                                <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" class="movie-img" alt=${movie.original_title}>
                                <h3 class="movie-title">${movie.original_title}</h3>
                                <br>
                                <p class="movie-vote">Puntuación: ${movie.vote_average}</p>
                            </a>    
                        </div>
                        `
                    ).join('')}
                </section>
            </article>
        </div>
   `;

   return view;
}

export default Inicio;