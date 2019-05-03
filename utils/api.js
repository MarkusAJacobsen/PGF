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
     
  ],
  herbs: [
   
  ],
  flowers: [
    
  ],
  berries: [
    
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
      steps: [
        {
          title: "PREPERATION",
          desc: "Prepare planting beds by laying down 1 inch (2.5 cm) of compost and aged manure then use a garden fork or spade ..."
        },
        {
          title: "PLANTING",
          desc: "Sow seed or set transplants evenly spaced across the bed or in the container so that plant leaves will just touch a maturity."
        },
        {
          title: "WATER",
          desc: "Salad greens require soil that is evenly moist; avoid letting the soil dry out. (Lettuce and salad greens are 80 percent water.) Locate beds or containers close to a hose..."
        },
        {
          title: "SOWING", 
          desc: "Most lettuce and salad greens are easy to grow from seed and seed for salad greens is easy to find. Non-heading greens will be ready for harvest in 50 days or less."
        },
        {
          title: "COMBAT PESTS",
          desc: "Flea beetles, snails, and slugs are common salad garden pests. Flea beetles can leave small holes in leafs; snails and slugs will chew leaves usually from the leaf edges inward."
        },
        {
          title: "HARVEST",
          desc: "Harvest salad greens with scissors just above the soil line. Many greens are cut-and-come-again-meaning new leaves will sprout from the same just a few weeks after leaves are harvested."
        },
        {
          title: "GARDEN MAP", 
          desc: "Keep a garden map of the crops you’ve planted. Log of when you planted and when you expect to harvest. Note planting dates and days to germination, maturity, and harvest."
        },
        {
          title: "",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada, tortor vel posuere feugiat, augue felis tristique nisi, non sagittis augue ex pharetra sapien. Suspendisse tincidunt pellentesque justo vestibulum semper. Pellentesque sodales varius odio, congue finibus magna tristique in. Quisque purus magna, porttitor a aliquam vel, viverra vel nulla. Vivamus vitae nunc consequat, volutpat neque et, vestibulum orci. Maecenas sit amet dolor rhoncus quam varius molestie. Donec laoreet magna porta turpis cursus elementum. In a dui ut lacus blandit varius. Quisque pretium, sapien nec tincidunt luctus, nibh felis finibus erat, a interdum dui orci quis diam. Vivamus accumsan mi nec ligula vehicula, vitae molestie diam dapibus. Praesent ut libero non orci pellentesque ultricies."
        }, 
        ],
      type: 'vegetables',
    },
    {
      id: 2,
      name: 'tomato',
      namePlural: 'Tomatoes',
      isEdible: true,
      image: 'vegetables/tomato.jpg',
      steps: [{}],
      type: 'vegetables',
    },
    {
      id: 3,
      name: 'avocado',
      namePlural: 'Avocados',
      isEdible: true,
      image: 'vegetables/avocado.jpg',
      steps: [{}],
      type: 'vegetables',
    },
    {
      id: 4,
      name: 'chili',
      namePlural: 'Chilis',
      isEdible: true,
      image: 'vegetables/chili.jpg',
      steps: [{}],
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
      steps: [{}],
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
      steps: [{}],
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
      steps: [{}],
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
      steps: [{}],
      type: 'berries',
    },
  ],
};
