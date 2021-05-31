import {useState, useEffect} from 'react';
import youtube from './../apis/youtube';


const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm).catch((error) => {
            console.log(error);
        });
    }, [defaultSearchTerm]);

    const search = async (term) => {
        console.log('search function, term:', term);
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
        // console.log(response.data.items);
    };

    return [videos, search];
};

export default useVideos;
