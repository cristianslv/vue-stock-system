import { list, edit, remove, save } from "@/resources/estoquesResource";

export function getItems() {
  return list();
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