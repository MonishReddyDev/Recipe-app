import {Category} from './categoryTypes';
import {FilteredMealRecipe} from './filterRecipeTypes';
import {RecipeWithArea} from './filterRecipeWithArea';
import {Recipe} from './randomRecipetypes';
import {mealRecipe} from './recipeDetailsIDTypes';

// types/randomRecipetypes.ts
export type RandomRecipeResponse = {
  meals: Recipe[];
};

// types/recipeDetailsIDTypes.ts
export type RecipeDetailsIDResponse = {
  meals: mealRecipe[];
};

// types/categoryTypes.ts
export type CategoriesResponse = {
  categories: Category[];
};

// types/filterRecipeTypes.ts
export type FilterRecipeResponse = {
  meals: FilteredMealRecipe[];
};

export interface FilterRecipeResponseWithArea {
  meals: RecipeWithArea[];
}

// types/index.ts
export * from './randomRecipetypes';
export * from './recipeDetailsIDTypes';
export * from './categoryTypes';
export * from './filterRecipeTypes';
export * from './filterRecipeWithArea';
