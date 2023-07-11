export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [4554, 'Неверный логин/пароль'],
      [5657, 'Такого пользователя не существует'],
      [9897, 'Недостаточно средств для покупки'],
    ]);
  }

  translateCode(numberCode) {
    if (this.errors.has(numberCode)) {
      return this.errors.get(numberCode);
    }

    return 'Unknown error';
  }
}
