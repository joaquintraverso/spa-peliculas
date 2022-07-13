const apiKey = '105fa4a709e778cc1dcc641d941962bc';
const apiTendencias = 'https://api.themoviedb.org/3/trending/movie/week';

const getTendencias = async () => {
    const apiURL = `${apiTendencias}?api_key=${apiKey}`;

    try{
        const response = await fetch (apiURL);
        const data = await response.json();
        return data   
    }catch(error){
        console.log('Fetch Error: ', error);
        
    };
};

export default getTendencias;