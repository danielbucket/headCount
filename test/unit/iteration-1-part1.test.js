import DistrictRepository from '../../src/DistrictRepository.js';
// import kinderData from '../../data/kindergartners_in_full_day_program.js';
import highSchoolGradData from '../../data/high_school_graduation_rates';

describe('DistrictRepository iteration 1 - part 1', () =>  {
  const district = new DistrictRepository(highSchoolGradData);

  test.only('01: findByName returns undefined if no arguments are provided', () => {
    expect(district.findByName()).toBe(undefined);
  });

  test('02: findByName returns undefined when there are no matching arguments', () => {
    expect(district.findByName('Vikings')).toBe(undefined);
  });

  test('03: findByName returns an object with its individual district information', () => {

    expect(typeof district.findByName('Colorado')).toEqual('object');
    expect(district.findByName('Colorado').location).toEqual('COLORADO');
  });

  test('04: findByName search is not case sensitive', () => {
    expect(district.findByName('ColoRAdo').location).toEqual('COLORADO');
    expect(district.findByName('ACADEmY 20').location).toEqual('ACADEMY 20');
  });

  test('05: each district has a data object containing each year and its data as key value pairs.', () => {
    const academy = district.findByName('ACADEmY 20');

    expect(academy.location).toEqual('ACADEMY 20');
    expect(typeof academy.data).toBe('object');
  });

  test('06: district data is rounded to the nearest hundredth', () => {
    const result = {'2010': 0.895, '2011': 0.895, '2012': .89, '2013': 0.914, '2014': 0.898}
    const academy = district.findByName('ACADEmY 20');

    expect(academy.data).toEqual(result);
  });

  test('07: district data is sanitized and defaults to 0', () => {
    const academy = district.findByName('ARICKAREE R-2');
    const result = {"2010": 1, "2011": 1, "2012": 1, "2013": 0.875, "2014": 1}

    expect(academy.data).toEqual(result)
  });

});
