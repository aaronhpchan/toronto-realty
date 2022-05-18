import axios from 'axios';

export const baseUrl = 'https://realty-in-ca1.p.rapidapi.com';

export const fetchApi = async url => {
    const { data } = await axios.get(url, {
        headers: {
            'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.RAPID_API_KEY
        }
    });

    return data;
};