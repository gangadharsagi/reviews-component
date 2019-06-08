import { getProductImageHelper } from '../getProductImageHelper';

describe('getProductImageHelper', () => {
  it('should form image url with mockProductImage', () => {
    const mockProductImage = '61YqZpvCyaL';
    const expected = getProductImageHelper(mockProductImage);
    const result =  "https://images-na.ssl-images-amazon.com/images/I/61YqZpvCyaL._CR412,0,1060,1060_UX175.jpg";
    expect(expected).toEqual(result);
  });
});
