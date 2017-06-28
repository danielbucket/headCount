import DistrictRepository from '../../src/DistrictRepository.js';
import highSchoolGradData from '../../data/high_school_graduation_rates.js';

describe('DistrictRepository iteration 0', () =>  {
  const district = new DistrictRepository(highSchoolGradData);

  test('01: district has data in an object', () => {
    // remember that an array is also just an object.
    expect(typeof district.data).toBe('object');
  });

  test('02: data coming in has no duplicates', () => {
    // uncomment out the tests that best fits your model
    // expect(district.data.length).toBe(181);
    expect(Object.keys(district.data).length).toBe(181);
  });

});
