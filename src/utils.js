export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomArray(min, max, length) {
  return new Array(length).fill(random(min, max));
}
