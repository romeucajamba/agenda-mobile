import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import * as Listas from '../db/list'; 
import { abrirBancoDeDados } from '../db/database'; 

const ListaScreen: React.FC = () => {
  const [lista, setLista] = useState<any[]>([]);
  const [item, setItem] = useState('');
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    const fetchLista = async () => {
      const db = await abrirBancoDeDados();
      const listaData = await Listas.buscarItensLista(db);
      setLista(listaData);
    };

    fetchLista();
  }, []);

  const handleSave = async () => {
    if (!item || !categoria) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const db = await abrirBancoDeDados();
    await Listas.inserirItemLista(db, item, categoria); 
    setItem('');
    setCategoria('');
    setLista(); 
  };

  return (
    <View className="flex-1 p-4">
      <View style={{ marginBottom: 20 }}>
        <TextInput
          style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 10, marginTop: 70 }}
          placeholder="Item"
          value={item}
          onChangeText={setItem}
        />
        <TextInput
          style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 10 }}
          placeholder="Categoria"
          value={categoria}
          onChangeText={setCategoria}
          multiline
          numberOfLines={5}
        />
        <Button title="Salvar" onPress={handleSave} />
      </View>
    </View>
  );
};
export default ListaScreen;