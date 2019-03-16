import { cities } from '../data/cities';


export const createSelect = () => {

  let select = document.getElementById("city-select");

  for ( let i = 0; i < cities.length; i++) {
    select.options[select.options.length] = new Option(cities[i], i);
  }

};

export const getSelectedText = (elementId) => {
  let elem = document.getElementById(elementId);

  if (elem.selectedIndex == -1) {
    return null;
  } else {
    return elem.options[elem.selectedIndex].text;
  }
};

export const setCityTitle = () => {
  console.log("he");
  let select = document.getElementById("city-title");
  select.innerHTML = `${getSelectedText("city-select")} '13`;
};