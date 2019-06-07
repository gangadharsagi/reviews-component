import { getFilterByStars, filterByStarsSelector } from '../filterByStarsSelector';

describe('getFilterByStars', () => {
  it('should select data from the store state', () => {
    const mockState = {
      mockParam: {
        mockData: 'mockString',
      },
    };
    const expected = getFilterByStars(mockState);
    const result = 'mockString';
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {
      mockParam: {
        mockData: 'mockString',
      },
    };
    const expected = getFilterByStars(mockState);
    const result = '';
    expect(expected).toEqual(result);
  });
});

describe('filterByStarsSelector', () => {
  it('should select data from the store state', () => {
    const mockState = {
      mockParam: {
        mockData: 'mockString',
      },
    };
    const expected = filterByStarsSelector(mockState);
    const result = 'mockString';
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {
      mockParam: {
        mockData: 'mockString',
      },
    };
    const expected = filterByStarsSelector(mockState);
    const result = '';
    expect(expected).toEqual(result);
  });
});
