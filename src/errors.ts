const hasNotFoundStatus = (response: Response) => {
  return response.status === HttpStatusCode.NOT_FOUND_404;
};

const hasForbiddenStatus = (response: Response) => {
  return response.status === HttpStatusCode.FORBIDDEN_403;
};

const hasServiceUnavailableStatus = (response: Response) => {
  return response.status === 503;
};


// Что было плохо и почему?
// Повторяющийся код усложняет поддержку и может привести к ошибкам при изменении
// Прямое использование чисел для кодов статусов может затруднить понимание кода

// enum HttpStatusCode {
//   NOT_FOUND_404 = 404,
//   FORBIDDEN_403 = 403,
//   SERVICE_UNAVAILABLE_503 = 503
// }
//
// interface Response {
//   status: number;
// }
//
// const hasNotFoundStatus = (response: Response): boolean => {
//   return response.status === HttpStatusCode.NOT_FOUND_404;
// };
//
// const hasForbiddenStatus = (response: Response): boolean => {
//   return response.status === HttpStatusCode.FORBIDDEN_403;
// };
//
// const hasServiceUnavailableStatus = (response: Response): boolean => {
//   return response.status === HttpStatusCode.SERVICE_UNAVAILABLE_503;
// };

// Что стало лучше и почему?
// Использование констант делает код более понятным и удобным для поддержки
// Типизация
