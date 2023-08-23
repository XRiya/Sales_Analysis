import axios from 'axios';

const BASE_URL = 'http://20.244.56.144';

export const registerCompany = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/train/register`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAuthToken = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/train/auth`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllTrains = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/train/trains`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTrainDetails = async (token, trainNumber) => {
  try {
    const response = await axios.get(`${BASE_URL}/train/trains/${trainNumber}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};