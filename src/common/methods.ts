export const getIngredientsAndMeasures = (meal: any) => {
  const ingredientsAndMeasures = [];
  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;

    if (meal[ingredientKey] && meal[measureKey]) {
      ingredientsAndMeasures.push({
        ingredient: meal[ingredientKey],
        measure: meal[measureKey],
      });
    }
  }
  return ingredientsAndMeasures;
};

export const generateRandomRating = () => {
  const rating = (Math.random() * 4 + 1).toFixed(1); // Random rating between 1 and 5
  const count = Math.floor(Math.random() * 1000) + 1; // Random count between 1 and 1000
  return {
    rate: parseFloat(rating),
    count: count,
  };
};

const array = [
  {strArea: 'American'},
  {strArea: 'British'},
  {strArea: 'Canadian'},
  {strArea: 'Chinese'},
  {strArea: 'Croatian'},
  {strArea: 'Dutch'},
  {strArea: 'Egyptian'},
  {strArea: 'Filipino'},
  {strArea: 'French'},
  {strArea: 'Greek'},
  {strArea: 'Indian'},
  {strArea: 'Irish'},
  {strArea: 'Italian'},
  {strArea: 'Jamaican'},
  {strArea: 'Japanese'},
  {strArea: 'Kenyan'},
  {strArea: 'Malaysian'},
  {strArea: 'Mexican'},
  {strArea: 'Moroccan'},
  {strArea: 'Polish'},
  {strArea: 'Portuguese'},
  {strArea: 'Russian'},
  {strArea: 'Spanish'},
  {strArea: 'Thai'},
  {strArea: 'Tunisian'},
  {strArea: 'Turkish'},
  {strArea: 'Ukrainian'},
  {strArea: 'Unknown'},
  {strArea: 'Vietnamese'},
];

const arr: string[] = [];

array.forEach(item => arr.push(item.strArea));

const getRandomArea = arr => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

export const getRandomAreatoday = getRandomArea(arr);
