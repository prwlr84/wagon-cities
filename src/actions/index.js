import cities from '../cities.js';
export function setCities() {
 return {
 type: 'SET_CITIES',
 payload: cities
 }
}

export function setActiveCity(city) {
 return {
 type: 'SELECT_CITY',
 payload: city
 }
}
