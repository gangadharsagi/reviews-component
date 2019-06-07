import { getStarCheckedFactory, starCheckedParamSelector } from '../starCheckedParamSelector';

describe('getStarCheckedFactory', () => {
  it('should select data from the store state', () => {
    const mockState = {
      mockParam: {
        mockData: 'mockString',
      },
    };
    const expected = getStarCheckedFactory(mockState);
    const result = 'mockString';
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {
      mockParam: {
        mockData: 'mockString',
      },
    };
    const expected = getStarCheckedFactory(mockState);
    const result = '';
    expect(expected).toEqual(result);
  });
});

describe('starCheckedFactorySelector', () => {
  it('should select data from the store state', () => {
    const mockState = {
      mockParam: {
        mockData: 'mockString',
      },
    };
    const expected = starCheckedParamSelector(mockState);
    const result = 'mockString';
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {
      mockParam: {
        mockData: 'mockString',
      },
    };
    const expected = starCheckedParamSelector(mockState);
    const result = '';
    expect(expected).toEqual(result);
  });
});
