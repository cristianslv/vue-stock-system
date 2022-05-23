import { 
  getItems as aGet, 
  createItem as aCreate, 
  deleteItem as aDelete, 
  updateItem as aUpdate 
} from "@/services/alocacoesService";

import { 
  getItems as eGet, 
  createItem as eCreate, 
  deleteItem as eDelete, 
  updateItem as eUpdate 
} from "@/services/empresasService";

import { 
  getItems as esGet, 
  createItem as esCreate, 
  deleteItem as esDelete, 
  updateItem as esUpdate 
} from "@/services/estoquesService";

import { 
  getItems as gGet, 
  createItem as gCreate, 
  deleteItem as gDelete, 
  updateItem as gUpdate 
} from "@/services/galpoesService";

import { 
  getItems as pGet, 
  createItem as pCreate, 
  deleteItem as pDelete, 
  updateItem as pUpdate 
} from "@/services/produtosService";

export const CONSTANTS = {
  'Empresas':{
    'heads': [
      'CNPJ',
      'Nome',
      'Ações',
    ],
    'fields': [
      'cnpj',
      'nome'
    ],
    'route': '/empresas',
    'idField': 'empresa_id',
    'get': eGet,
    'create': eCreate,
    'delete': eDelete,
    'update': eUpdate,
  }, 
  'Estoques':{
    'heads': [
      'Galpão',
      'Setor',
      'Ações',
    ],
    'fields': [
      'galpao_id',
      'setor'
    ],
    'route': '/estoques',
    'idField': 'estoque_id',
    'get': esGet,
    'create': esCreate,
    'delete': esDelete,
    'update': esUpdate,
  }, 
  'Galpões':{
    'heads': [
      'Nome',
      'Descrição',
      'Ações',
    ],
    'fields': [
      'nome',
      'descricao'
    ],
    'idField': 'galpao_id',
    'route': '/galpoes',
    'get': gGet,
    'create': gCreate,
    'delete': gDelete,
    'update': gUpdate,
  }, 
  'Alocação':{
    'heads': [
      'Estoque',
      'Empresa',
      'Data Inicial',
      'Data Final',
      'Ações',
    ],
    'fields': [
      'estoque',
      'empresa',
      'datainicial',
      'datafinal'
    ],
    'idField': 'alocacao_id',
    'route': '/alocacao',
    'get': aGet,
    'create': aCreate,
    'delete': aDelete,
    'update': aUpdate,
  }, 
  'Produtos':{
    'heads': [
      'Nome',
      'Descricao',
      'Ações',
    ],
    'fields': [
      'nome',
      'descricao',
    ],
    'idField': 'produto_id',
    'route': '/produtos',
    'get': pGet,
    'create': pCreate,
    'delete': pDelete,
    'update': pUpdate,
  }, 
};