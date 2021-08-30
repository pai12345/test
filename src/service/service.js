import axios from "axios";

axios.defaults.headers = { "content-type": "application/json" };

/**
 * API - POST
 * @description
 * API for POST Service
 */
export const GET_Request = async () => {
  try {
    const reqX = axios.post(`http://localhost:8000`);
    const [resX] = await Promise.all([reqX]);
    return {status: "success", message: resX};
  } catch (error) {
    return {status:"error", message: error};
  }
};
