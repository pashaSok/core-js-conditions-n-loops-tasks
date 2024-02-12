/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b) {
    if (a >= c) {
      return a;
    }
    return c;
  }
  if (b >= c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if ((a === b && b !== c) || (a === c && c !== b) || (b === c && c !== a)) {
    if (a + b > c && a + c > b && b + c > a) {
      return true;
    }
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  if (num < 1 || num > 39) {
    return 'Number out of range for Roman numerals conversion.';
  }

  const romanNumerals = [
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
    'XI',
    'XII',
    'XIII',
    'XIV',
    'XV',
    'XVI',
    'XVII',
    'XVIII',
    'XIX',
    'XX',
    'XXI',
    'XXII',
    'XXIII',
    'XXIV',
    'XXV',
    'XXVI',
    'XXVII',
    'XXVIII',
    'XXIX',
    'XXX',
    'XXXI',
    'XXXII',
    'XXXIII',
    'XXXIV',
    'XXXV',
    'XXXVI',
    'XXXVII',
    'XXXVIII',
    'XXXIX',
  ];

  return romanNumerals[num - 1];
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const numWords = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    '.': 'point',
    ',': 'point',
    '-': 'minus',
    ' ': ' ',
  };

  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    const char = numberStr[i];

    switch (char) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
      case ',':
      case '-':
      case ' ':
        if (result.length === 0) {
          result += `${numWords[char]}`;
        } else {
          result += ` ${numWords[char]}`;
        }
        break;
      default:
        break;
    }
  }

  return result;
}
/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversed += str[i];
  }
  if (reversed === str) {
    return true;
  }
  return false;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  for (let i = 0; i < String(num).length; i += 1) {
    if (String(num)[i] === String(digit)) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    rightSum += arr[i];
  }
  for (let i = 0; i < arr.length; i += 1) {
    rightSum -= arr[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = new Array(size);
  for (let i = 0; i < size; i += 1) {
    matrix[i] = new Array(size);
  }

  let value = 1;
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;

  while (value <= size * size) {
    for (let i = left; i <= right; i += 1) {
      matrix[top][i] = value;
      value += 1;
    }
    top += 1;

    for (let i = top; i <= bottom; i += 1) {
      matrix[i][right] = value;
      value += 1;
    }
    right -= 1;

    for (let i = right; i >= left; i -= 1) {
      matrix[bottom][i] = value;
      value += 1;
    }
    bottom -= 1;

    for (let i = bottom; i >= top; i -= 1) {
      matrix[i][left] = value;
      value += 1;
    }
    left += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const n = matrix.length;
  const rotatedMatrix = matrix;

  for (let i = 0; i < Math.floor(n / 2); i += 1) {
    for (let j = i; j < n - 1 - i; j += 1) {
      const temp = rotatedMatrix[i][j];
      rotatedMatrix[i][j] = rotatedMatrix[n - 1 - j][i];
      rotatedMatrix[n - 1 - j][i] = rotatedMatrix[n - 1 - i][n - 1 - j];
      rotatedMatrix[n - 1 - i][n - 1 - j] = rotatedMatrix[j][n - 1 - i];
      rotatedMatrix[j][n - 1 - i] = temp;
    }
  }
  return rotatedMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
// function swap(arr, leftIndex, rightIndex) {
//   const newArr = arr;
//   const temp = newArr[leftIndex];
//   newArr[leftIndex] = newArr[rightIndex];
//   newArr[rightIndex] = temp;
// }

// function partition(arr, left, right) {
//   const pivot = arr[Math.floor((right + left) / 2)];
//   let i = left;
//   let j = right;

//   while (i <= j) {
//     while (arr[i] < pivot) {
//       i += 1;
//     }
//     while (arr[j] > pivot) {
//       j -= 1;
//     }
//     if (i <= j) {
//       swap(arr, i, j);
//       i += 1;
//       j -= 1;
//     }
//   }

//   return i;
// }

// function quickSort(arr) {
//   const innerSort = (array, left = 0, right = array.length - 1) => {
//     if (array.length > 1) {
//       const index = partition(array, left, right);

//       if (left < index - 1) {
//         innerSort(array, left, index - 1);
//       }

//       if (index < right) {
//         innerSort(array, index, right);
//       }
//     }

//     return array;
//   };

//   return innerSort([...arr]);
// }
const partition = (arr, left, right) => {
  const newArr = arr;
  const pivot = newArr[right];
  let i = left - 1;

  for (let j = left; j < right; j += 1) {
    if (newArr[j] < pivot) {
      i += 1;
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
  }

  [newArr[i + 1], newArr[right]] = [newArr[right], newArr[i + 1]];
  return i + 1;
};
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
  return arr;
};

function sortByAsc(arr) {
  return quickSort(arr);
}
/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
// function shuffleChar(str, iterations) {
//   let result = str;

//   for (let iter = 0; iter < iterations; iter += 1) {
//     let evenChars = '';
//     let oddChars = '';

//     for (let i = 0; i < result.length; i += 1) {
//       if (i % 2 === 0) {
//         evenChars += result[i];
//       } else {
//         oddChars += result[i];
//       }
//     }

//     result = evenChars + oddChars;
//   }

//   return result;
// }
function shuffleChar(str, iterations) {
  let shuffledStr = str;

  for (let iter = 0; iter < iterations; iter += 1) {
    let oddChars = '';
    let evenChars = '';

    for (let i = 0; i < shuffledStr.length; i += 1) {
      if (i % 2 !== 0) {
        oddChars += shuffledStr[i];
      } else {
        evenChars += shuffledStr[i];
      }
    }

    shuffledStr = evenChars + oddChars;
  }

  return shuffledStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let temp = number;
  const digits = [];

  while (temp > 0) {
    digits.unshift(temp % 10);
    temp = Math.floor(temp / 10);
  }

  let i = digits.length - 2;

  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i -= 1;
  }

  if (i === -1) {
    return false;
  }

  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j -= 1;
  }

  [digits[i], digits[j]] = [digits[j], digits[i]];

  let result = 0;
  for (let k = 0; k <= i; k += 1) {
    result = result * 10 + digits[k];
  }

  for (let k = digits.length - 1; k > i; k -= 1) {
    result = result * 10 + digits[k];
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
