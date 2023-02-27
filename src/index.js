module.exports = function reverse (n) {
  let numStr = Math.abs(n).toString();
  let result = "";
  for (i = numStr.length-1; i >= 0; i--){
    result += numStr.substring(i, i+1);
  }
  return +result;
}
