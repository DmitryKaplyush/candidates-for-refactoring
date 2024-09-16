class Car {
  private make: string;
  private model: string;
  private year: number;
  private color: string;
  private price: number;
  private mileage: number;
}

// Что было плохо и почему?
// Класс не имел методов для работы с данными, что ограничивало его функциональность и удобство использования
// Без конструктора создание и инициализация объектов класса было неудобным и трудоёмким
// Не было механизмов для проверки корректности значений свойств, что могло привести к созданию объектов с некорректными данными
// Приватные свойства ограничивали доступ, но отсутствовали методы для безопасного изменения и получения этих данных

// class Car {
//   private make: string;
//   private model: string;
//   private year: number;
//   private color: string;
//   private price: number;
//   private mileage: number;
//
//   constructor(make: string, model: string, year: number, color: string, price: number, mileage: number) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.price = price;
//     this.mileage = mileage;
//   }
//
//   // Getters
//   public getMake(): string {
//     return this.make;
//   }
//
//   public getModel(): string {
//     return this.model;
//   }
//
//   public getYear(): number {
//     return this.year;
//   }
//
//   public getColor(): string {
//     return this.color;
//   }
//
//   public getPrice(): number {
//     return this.price;
//   }
//
//   public getMileage(): number {
//     return this.mileage;
//   }
//
//   // Setters with basic validation
//   public setMake(make: string): void {
//     if (make.trim() === '') {
//       throw new Error("Make cannot be empty.");
//     }
//     this.make = make;
//   }
//
//   public setModel(model: string): void {
//     if (model.trim() === '') {
//       throw new Error("Model cannot be empty.");
//     }
//     this.model = model;
//   }
//
//   public setYear(year: number): void {
//     if (year < 1886 || year > new Date().getFullYear()) {
//       throw new Error("Invalid year.");
//     }
//     this.year = year;
//   }
//
//   public setColor(color: string): void {
//     if (color.trim() === '') {
//       throw new Error("Color cannot be empty.");
//     }
//     this.color = color;
//   }
//
//   public setPrice(price: number): void {
//     if (price < 0) {
//       throw new Error("Price cannot be negative.");
//     }
//     this.price = price;
//   }
//
//   public setMileage(mileage: number): void {
//     if (mileage < 0) {
//       throw new Error("Mileage cannot be negative.");
//     }
//     this.mileage = mileage;
//   }
//
//   // Example method to display car details
//   public displayInfo(): string {
//     return `${this.year} ${this.make} ${this.model} - ${this.color}. Price: $${this.price}, Mileage: ${this.mileage} miles.`;
//   }
// }

// Что стало лучше и почему?
//  Конструктор упрощает создание и инициализацию объектов класса, обеспечивая установку значений при создании экземпляра
// Эти методы позволяют безопасно управлять доступом и изменением свойств, включая базовые проверки данных,
// что повышает надёжность и предотвращает некорректные значения.
// Добавление методов, таких как displayInfo, улучшает функциональность класса,
// предоставляя дополнительные возможности для работы с данными объекта.
// Внедрение базовых проверок в сеттерах помогает предотвратить создание объектов с некорректными значениями,
// улучшая надёжность и целостность данных.