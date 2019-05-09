import AsyncStorage from '@react-native-community/async-storage';

/* Various useful functions */

// @flow
export const uppercaseFirstLetter = (word) => {
  if (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return '';
};

export const searchStringInArray = (str, strArray) => { 
    let results = [];
    for (var j=0; j<strArray.length; j++) { 
         if (strArray[j].name && (strArray[j].name.toLowerCase()).match(str.toLowerCase())) results.push(strArray[j]);
    }

    return results;
}  

export const comparedPlants = (arr1, arr2) => { // myPlants, allPlants
    let plants = [];  
 
    arr2.map((plant) => { // allPlans 
          // Does this plant already exist in myPlants and have step/steps? 
          if(!arr1.some(p => (p.name.toLowerCase() === plant.name.toLowerCase()) ) && Object.keys(plant.steps).length > 0 && plant.steps[0].title != null && plant.steps[0].desc != null) {
            plants.push(plant);
          }
    }); 

    return plants;
}
  
export const fetchUsername = async () => {
  // username = '';
  // try { 
    let username = await AsyncStorage.getItem('@PGF_username') || 'N/A'; 
    return username.toString();
  // } catch (error) {
    // console.log('Error fetching High Scores', error); 
    // username = '';
  // }
  // return username;
}

// async const getUserName() {
//     try{
//         let value = await AsyncStorage.getItem('@PGF_username');
//         return value;
//     }
//     catch(e){
//         console.log('caught error', e);
//         // Handle exceptions
//     } 
// }