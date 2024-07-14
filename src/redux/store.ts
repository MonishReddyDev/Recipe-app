import {configureStore} from '@reduxjs/toolkit';
import RecipeApi from '../services/recipeApi';

const store = configureStore({
  reducer: {
    [RecipeApi.reducerPath]: RecipeApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(RecipeApi.middleware),
});

export default store;
