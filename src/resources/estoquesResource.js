import { API_URL, requestOptions } from "./constants";

export async function list() {
  const response = await fetch(`${API_URL.ESTOQUES}listar`, requestOptions("GET"));
  
  const data = await response.json();

  return data;
}

export async function listAvailable() {
  const response = await fetch(`${API_URL.ESTOQUES}listarDisponiveis`, requestOptions("GET"));
  
  const data = await response.json();

  return data;
}

export async function view(id) {
  const response = await fetch(`${API_URL.ESTOQUES}${id}/listar`, requestOptions("GET"));

  const data = await response.json();

  return data;
}

export async function save(estoque) {
  const response = await fetch(`${API_URL.ESTOQUES}criar`, requestOptions("POST", estoque));

  const data = await response.json();

  return data;
}

export async function edit(id, estoque) {
  const response = await fetch(`${API_URL.ESTOQUES}${id}/editar`, requestOptions("POST", estoque));

  const data = await response.json();

  return data;
}

export async function remove(id) {
  const response = await fetch(`${API_URL.ESTOQUES}${id}/remover`, requestOptions("DELETE"));

  const data = await response.json();

  return data;
}