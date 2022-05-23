
import { API_URL, requestOptions } from "./constants";

export async function list() {
  const response = fetch(`${API_URL.PRODUTOS}listar`, requestOptions("GET"));

  const data = await response.json();

  return data;
}

export async function save(produto) {
  const response = fetch(`${API_URL.PRODUTOS}criar`, requestOptions("POST", produto));

  const data = await response.json();

  return data;
}

export async function edit(id, produto) {
  const response = fetch(`${API_URL.PRODUTOS}/${id}/editar`, requestOptions("POST", produto));

  const data = await response.json();

  return data;
}

export async function remove(id) {
  const response = fetch(`${API_URL.PRODUTOS}/${id}/remover`, requestOptions("DELETE"));

  const data = await response.json();

  return data;
}