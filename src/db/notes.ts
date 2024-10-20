export const inserirNota = async (db: any, titulo: string, conteudo: string) => {
    await db.runAsync('INSERT INTO notas (titulo, conteudo) VALUES (?, ?)', titulo, conteudo);
  };
  
  export const buscarNotas = async (db: any): Promise<any[]> => {
    return await db.getAllAsync('SELECT * FROM notas');
  };
  
  export const deletarNota = async (db: any, id: number) => {
    await db.runAsync('DELETE FROM notas WHERE id = ?', id);
};

export const atualizarNotas = async (db: any, id: number, titulo: string, conteudo: string) => {
  await db.runAsync('UPDATE notas SET titulo = ? conteudo= ? WHERE id = ?', titulo, conteudo, id);
};