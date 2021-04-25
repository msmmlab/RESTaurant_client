import http from "../services/http";
import endpoints from "../config/endpoints";

export const fetchOrders = () => async (dispatch) => {
  const orders = await http.get(endpoints.dev);
  dispatch({ type: "FETCH_ALL_ORDERS", payload: orders.data });
};
