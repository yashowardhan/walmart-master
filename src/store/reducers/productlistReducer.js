import { FETCH_PRODUCTS } from "../actions/fetchProducts";

// Recieve type and payload from action and return payload.
// Use a switch since it's more readable.

const productReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS:
      return payload;
    default:
      return state;
  }
};

export default productReducer;
