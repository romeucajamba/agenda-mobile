export const inserirItemLista = async (db: any, item: string, categoria: string | null) => {
    await db.runAsync('INSERT INTO lista (item, categoria) VALUES (?, ?)', item, categoria);
  };
  
  export const buscarItensLista = async (db: any): Promise<any[]> => {
    return await db.getAllAsync('SELECT * FROM lista');
  };
  
  export const deletarItemLista = async (db: any, id: number) => {
    await db.runAsync('DELETE FROM lista WHERE id = ?', id);
};

export const atualizarList = async (db: any, id: number, item: string, categoria: string | null) => {
  await db.runAsync('UPDATE lista SET item = ? categoria = ? WHERE id = ?', item, categoria, id);
};