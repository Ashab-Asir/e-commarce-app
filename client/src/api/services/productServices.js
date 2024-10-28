import { http } from "../common/http";
export const getProducts = () =>
  http.get("/api/products").then((res) => res.data);

export const addProducts = (productPayload) =>
  http.post("/api/products", productPayload).then((res) => res.data);

export const updateProduct = (id, productPayload) =>
  http.put(`/api/products/${id}`, productPayload).then((res) => res.data);

export const deleteProduct = (id) =>
  http.delete(`/api/products/${id}`).then((res) => res.data);
