import ErrorRepository from '../js/errorRepository';

test('Get error description - success', () => {
  const errorRepo = new ErrorRepository();
  const result = errorRepo.translateCode(5657);
  expect(result).toBe('Такого пользователя не существует');
});

test('Get error description - there is not such error', () => {
  const errorRepo = new ErrorRepository();
  const result = errorRepo.translateCode(6765);
  expect(result).toBe('Unknown error');
});
