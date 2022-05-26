import { 
  getItems as aGet, 
  createItem as aCreate, 
  deleteItem as aDelete, 
  updateItem as aUpdate,
  showItem as aShow,
} from "@/services/alocacoesService";

import { 
  getItems as arGet, 
  createItem as arCreate, 
  deleteItem as arDelete, 
  updateItem as arUpdate,
  showItem as arShow,
} from "@/services/armazenamentosService";

import { 
  getItems as eGet, 
  createItem as eCreate, 
  deleteItem as eDelete, 
  updateItem as eUpdate,
  showItem as eShow,
} from "@/services/empresasService";

import { 
  getItems as esGet, 
  getAvailableItems as esGetAvailable, 
  createItem as esCreate, 
  deleteItem as esDelete, 
  updateItem as esUpdate,
  showItem as esShow,
} from "@/services/estoquesService";

import { 
  getItems as gGet, 
  createItem as gCreate, 
  deleteItem as gDelete, 
  updateItem as gUpdate,
  showItem as gShow,
} from "@/services/galpoesService";

import { 
  getItems as pGet, 
  getRelatorioItems as pGetRelatorio,
  createItem as pCreate, 
  deleteItem as pDelete, 
  updateItem as pUpdate,
  showItem as pShow,
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
    'idField': 'empresaId',
    'get': eGet,
    'create': eCreate,
    'delete': eDelete,
    'update': eUpdate,
    'show': eShow,
  }, 
  'Estoques':{
    'heads': [
      'Galpão',
      'Setor',
      'Ações',
    ],
    'fields': [
      'nomegalpao',
      'setor'
    ],
    'route': '/estoques',
    'idField': 'estoqueId',
    'get': esGet,
    'getAvailable': esGetAvailable,
    'create': esCreate,
    'delete': esDelete,
    'update': esUpdate,
    'show': esShow,
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
    'idField': 'galpaoId',
    'route': '/galpoes',
    'get': gGet,
    'create': gCreate,
    'delete': gDelete,
    'update': gUpdate,
    'show': gShow,
  }, 
  'Alocação':{
    'heads': [
      'Galpão',
      'Estoque',
      'Empresa',
      'Data Inicial',
      'Data Final',
      'Ações',
    ],
    'fields': [
      'nomegalpao',
      'setorestoque',
      'nomeempresa',
      'datainicial',
      'datafinal'
    ],
    'idField': 'alocacaoid',
    'route': '/alocacoes',
    'get': aGet,
    'create': aCreate,
    'delete': aDelete,
    'update': aUpdate,
    'show': aShow,
  }, 
  'Armazenamentos':{
    'heads': [
      'Galpão',
      'Estoque',
      'Produto',
      'Quantidade',
      'Ações',
    ],
    'fields': [
      'galpao',
      'estoque',
      'produto',
      'quantidade'
    ],
    'idField': 'galpaoid',
    'idField2': 'estoqueid',
    'route': '/armazenamentos',
    'get': arGet,
    'create': arCreate,
    'delete': arDelete,
    'update': arUpdate,
    'show': arShow,
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
    'idField': 'produtoId',
    'route': '/produtos',
    'get': pGet,
    'create': pCreate,
    'delete': pDelete,
    'update': pUpdate,
    'show': pShow,
  }, 
  'Relatório de Produtos Armazenados':{
    'heads': [
      'Galpão',
      'Estoque',
      'Produto',
      'Quantidade',
      'Ultima Atualização',
    ],
    'fields': [
      'nomegalpao',
      'setorestoque',
      'nomeproduto',
      'quantidade',
      'ultimaatualizacao',
    ],
    'idField': 'x',
    'route': '/relatorioprodutos',
    'get': pGetRelatorio,
    'create': pCreate,
    'delete': pDelete,
    'update': pUpdate,
    'show': pShow,
  }, 
};