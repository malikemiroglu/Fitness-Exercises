const REACT_APP_RAPID_API_KEY = import.meta.env.REACT_APP_RAPID_API_KEY;

export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': "848c7cfb79msh495b98dc6997eb8p1fe36bjsn1f38a2abdbfe"
    }
}

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};

