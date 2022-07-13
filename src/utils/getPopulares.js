const apiKey = '105fa4a709e778cc1dcc641d941962bc';
const apiPopulares = 'https://api.themoviedb.org/3/discover/movie';

const getPopulares = async () => {
    const apiURL = `${apiPopulares}?api_key=${apiKey}&sort_by=vote_count.desc`;

    try{
        const response = await fetch (apiURL);
        const data = await response.json();
        return data   
    }catch(error){
        console.log('Fetch Error: ', error);
        
    };
};

export default getPopulares;