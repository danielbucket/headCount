import DistrictRepository from '../../src/DistrictRepository.js';
import highSchoolGradData from '../../data/high_school_graduation_rates';

describe('DistrictRepository iteration 0', () =>  {
  const district = new DistrictRepository(highSchoolGradData);

  test('01: findAverage for ACADEMY 20', () => {
    expect(district.findAverage('ACADEMY 20')).toBe(.898)
  });

  test('02: compareDistrictAverages ACADEMY 20 against YUMA SCHOOL DISTRICT 1', () => {
    const result =  { "ACADEMY 20": 0.898, "YUMA SCHOOL DISTRICT 1": 0.888, "compared": 0.893 }
    expect(district.compareDistrictAverages('ACADEMY 20', 'YUMA SCHOOL DISTRICT 1')).toEqual(result);
  });

  test('03: compareDistrictAverages is case insensitive', () => {
    const result =  { "ACADEMY 20": 0.898, "YUMA SCHOOL DISTRICT 1": 0.888, "compared": 0.893 }
    expect(district.compareDistrictAverages('ACADeMY 20', 'YUMA ScHOoL DiStRICT 1')).toEqual(result);
  });

  test('04: compareDistrictAverages ACADEMY 20 against Colorado', () => {
    const result = { "ACADEMY 20": 0.898, "COLORADO": 0.751, "compared": 0.825}
    expect(district.compareDistrictAverages('ACADEMY 20', 'Colorado')).toEqual(result);
  });

});
