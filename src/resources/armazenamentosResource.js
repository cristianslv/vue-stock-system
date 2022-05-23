import { API_URL, requestOptions } from "./constants";

export async function list() {
  const response = await fetch(`${API_URL.ARMAZENAMENTOS}listar`, requestOptions("GET"));

  const data = await response.json();

  return data;
}

export async function view(id) {
  const response = await fetch(`${API_URL.ARMAZENAMENTOS}${id}/listar`, requestOptions("GET"));

  const data = await response.json();

  return data;
}

export async function save(armazenamentos) {
  const response = await fetch(`${API_URL.ARMAZENAMENTOS}criar`, requestOptions("POST", armazenamentos));

  const data = await response.json();

  return data;
}

export async function edit(id, armazenamentos) {
  const response = await fetch(`${API_URL.ARMAZENAMENTOS}${id}/editar`, requestOptions("POST", armazenamentos));

  const data = await response.json();

  return data;
}

export async function remove(id) {
  const response = await fetch(`${API_URL.ARMAZENAMENTOS}${id}/remover`, requestOptions("DELETE"));

  const data = await response.json();

  return data;
}