import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserApi = createAsyncThunk(
  "auth/getUserApi",
  async (vl, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("https://quzis.onrender.com/api/v1/me", {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      rejectWithValue(error.response.data.message);
    }
  }
);
export const logInApi = createAsyncThunk(
  "auth/logInApi",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "https://quzis.onrender.com/api/v1/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data.message);
    }
  }
);
export const registerApi = createAsyncThunk(
  "auth/registerApi",
  async (formdata, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "https://quzis.onrender.com/api/v1/register",
        formdata,
        {
          withCredentials: true,
        }
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data.message);
    }
  }
);
export const logOutApi = createAsyncThunk(
  "auth/logOutApi",
  async (formdata, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://quzis.onrender.com/api/v1/logout",
        {
          withCredentials: true,
        }
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data.message);
    }
  }
);
