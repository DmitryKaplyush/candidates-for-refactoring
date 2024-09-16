enum ShapeType {
  Circle,
  Square,
}

function calculateArea(shape: ShapeType, radiusOrSide: number): number {
  let area = 0;

  switch (shape) {
    case ShapeType.Circle:
      area = Math.PI * Math.pow(radiusOrSide, 2);
      break;
    case ShapeType.Square:
      area = Math.pow(radiusOrSide, 2);
      break;
  }

  return area;
}

console.log(calculateArea(ShapeType.Circle, 5)); // Output: 78.54

//Что было плохо и почему?
// Использование одного параметра radiusOrSide для передачи радиуса для круга и стороны квадрата не совсем очевидно.
// Параметры для этих двух фигур различны по смыслу, и код становится менее понятным.
// Подход с switch-case увеличивает сложность поддержки при расширении.
// Входные значения не проверяются. Например, отрицательные значения радиуса или стороны могут вызвать неожиданные результаты.
// Логика расчёта площади разных фигур перемешана внутри одной функции, что нарушает принцип единственной ответственности.


// enum ShapeType {
//   Circle,
//   Square,
// }
//
// function calculateCircleArea(radius: number): number {
//   if (radius <= 0) {
//     throw new Error("Invalid radius: must be greater than 0");
//   }
//   return Math.PI * Math.pow(radius, 2);
// }
//
// function calculateSquareArea(side: number): number {
//   if (side <= 0) {
//     throw new Error("Invalid side length: must be greater than 0");
//   }
//   return Math.pow(side, 2);
// }
//
// function calculateArea(shape: ShapeType, dimension: number): number {
//   switch (shape) {
//     case ShapeType.Circle:
//       return calculateCircleArea(dimension);
//     case ShapeType.Square:
//       return calculateSquareArea(dimension);
//     default:
//       throw new Error("Unsupported shape type");
//   }
// }
//
// console.log(calculateArea(ShapeType.Circle, 5));
// console.log(calculateArea(ShapeType.Square, 5));

// Что стало лучше и почему?
// Выделение функций для каждой фигуры улучшает читаемость и поддерживаемость кода
// Добавление проверок входных значений уменьшает вероятность ошибок при передаче некорректных данных
// Теперь для добавления новых фигур нужно лишь добавить новую функцию и расширить switch-case, без переписывания основного кода
// Код стал легче для понимания и модификации, так как каждая функция теперь отвечает за одну задачу