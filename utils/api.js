export const getMyPlants = () => {
  return testPlants;
}

const testPlants = {
  vegetables: [
    {
      id: 1,
      name: 'cucumber',
      namePlural: 'Cucumbers',
      isEdible: true,
      image: 'vegetables/cucumber.jpg',
      type: 'vegetables',
    },
    {
      id: 2,
      name: 'tomato',
      namePlural: 'Tomatoes',
      isEdible: true,
      image: 'vegetables/tomato.jpg',
      type: 'vegetables',
    },
    {
      id: 7,
      name: 'avocado',
      namePlural: 'Avocados',
      isEdible: true,
      image: 'vegetables/avocado.jpg',
      type: 'vegetables',
    },
    {
      id: 8,
      name: 'chili',
      namePlural: 'Chilis',
      isEdible: true,
      image: 'vegetables/chili.jpg',
      type: 'vegetables',
    }
  ],
  fruits: [
    {
      id: 9,
      name: 'apple',
      namePlural: 'Apples',
      isEdible: true,
      image: 'fruits/apple.jpg',
      type: 'fruits',
    }
  ],
  herbs: [
    {
      id: 6,
      name: 'dill',
      namePlural: 'Dill',
      isEdible: true,
      image: 'herbs/dill.jpg',
      type: 'herbs',
    }
  ],
  flowers: [
    {
      id: 10,
      name: 'rose',
      namePlural: 'roses',
      isEdible: false,
      image: 'flowers/rose.jpg',
      type: 'flowers',
    },
  ],
  berries: [
    {
      id: 4, 
      name: 'strawberry',
      namePlural: 'Strawberries',
      isEdible: true,
      image: 'berries/strawberry.jpg',
      type: 'berries',
    },
  ],
};
