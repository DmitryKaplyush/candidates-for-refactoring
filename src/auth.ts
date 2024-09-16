type TPayment = {
  amount: number;
  rcCode: number;
};

type TGatewayService = {
  sendAuth: (payment: TPayment) => number;
};

const auth = (payment: TPayment, gateway: TGatewayService) => {
  const rcCode = gateway.sendAuth(payment);

  payment.rcCode = rcCode;
};

type TPayment = {
  amount: number;
  rcCode: number;
};

type TGatewayService = {
  sendAuth: (payment: TPayment) => number;
};

const auth = (payment: TPayment, gateway: TGatewayService) => {
  const rcCode = gateway.sendAuth(payment);

  payment.rcCode = rcCode;
};


//Что было плохо и почему?
// Функция auth напрямую изменяет свойство rcCode в объекте payment
// Мутирование может привести к трудностям с отладкой и непредсказуемыми побочными эффектами, если объект передаётся между разными частями программы
// Смущает не очевидное поведение auth, возвращает undefined, хоть и изменяется payment

// type TPayment = {
//   amount: number;
//   rcCode: number;
// };
//
// type TGatewayService = {
//   sendAuth: (payment: TPayment) => number;
// };
//
// const auth = (payment: TPayment, gateway: TGatewayService): TPayment => {
//   const rcCode = gateway.sendAuth(payment);
//   return { ...payment, rcCode };
// };

// Что стало лучше и почему?
// Вместо того чтобы изменять исходный объект, функция возвращает новый объект с обновлёнными значениями, что делает код более безопасным и предсказуемым
// Теперь видно, что функция возвращает обновлённый объект, что делает поведение более понятным и легко тестируемым