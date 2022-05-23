export const API_URL = {
  EMPRESAS: "http://localhost:8080/empresas/",
  ESTOQUES: "http://localhost:8080/estoques/",
  GALPOES: "http://localhost:8080/galpoes/",
  ALOCACAO: "http://localhost:8080/alocacao/",
  ARMAZENAMENTOS: "http://localhost:8080/armazenamentos/",
  PRODUTOS: "http://localhost:8080/produtos/"
};

export function requestOptions(method, body) {
  return {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body
  }
}