 import * as SQLite from 'expo-sqlite';

export const abrirBancoDeDados = async () => {
  const db = await SQLite.openDatabaseAsync('agendaApp.db');
  return db;
};

export const criarTabelas = async (db: any) => {
  await db.execAsync(`
    PRAGMA journal_mode = WAL;

    -- Criar tabelas
    CREATE TABLE IF NOT EXISTS atividades (
      id INTEGER PRIMARY KEY NOT NULL,
      descricao TEXT NOT NULL,
      status TEXT CHECK( status IN ('pendente', 'terminado', 'iniciado', 'cancelado') ) NOT NULL,
      data_criacao TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS lista (
      id INTEGER PRIMARY KEY NOT NULL,
      item TEXT NOT NULL,
      categoria TEXT
    );

    CREATE TABLE IF NOT EXISTS notas (
      id INTEGER PRIMARY KEY NOT NULL,
      titulo TEXT NOT NULL,
      conteudo TEXT NOT NULL
    );
  `);
};


/** import * as SQLite from 'expo-sqlite';

// Função para abrir o banco de dados (sem tipagem explícita)
export const abrirBancoDeDados = async () => {
  const db = await SQLite.openDatabaseAsync('agendaApp.db');
  return db;
};

// Função para criar a tabela
export const criarTabela = async (db: any) => {
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS tarefas (
      id INTEGER PRIMARY KEY NOT NULL,
      titulo TEXT NOT NULL,
      descricao TEXT,
      data TEXT
    );
  `);
};

// Função para inserir uma tarefa
export const inserirTarefa = async (db: any, titulo: string, descricao: string, data: string) => {
  await db.runAsync('INSERT INTO tarefas (titulo, descricao, data) VALUES (?, ?, ?)', titulo, descricao, data);
};

// Função para atualizar uma tarefa
export const atualizarTarefa = async (db: any, id: number, titulo: string, descricao: string, data: string) => {
  await db.runAsync('UPDATE tarefas SET titulo = ?, descricao = ?, data = ? WHERE id = ?', titulo, descricao, data, id);
};

// Função para deletar uma tarefa
export const deletarTarefa = async (db: any, id: number) => {
  await db.runAsync('DELETE FROM tarefas WHERE id = ?', id);
};

// Função para buscar todas as tarefas
export const buscarTarefas = async (db: any): Promise<any[]> => {
  return await db.getAllAsync('SELECT * FROM tarefas');
};

// Função para buscar uma única tarefa
export const buscarPrimeiraTarefa = async (db: any) => {
  return await db.getFirstAsync('SELECT * FROM tarefas');
};

// Exemplo de como chamar essas funções
export const executarExemplo = async () => {
  // Abrir o banco de dados
  const db = await abrirBancoDeDados();

  // Criar a tabela se não existir
  await criarTabela(db);

  // Inserir uma nova tarefa
  await inserirTarefa(db, 'Comprar leite', 'Comprar leite no supermercado', '2024-10-19');

  // Buscar todas as tarefas
  const tarefas = await buscarTarefas(db);
  console.log(tarefas);

  // Atualizar uma tarefa
  await atualizarTarefa(db, 1, 'Comprar pão', 'Comprar pão na padaria', '2024-10-20');

  // Deletar uma tarefa
  await deletarTarefa(db, 1);
};**/