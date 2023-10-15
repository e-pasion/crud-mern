import axios from './axios'

export const getTagsRequest= () => axios.get(`/tags`);
