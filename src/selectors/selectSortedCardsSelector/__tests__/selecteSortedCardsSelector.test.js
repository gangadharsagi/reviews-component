import { getSelecteSortedCards, selectSortedCardsSelector } from '../selectSortedCardsSelector';

describe('getSelecteSortedCards', () => {
  it('should select data from the store state', () => {
    const mockState = {
      mockParam: {
        mockData: 'mockString',
      },
    };
    const expected = getSelecteSortedCards(mockState);
    const result = 'mockString';
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {
      mockParam: {
        mockData: 'mockString',
      },
    };
    const expected = getSelecteSortedCards(mockState);
    const result = '';
    expect(expected).toEqual(result);
  });
});

describe('selecteSortedCardsSelector', () => {
  it('should select data from the store state', () => {
    const mockState = {
      mockParam: {
        mockData: 'mockString',
      },
    };
    const expected = selectSortedCardsSelector(mockState);
    const result = 'mockString';
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {
      mockParam: {
        mockData: 'mockString',
      },
    };
    const expected = selectSortedCardsSelector(mockState);
    const result = '';
    expect(expected).toEqual(result);
  });
});
