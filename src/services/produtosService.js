
import { list, listRelatorio, edit, remove, save, view } from "@/resources/produtosResource";

export function getItems() {
  return list();
}

export function getRelatorioItems({empresaId}) {
  return listRelatorio(empresaId);
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