import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Base URL of the backend API
const BASE_URL = 'http://10.0.2.2:5000'; // Update with your actual backend URL

// Register API
export const registerUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      email,
      password,
    });
    return response.data; // Returns a success message
  } catch (error) {
    throw new Error(error.response.data.error || 'Registration failed');
  }
};

// Login API
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {email, password});
    return response.data.token; // Returns JWT token for authentication
  } catch (error) {
    throw new Error(error.response.data || 'Login failed');
  }
};

// Get Profile API (protected route)
export const getProfile = async token => {
  try {
    const response = await axios.get(`${BASE_URL}/profile`, {
      headers: {
        'x-auth-token': token,
      },
    });
    return response.data.user; // Returns user data
  } catch (error) {
    throw new Error(error.response.data || 'Failed to fetch profile');
  }
};
