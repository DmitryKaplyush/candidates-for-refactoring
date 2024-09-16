class Car2 {
  public static readonly COLORS = ['red', 'blue', 'green'];

  public static isColorAvailable(color: string): boolean {
    return this.COLORS.includes(color);
  }
}


// Что было плохо и почему?
// Метод isColorAvailable не проверяет, что входной параметр является строкой, что может привести к ошибкам выполнения


// class Car2 {
//   public static readonly COLORS: string[] = ['red', 'blue', 'green'];
//
//   /**
//    * Проверяет, доступен ли цвет
//    * @param color - Цвет для проверки
//    * @returns Возвращает true, если цвет доступен, иначе false
//    * @throws Ошибка, если переданный параметр не является строкой
//    */
//   public static isColorAvailable(color: string): boolean {
//     if (typeof color !== 'string') {
//       throw new Error("The color parameter must be a string.");
//     }
//     return this.COLORS.includes(color);
//   }
//
//   /**
//    * Добавляет новый цвет в список доступных цветов
//    * @param color - Новый цвет для добавления
//    * @throws Ошибка, если цвет не является строкой или уже существует в списке
//    */
//   public static addColor(color: string): void {
//     if (typeof color !== 'string') {
//       throw new Error("The color parameter must be a string.");
//     }
//     if (this.COLORS.includes(color)) {
//       throw new Error("The color is already available.");
//     }
//     this.COLORS.push(color);
//   }
// }

// Что стало лучше и почему?
// Добавление проверки типа в метод isColorAvailable предотвращает ошибки, связанные с некорректными типами данных
// Документация
// Метод addColor позволяет динамически добавлять новые цвета в список, что делает класс более гибким и расширяемым