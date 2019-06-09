import { apiStartReducer } from '../apiStartReducer';

describe('apiStartReducer', () => {
  it('should update the state and return the new state', () => {
    const mockState = {};
    const mockPayload = 'GET_REVIEWS';
    const expected = apiStartReducer(mockState, mockPayload);
    const result = { isFetchingData: false };
    expect(expected).toEqual(result);
  });
});
