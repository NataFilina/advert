import { createSelector } from '@reduxjs/toolkit';

export const selectorItems = state => state.contacts.contacts.items;
export const selectorFilter = state => state.filter.filter;
export const selectorGlobalLoading = state => state.root.isLoading;
export const selectorGlobalError = state => state.root.error;
