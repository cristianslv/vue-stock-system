import { API_URL, requestOptions } from "./constants";

export async function list() {
  const response = await fetch(`${API_URL.ALOCACAO}listar`, requestOptions("GET"));

  const data = await response.json();

  return data;
}

export async function view(id) {
  const response = await fetch(`${API_URL.ALOCACAO}/${id}/listar`, requestOptions("GET"));

  const data = await response.json();

  return data;
}

export async function save(alocacao) {
  const response = await fetch(`${API_URL.ALOCACAO}criar`, requestOptions("POST", alocacao));

  const data = await response.json();

  return data;
}

export async function edit(id, alocacao) {
  const response = await fetch(`${API_URL.ALOCACAO}/${id}/editar`, requestOptions("POST", alocacao));

  const data = await response.json();

  return data;
}

export async function remove(id) {
  const response = await fetch(`${API_URL.ALOCACAO}/${id}/remover`, requestOptions("DELETE"));

  const data = await response.json();

  return data;
}