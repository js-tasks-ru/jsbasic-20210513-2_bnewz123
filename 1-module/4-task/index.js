function checkSpam(str) {
  // ваш код...
  let lowStr = str.toLowerCase();
  return lowStr.includes('1xbet') || lowStr.includes('xxx');
}
checkSpam();
