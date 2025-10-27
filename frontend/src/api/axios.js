import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const predictSymptoms = async (symptoms) => {
  try {
    const response = await API.post("/predict", { symptoms });
    return response.data;
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
};

export default API;
