import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {
  CategoriesResponse,
  FilterRecipeResponse,
  RandomRecipeResponse,
  RecipeDetailsIDResponse,
} from '../types';

const RecipeApi = createApi({
  reducerPath: 'RecipeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.themealdb.com/api/json/v1/1/',
  }),
  endpoints: builder => ({
    getRandomRecipe: builder.query<RandomRecipeResponse, void>({
      query: () => `random.php`,
    }),
    getRecipeDetailsWithId: builder.query<RecipeDetailsIDResponse, number>({
      query: recipeId => `lookup.php?i=${recipeId}`,
    }),
    getCategories: builder.query<CategoriesResponse, void>({
      query: () => 'categories.php',
    }),
    getFilterRecipes: builder.query<FilterRecipeResponse, string>({
      query: category => `filter.php?c=${category}`,
    }),
  }),
});

export const {
  useGetRandomRecipeQuery,
  useGetRecipeDetailsWithIdQuery,
  useGetCategoriesQuery,
  useGetFilterRecipesQuery,
} = RecipeApi;
export default RecipeApi;
