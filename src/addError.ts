type TMutableList<T> = T[];

enum WarningType {
  LEGACY_CODE_DEPENDENCY,
}

type TWarning = {
  type: WarningType;
};

const Warning = (type: WarningType): TWarning => {
  return {
    type,
  };
};

const addError = (errors: TMutableList<TWarning>) => {
  errors.push(Warning(WarningType.LEGACY_CODE_DEPENDENCY));
};


//Что было плохо и почему?
// Мутируемый список, который может привести к нежелательным побочным эффектам, особенно когда массив используется в нескольких местах,
// а также затрудняет отслеживание состояние приложения
// Функция addError напрямую модифицирует переданный массив, но лучше возвращать новый массив, чтобы сохранить функциональный стиль программирования
// код в будущем будет менее гибким, если потребуется добавить новую логику, тк генерация происходит в одном месте

// Что стало лучше и почему?
// Теперь функция addError чистая и возвращает новый массив. Так код становится более предсказуемым и снижает риск возникновения багов
// добавлен тип для возвращаемого значения, код стал более типизирован

//type TMutableList<T> = T[];
//
// enum WarningType {
//   LEGACY_CODE_DEPENDENCY,
// }
//
// type TWarning = {
//   type: WarningType;
// };
//
// const Warning = (type: WarningType): TWarning => {
//   return {
//     type,
//   };
// };
//
// const addError = (errors: TMutableList<TWarning>): TMutableList<TWarning> => {
//   return [...errors, Warning(WarningType.LEGACY_CODE_DEPENDENCY)];
// };