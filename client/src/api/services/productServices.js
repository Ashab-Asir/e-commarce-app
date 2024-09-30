import { http } from "../common/http";
export const getProducts = () =>
  http.get("/api/products").then((res) => res.data);
