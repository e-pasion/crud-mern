import axios from './axios'

export const getTagsRequest= async () => await axios.get(`/tags`);
