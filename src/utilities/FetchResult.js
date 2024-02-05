import { getRandomInteger } from "./getRandomId";

export default function fetchResults(query, page) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (query !== "") {
        if (page % 2 === 0) {
          resolve(`Even-${query}`);
        } else {
          resolve(`Odd-${query}`);
        }
      } else {
        resolve();
      }
    }, getRandomInteger(1000, 5000));
  });
}
