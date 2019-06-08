/**
 * This helper is used to get the image src by using productImg value from the
 * response
 *
 * @param {string} productImg - productImg value from the response
 * @returns {string} - image url
 */
export const getProductImageHelper = (productImg) =>
  `https://images-na.ssl-images-amazon.com/images/I/${productImg}._CR412,0,1060,1060_UX175.jpg`;
