import { API_URL, requestOptions } from "./constants";

export async function list() {
  const response = await fetch(`${API_URL.EMPRESAS}/listar`, requestOptions("GET"));
  
  const data = await response.json();

  return data;
}

export async function view(id) {
  const response = await fetch(`${API_URL.EMPRESAS}/${id}/listar`, requestOptions("GET"));

  const data = await response.json();

  return data;
}

export async function save(empresa) {
  const response = await fetch(`${API_URL.EMPRESAS}criar`, requestOptions("POST", empresa));

  const data = await response.json();

  return data;
}

export async function edit(id, empresa) {
  const response = await fetch(`${API_URL.EMPRESAS}/${id}/editar`, requestOptions("POST", empresa));

  const data = await response.json();

  return data;
}

export async function remove(id) {
  const response = await fetch(`${API_URL.EMPRESAS}/${id}/remover`, requestOptions("DELETE"));

  const data = await response.json();

  return data;
}