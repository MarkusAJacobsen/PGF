export const getMyPlants = () => {
  return testPlants;
}

const testPlants = {
  vegetables: [
    {
      id: 1,
      name: 'Cucumber',
      namePlural: 'Cucumbers',
      isEdible: true,
    },
    {
      id: 2,
      name: 'Tomato',
      namePlural: 'Tomatoes',
      isEdible: true,
    },
    {
      id: 7,
      name: 'Avocado',
      namePlural: 'Avocados',
      isEdible: true,
    },
    {
      id: 8,
      name: 'Chili',
      namePlural: 'Chilis',
      isEdible: true,
    }
  ],
  fruits: [
    {
      id: 4, 
      name: 'Strawberry',
      namePlural: 'Strawberries',
      isEdible: true,
    },
  ],
  flowers: [
    {
      id: 5,
      name: 'Rose',
      namePlural: 'Roses',
      isEdible: false,
    }
  ],
  herbs: [
    {
      id: 6,
      name: 'Dill',
      namePlural: 'Dill',
      isEdible: true,
    }
  ],
};
