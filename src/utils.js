export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomArray(min, max) {
  const num1 = random(min, max);
  const num2 = random(min, max);
  const num3 = random(min, max);
  return [num1, num2, num3];
}
