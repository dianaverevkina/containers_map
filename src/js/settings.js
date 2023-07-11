export default class Settings {
  constructor() {
    this.defaultSetting = new Map([
      ['theme', 'light'],
      ['music', 'off'],
      ['difficulty', 'normal'],

    ]);

    this.userSettings = new Map([
      ['theme', 'dark'],
      ['difficulty', 'hard'],
    ]);
  }

  get combinedSettings() {
    const mergedMap = new Map([...this.defaultSetting]);
    this.userSettings.forEach((value, key) => {
      mergedMap.set(key, value);
    });
    return mergedMap;
  }
}
