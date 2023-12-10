//Exercise 2: Valid Palindrome

const isPalindrome = function (s) {
  //Start Coding here
  let lowerStr = s.toLowerCase().split("");
  // set lowerStr ให้เป็นพิมพ์เล็กแล้ว splitให้เป็น array

  let filterCharArray = lowerStr.filter(
    (letter) =>
      (letter >= "a" && letter <= "z") || (letter >= "0" && letter <= "9")
  ); // กำหนดให้ filter เอาเฉพาะตัวอักษร กับตัวเลข เพื่อเช็คและ => แบบไม่นับ blank space
  if (filterCharArray.length === 0) {
    // สร้างเงื่อนไขเพื่อ => ค่า 0 จากการfilterที่จะ =>ค่าตามเงื่อนไขเป็น boolean
    return true;
  }
  let reversedWord = filterCharArray.slice().reverse().join(""); // เอามาทำการเช็ค reverse
  return filterCharArray.join("") === reversedWord;
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
