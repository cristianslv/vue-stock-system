
import { API_URL, requestOptions } from "./constants";

export async function list() {
  const response = await fetch(`${API_URL.GALPOES}listar`, requestOptions("GET"));

  const data = await response.json();

  return data;
}

export async function view(id) {
  const response = await fetch(`${API_URL.GALPOES}/${id}/listar`, requestOptions("GET"));

  const data = await response.json();

  return data;
}

export async function save(galpao) {
  const response = await fetch(`${API_URL.GALPOES}criar`, requestOptions("POST", galpao));

  const data = await response.json();

  return data;
}

export async function edit(id, galpao) {
  const response = await fetch(`${API_URL.GALPOES}/${id}/editar`, requestOptions("POST", galpao));

  const data = await response.json();

  return data;
}

export async function remove(id) {
  const response = await fetch(`${API_URL.GALPOES}/${id}/remover`, requestOptions("DELETE"));

  const data = await response.json();

  return data;
}