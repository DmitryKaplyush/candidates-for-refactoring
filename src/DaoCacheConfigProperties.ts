class DaoCacheConfigProperties {
  alive: number; // alive cache time in days
  elements: number; // maximum elements in cache
}

// Что было плохо и почему?
// Без проверки значений свойств можно установить некорректные данные, что может привести к неожиданным ошибкам
// Без конструктора создание экземпляров класса с начальными значениями было бы труднее и менее удобно
// Класс не содержал методов для управления и проверки значений, что ограничивало его функциональность

// class DaoCacheConfigProperties {
//   private _alive: number; // alive cache time in days
//   private _elements: number; // maximum elements in cache
//
//   /**
//    * Конструктор для инициализации свойств
//    * @param alive - Время жизни кэша в днях
//    * @param elements - Максимальное количество элементов в кэше
//    * @throws Ошибка, если значения некорректны
//    */
//   constructor(alive: number, elements: number) {
//     this.setAlive(alive);
//     this.setElements(elements);
//   }
//
//   /**
//    * Получает время жизни кэша.
//    * @returns Время жизни кэша в днях.
//    */
//   public getAlive(): number {
//     return this._alive;
//   }
//
//   /**
//    * Устанавливает время жизни кэша
//    * @param alive - Время жизни кэша в днях
//    * @throws Ошибка, если значение некорректно
//    */
//   public setAlive(alive: number): void {
//     if (alive <= 0) {
//       throw new Error("Cache time (alive) must be a positive number.");
//     }
//     this._alive = alive;
//   }
//
//   /**
//    * Получает максимальное количество элементов в кэше
//    * @returns Максимальное количество элементов в кэше
//    */
//   public getElements(): number {
//     return this._elements;
//   }
//
//   /**
//    * Устанавливает максимальное количество элементов в кэше
//    * @param elements - Максимальное количество элементов в кэше
//    * @throws Ошибка, если значение некорректно
//    */
//   public setElements(elements: number): void {
//     if (elements <= 0) {
//       throw new Error("Maximum elements must be a positive number.");
//     }
//     this._elements = elements;
//   }
// }

// Что стало лучше и почему?
// Добавление конструктора и проверок обеспечивает корректную инициализацию объектов и защиту от некорректных значений
// Эти методы позволяют безопасно управлять доступом и изменением свойств, улучшая инкапсуляцию и обеспечивая более надёжную работу класса
// Комментарии делают класс более понятным, облегчая его использование и поддержку