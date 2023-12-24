export type DraftRecipeType = {
  title: string;
  image: string;
  description: string;
  preptime: string | number;
  cooktime: string | number;
  servings: string | number;
  ingredients: string[];
};

export type RecipeType = {
  id: number;
} & DraftRecipeType;

export const favorites: RecipeType[] = [
  {
    id: 1,
    title: "Pasta",
    image: "https://picsum.photos/200/300",
    description: "Pasta with tomato sauce",
    preptime: "10",
    cooktime: "20",
    servings: "4",
    ingredients: ["pasta", "tomato sauce"],
  },
  {
    id: 2,
    title: "Pizza",
    image: "https://picsum.photos/200/300",
    description: "Pizza with tomato sauce",
    preptime: "10",
    cooktime: "20",
    servings: "4",
    ingredients: ["pasta", "tomato sauce"],
  },
  {
    id: 3,
    title: "Burger",
    image: "https://picsum.photos/200/300",
    description: "Burger with tomato sauce",
    preptime: "10",
    cooktime: "20",
    servings: "4",
    ingredients: ["pasta", "tomato sauce"],
  },
  {
    id: 4,
    title: "Salad",
    image: "https://picsum.photos/200/300",
    description: "Salad with tomato sauce",
    preptime: "10",
    cooktime: "20",
    servings: "4",
    ingredients: ["pasta", "tomato sauce"],
  },
];

export function addFavoriteRecipe(recipe: DraftRecipeType): RecipeType {
  const id = favorites.length + 1;
  const newFavorite = { ...recipe, id };
  favorites.push(newFavorite);
  return newFavorite;
}
export function removeFavoriteRecipe(id: number): RecipeType {
  const index = favorites.findIndex((recipe) => recipe.id == id);
  const recipe = favorites[index];
  favorites.splice(index, 1);
  return recipe;
}
export function getFavoriteRecipe(id: number): RecipeType | undefined {
  return favorites.find((recipe) => recipe.id == id);
}
export function getFavoritesByTitle(search: string): RecipeType[] {
  return favorites.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );
}
