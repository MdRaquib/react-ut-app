import axios from 'axios';

const KEY = 'AIzaSyCxzDNzmP_Kt3PV2UU9xy6_bfBXnx28lH0';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        type:'video',
        key:KEY,
    }
});