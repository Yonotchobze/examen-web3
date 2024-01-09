import axios from "axios"

const API_URL = "http://localhost:3001"

const getAllJokes = async () => {
    const response = await axios.get(`${API_URL}/jokes`)
    
    if (response.status !== 200 && response.status !== 304)
        return [];
    
    return response.data;
}

export {
    getAllJokes,
}