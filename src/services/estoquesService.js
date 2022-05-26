import { list, listAvailable, listRelatorioEstoquesAtivos, listRelatorioHistoricoEstoques, edit, remove, save, view } from "@/resources/estoquesResource";

export function getItems() {
  return list();
}

export function getAvailableItems() {
  return listAvailable();
}

export function getRelatorioItemsAtivos() {
  return listRelatorioEstoquesAtivos();
}

export function getRelatorioHistoricoItems({empresaId, dataInicial, dataFinal}) {
  return listRelatorioHistoricoEstoques(empresaId, dataInicial, dataFinal);
}

export function showItem(id) {
  return view(id);
}

export function updateItem(id, item) {
  return edit(id, item);
}

export function createItem(item) {
  return save(item);
} 

export function deleteItem(id) {
  return remove(id);
}