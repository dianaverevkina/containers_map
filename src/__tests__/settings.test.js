import Settings from '../js/settings';

test('getting merged Map - success', () => {
  const settings = new Settings();
  const expected = new Map([
    ['theme', 'dark'],
    ['music', 'off'],
    ['difficulty', 'hard'],
  ]);

  expect(settings.combinedSettings).toEqual(expected);
});
