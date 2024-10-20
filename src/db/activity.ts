export const inserirAtividade = async (db: any, descricao: string, status: string, data_criacao: string) => {
    await db.runAsync('INSERT INTO atividades (descricao, status, data_criacao) VALUES (?, ?, ?)', descricao, status, data_criacao);
  };
  
  export const atualizarAtividade = async (db: any, id: number, status: string) => {
    await db.runAsync('UPDATE atividades SET status = ? WHERE id = ?', status, id);
  };
  
  export const deletarAtividade = async (db: any, id: number) => {
    await db.runAsync('DELETE FROM atividades WHERE id = ?', id);
  };
  
  export const buscarAtividades = async (db: any): Promise<any[]> => {
    return await db.getAllAsync('SELECT * FROM atividades');
  };