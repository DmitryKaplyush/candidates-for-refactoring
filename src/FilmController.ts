class FilmController {
  openDetails() {
    const popup = new Popup();
    this.popupOpened = true;
  }

  isPopupOpened() {
    return this.popupOpened;
  }
}

// Что было плохо и почему?
// Отсутствие определения свойства popupOpened
// Создание объекта Popup не используется после создания

// class FilmController {
//   private popupOpened: boolean = false;

//   public openDetails(): void {
//     const popup = new Popup();
//     this.popupOpened = true;
//   }

//   public isPopupOpened(): boolean {
//     return this.popupOpened;
//   }
// }

// Что стало лучше и почему?
// Определение и защита свойства popupOpened делает класс более устойчивым и предотвращает непреднамеренные изменения
// Теперь метод openDetails может содержать дополнительную логику для работы с объектом Popup