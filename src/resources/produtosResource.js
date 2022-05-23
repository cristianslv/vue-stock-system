
import { API_URL, requestOptions } from "./constants";

export async function list() {
  const response = await fetch(`${API_URL.PRODUTOS}listar`, requestOptions("GET"));

  const data = await response.json();

  return data;
}

export async function view(id) {
  const response = await fetch(`${API_URL.PRODUTOS}/${id}/listar`, requestOptions("GET"));

  const data = await response.json();

  return data;
}

export async function save(produto) {
  const response = await fetch(`${API_URL.PRODUTOS}criar`, requestOptions("POST", produto));

  const data = await response.json();

  return data;
}

export async function edit(id, produto) {
  const response = await fetch(`${API_URL.PRODUTOS}/${id}/editar`, requestOptions("POST", produto));

  const data = await response.json();

  return data;
}

export async function remove(id) {
  const response = await fetch(`${API_URL.PRODUTOS}/${id}/remover`, requestOptions("DELETE"));

  const data = await response.json();

  return data;
}