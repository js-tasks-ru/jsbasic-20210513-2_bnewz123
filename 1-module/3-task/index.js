function ucFirst(str) {
  // ваш код...
  if (!str) return str;
  return str[0].toUpperCase() + str.substr(1);
}
ucFirst();
