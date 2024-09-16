const match = rawHeaderLine.match(headerPattern);

headers.set(match[1].toLowerCase(), match[2]);

// Что было плохо и почему?
// Не проверяя результат match, можно получить ошибку при доступе к match[1] или match[2], если match равен null
// Без проверки на наличие соответствий в rawHeaderLine, код может непредсказуемо вести себя при несоответствии формату

// const match = rawHeaderLine.match(headerPattern);

// if (match && match.length >= 3) {
//   headers.set(match[1].toLowerCase(), match[2]);
// } else {
//   console.error('Header line did not match the expected pattern:', rawHeaderLine);
// }

// Что стало лучше и почему?
// Проверка успешности match
// Обработка ошибок