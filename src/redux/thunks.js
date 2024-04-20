import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createContact,
  deleteContactApi,
  getContacts,
} from 'service/contacts-service';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await getContacts();
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      return await createContact(data);
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contact, { rejectWithValue }) => {
    try {
      return await deleteContactApi(contact);
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);
