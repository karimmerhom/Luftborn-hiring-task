import axios from './axios-default';

export function getStats(limit) {
    return axios.get(`products?limit=${limit}`);
}
