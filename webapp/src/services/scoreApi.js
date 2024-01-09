import axios from "axios"

const API_URL = "http://localhost:3001"

const getAllScores = async () => {
    const response = await axios.get(`${API_URL}/scores`)

    if (response.status !== 200 && response.status !== 304)
        return [];
    
    return response.data;
}

const createOneScore = async (score) => {
    const response = await axios.post(`${API_URL}/scores`, score)

    if (response.status !== 200 && response.status !== 304)
        console.log('Failed to add score : ' + response.status);
}

export {
    getAllScores,
    createOneScore
}