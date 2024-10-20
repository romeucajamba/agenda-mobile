import { abrirBancoDeDados, criarTabelas } from './database';
import * as Atividades from './activity';
import * as Lista from './list';
import * as Notas from './notes';

export const executeDatabase = async () => {
  const db = await abrirBancoDeDados();

  // Criar as tabelas
  await criarTabelas(db);

  // Exemplo: Inserir uma atividade
  await Atividades.inserirAtividade(db, 'Aprender React Native', 'pendente', '2024-10-19');

  // Exemplo: Inserir um item na lista
  await Lista.inserirItemLista(db, 'Comprar pão', 'compras');

  // Exemplo: Inserir uma nota
  await Notas.inserirNota(db, 'Primeira Nota', 'Isso é um bloco de notas');

  // Buscar atividades
  const atividades = await Atividades.buscarAtividades(db);
  console.log(atividades);

  // Buscar itens da lista
  const itensLista = await Lista.buscarItensLista(db);
  console.log(itensLista);

  // Buscar notas
  const notas = await Notas.buscarNotas(db);
  console.log(notas);

  // Atualizar status de uma atividade
  await Atividades.atualizarAtividade(db, 1, 'terminado');

  // Deletar uma nota
  await Notas.deletarNota(db, 1);
};