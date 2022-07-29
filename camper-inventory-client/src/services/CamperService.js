import axios from 'axios';

const CAMPER_BASE_API_URL = 'http://localhost:8083/api/v1/campers';

export function getAllCampers(){
    return axios.get(CAMPER_BASE_API_URL);
}

export function createCamper(campers){
    return axios.post(CAMPER_BASE_API_URL,campers);
}

export function getById(id){
    return axios.get(`${CAMPER_BASE_API_URL}/${id}`);
}

export function updateCamper(id, camper){
    return axios.put(`${CAMPER_BASE_API_URL}/${id}`, camper);
}

export function deleteCamper(id){
    return axios.delete(`${CAMPER_BASE_API_URL}/${id}`);
}
