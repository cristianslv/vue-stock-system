import { list, edit, remove, save, view } from "@/resources/alocacoesResource";

export function getItems() {
  return list();
}

export function showItem() {
  return view();
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