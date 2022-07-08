function jumpingOnClouds(c) {
  // Write your code here
  // count variable
  // looping through check step to follow
  // retutn
  let count = -1;
  for (let i = 0; i < c.length; i++, count++) {
    if (i < c.length - 2 && c[i + 2] === 0) i++;
  }

  return count;
}
