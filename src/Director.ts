class Calendar {
  addEvent(event) {
    // some logic to add event
  }
}

class Director {
  calendar: Calendar;

  constructor(calendar: Calendar) {
    this.calendar = calendar;
  }

  scheduleMeeting(event) {
    this.calendar.addEvent(event);
  }
}

// Что было плохо и почему?
// Отсутствие типизации
// Отсутствие проверки значений
// Отсутствие документации

// interface Event {
//   title: string;
//   date: Date;
//   description?: string;
// }

// class Calendar {

//   public addEvent(event: Event): void {
//     if (!event.title || !(event.date instanceof Date)) {
//       throw new Error("Invalid event: title is required and date must be a Date object.");
//     }
//     // some logic to add event
//   }
// }

// class Director {
//   private calendar: Calendar;
//
//   constructor(calendar: Calendar) {
//     this.calendar = calendar;
//   }
//
//   public scheduleMeeting(event: Event): void {
//     this.calendar.addEvent(event);
//   }
// }


// Что стало лучше и почему?
// Типизация
// Проверка значений
// Интерфейсы позволяют обеспечить чёткую структуру для событий, облегчая изменения и поддерживая гибкость кода