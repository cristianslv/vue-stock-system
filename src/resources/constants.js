export const API_URL = {
  EMPRESAS: "http://localhost:8080/empresas/",
  ESTOQUES: "http://localhost:8080/estoques/",
  GALPOES: "http://localhost:8080/galpoes/",
  ALOCACOES: "http://localhost:8080/alocacoes/",
  ARMAZENAMENTOS: "http://localhost:8080/armazenamentos/",
  PRODUTOS: "http://localhost:8080/produtos/",
  RELATORIOPRODUTOS: "http://localhost:8080/relatorios/produtosArmazenados/",
};

export function requestOptions(method, body) {
  return {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body) 
  }
}