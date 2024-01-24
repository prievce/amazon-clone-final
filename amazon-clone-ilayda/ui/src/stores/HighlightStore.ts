import axios from 'axios';
import { defineStore } from 'pinia';

export const useHighlightStore = defineStore('highlightStore', () => {
    
  const highlightList = async () => {
    const response = await axios.get(`http://localhost:5000/api/highlight/list`);
    return response.data;
  };
  return {
    highlightList,
  };
});
