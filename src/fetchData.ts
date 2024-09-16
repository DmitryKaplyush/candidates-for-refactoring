const DEFAULT_TIMEOUT = 5000;

function fetchData(url: string) {
  // Используем значение по умолчанию для таймаута
  fetch(url, { timeout: DEFAULT_TIMEOUT })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

// Что было плохо и почему?
//
// timeout не является стандартной опцией для fetch: Стандартный API fetch не поддерживает таймауты
// Без проверки состояния ответа может быть пропущена ошибка HTTP
// Без реализации таймаута запрос может зависать без ограничения времени
// const DEFAULT_TIMEOUT = 5000;
//
// function fetchData(url: string, timeout: number = DEFAULT_TIMEOUT): Promise<void> {
//   const timeoutPromise = new Promise<Response>((_, reject) =>
//     setTimeout(() => reject(new Error('Request timed out')), timeout)
//   );
//   return Promise.race([
//     fetch(url),
//     timeoutPromise
//   ])
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));
// }

// Что стало лучше и почему?
// Использование Promise.race позволяет реализовать таймаут для запросов
// Проверка response.ok гарантирует, что ошибки HTTP обрабатываются корректно