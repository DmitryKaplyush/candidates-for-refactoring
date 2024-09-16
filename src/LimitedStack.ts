interface Stack<T> {
  pop(): T | null;
  push(item: T): void;
  percentFull(): number;
}

class UnlimitedStack<T> implements Stack<T> {
  percentFull(): number {
    return 0;
  }
}

// Что было плохо и почему?
// Отсутствие реализации методов pop и push делает класс UnlimitedStack не соответствующим интерфейсу Stack<T>, что нарушает контракт интерфейса
// Метод percentFull всегда возвращает 0, что не отражает фактическое состояние стека, если бы он имел ограничение

// interface Stack<T> {
//   pop(): T | null;
//   push(item: T): void;
//   percentFull(): number;
// }
//
// class UnlimitedStack<T> implements Stack<T> {
//   private items: T[] = [];

//   public pop(): T | null {
//     return this.items.pop() ?? null;
//   }

//   public push(item: T): void {
//     this.items.push(item);
//   }

//   public percentFull(): number {
//     return 0;
//   }
// }

// Что стало лучше и почему?
// Реализация всех методов интерфейса Stack<T> делает класс функциональным и соответствующим контракту