import Error404 from "../pages/Error404";

const apiKey = '105fa4a709e778cc1dcc641d941962bc';
const apiInfo = 'https://api.themoviedb.org/3/movie/';

const getInfo = async (id) => {
    const apiURL = id ? `${apiInfo}${id}?api_key=${apiKey}&language=es` : Error404;

    try{
        const response = await fetch (apiURL);
        const data = await response.json();
        return data   
    }catch(error){
        console.log('Fetch Error: ', error);
        
    };
};

export default getInfo;