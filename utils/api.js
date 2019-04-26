export const getMyPlants = () => {
  return myPlants;
}

export const getAllPlants = () => {
  return allPlants;
}

const myPlants = {
   vegetables: [
     
  ],
  fruits: [
    {
      id: 5,
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
    
  ],
  berries: [
    {
      id: 8,
      name: 'strawberry',
      namePlural: 'Strawberries',
      isEdible: true,
      image: 'berries/strawberry.jpg',
      type: 'berries',
    },
  ],
};

const allPlants = {
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
      id: 3,
      name: 'avocado',
      namePlural: 'Avocados',
      isEdible: true,
      image: 'vegetables/avocado.jpg',
      type: 'vegetables',
    },
    {
      id: 4,
      name: 'chili',
      namePlural: 'Chilis',
      isEdible: true,
      image: 'vegetables/chili.jpg',
      type: 'vegetables',
    }
  ],
  fruits: [
    {
      id: 5,
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
      id: 7,
      name: 'rose',
      namePlural: 'roses',
      isEdible: false,
      image: 'flowers/rose.jpg',
      type: 'flowers',
    },
  ],
  berries: [
    {
      id: 8,
      name: 'strawberry',
      namePlural: 'Strawberries',
      isEdible: true,
      image: 'berries/strawberry.jpg',
      type: 'berries',
    },
  ],
};
