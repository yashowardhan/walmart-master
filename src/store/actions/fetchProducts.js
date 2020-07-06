export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

//Fetch call and we're using a function instaed of an object
//to set up our action. We're fetching data from API
// and returning the data to our payload.

const fetchProducts = (dispatch, pageNumber) => {
  fetch(
    `https://mobile-tha-server-8ba57.firebaseapp.com/walmartproducts/${pageNumber}/8`
  )
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_PRODUCTS, payload: res.products }));
};

export default fetchProducts;
