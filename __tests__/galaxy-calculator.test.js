import { PlanetAge } from './../src/backend.js'

describe('Earth Age', () => {

    test('should record the age inputted from user', () => {
      let planetAge = new PlanetAge(28);
      expect(planetAge.earthAge).toEqual(28);
    });

});

describe('Mercury Age', () => {

    test('should return users age in specified mercury years', () => {
      let planetAge = new PlanetAge(28);
      expect(planetAge.calculateMercuryAge()).toEqual(116.67);
    });
});

describe('Venus Age', () => {

    test('should return users age in specified venus years', () => {
      let planetAge = new PlanetAge(28);
      expect(planetAge.calculateVenusAge()).toEqual(45.16);
    });
});

describe('Mars Age', () => {

    test('should return users age in specified mars years', () => {
      let planetAge = new PlanetAge(28);
      expect(planetAge.calculateMarsAge()).toEqual(14.89);
    });
});

describe('Jupiter Age', () => {

    test('should return users age in specified jupiter years', () => {
      let planetAge = new PlanetAge(28);
      expect(planetAge.calculateJupiterAge()).toEqual(2.36);
    });
});


describe('Mercury Years Left', () => {

    test('should return users remaining years left for mercury', () => {
      let planetYearsLeft = new PlanetAge(28);
      expect(planetYearsLeft.calculateYearsLeftMercury()).toEqual(183.33);
    });
});

describe('Venus Years Left', () => {

    test('should return users remaining years left for venus', () => {
      let planetYearsLeft = new PlanetAge(28);
      expect(planetYearsLeft.calculateYearsLeftVenus()).toEqual(70.97);
    });
});

describe('Mars Years Left', () => {

    test('should return users remaining years left for mars', () => {
      let planetYearsLeft = new PlanetAge(28);
      expect(planetYearsLeft.calculateYearsLeftMars()).toEqual(23.40);
    });
});

describe('Jupiter Years Left', () => {

    test('should return users remaining years left for jupiter', () => {
      let planetYearsLeft = new PlanetAge(28);
      expect(planetYearsLeft.calculateYearsLeftJupiter()).toEqual(3.71);
    });
});


describe('Mercury Years Over LEB', () => {

    test('should return users years over the LEB for mercury', () => {
      let planetYearsOver = new PlanetAge(85);
      expect(planetYearsOver.calculateYearsOverMercury()).toEqual(54.17);
    });
});

describe('Venus Years Over LEB', () => {

    test('should return users years over the LEB for venus', () => {
      let planetYearsOver = new PlanetAge(85);
      expect(planetYearsOver.calculateYearsOverVenus()).toEqual(20.97);
    });
});

describe('Mars Years Over LEB', () => {

    test('should return users years over the LEB for mars', () => {
      let planetYearsOver = new PlanetAge(85);
      expect(planetYearsOver.calculateYearsOverMars()).toEqual(6.91);
    });
});

describe('Jupiter Years Over LEB', () => {

    test('should return users years over the LEB for jupiter', () => {
      let planetYearsOver = new PlanetAge(85);
      expect(planetYearsOver.calculateYearsOverJupiter()).toEqual(1.1);
    });
});
