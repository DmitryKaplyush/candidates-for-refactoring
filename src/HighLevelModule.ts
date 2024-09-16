class LowLevelModule {
  doSomething() {
    // реализация
  }
}

class HighLevelModule {
  private lowLevelModule: LowLevelModule;

  constructor() {
    this.lowLevelModule = new LowLevelModule(); // создание экземпляра
  }

  doSomethingElse() {
    this.lowLevelModule.doSomething(); // использование непосредственной зависимости
  }
}

// Что было плохо и почему?
// HighLevelModule напрямую зависит от LowLevelModule, что делает его сложно тестируемым и поддерживаемым
// Создание экземпляра LowLevelModule внутри HighLevelModule затрудняет замену на другие реализации или моки

// class LowLevelModule {

//   public doSomething(): void {
//     // реализация
//   }
// }

// class HighLevelModule {
//   private lowLevelModule: LowLevelModule;

//   constructor(lowLevelModule: LowLevelModule) {
//     this.lowLevelModule = lowLevelModule;
//   }

//   public doSomethingElse(): void {
//     this.lowLevelModule.doSomething();
//   }
// }

// const lowLevel = new LowLevelModule();
// const highLevel = new HighLevelModule(lowLevel);
// highLevel.doSomethingElse();

// Что стало лучше и почему?
// Передача зависимости через конструктор упрощает замену LowLevelModule на другую реализацию или мок, облегчая тестирование и расширение