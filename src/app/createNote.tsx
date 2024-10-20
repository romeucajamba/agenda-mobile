import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, TextInput } from 'react-native';
import * as Notas from '../db/notes'; 
import { abrirBancoDeDados } from '../db/database'; 

const NotesCreated: React.FC = () => {
  const [notas, setNotas] = useState<any[]>([]);
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');

  useEffect(() => {
    const fetchNotas = async () => {
      const db = await abrirBancoDeDados();
      const notasData = await Notas.buscarNotas(db);
      setNotas(notasData);
    };

    fetchNotas();
  }, []);

  const handleSave = async () => {
    if (!titulo || !conteudo) {
      alert('Por favor, preencha título e conteúdo da nota.');
      return;
    }

    const db = await abrirBancoDeDados();
    await Notas.inserirNota(db, titulo, conteudo); 
    setTitulo('');
    setConteudo('');
    setNotas(); 
  };

  return (
    <View className="flex-1 p-4">
      <View style={{ marginBottom: 20 }}>
        <TextInput
          style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 10, marginTop: 70 }}
          placeholder="Título da Nota"
          value={titulo}
          onChangeText={setTitulo}
        />
        <TextInput
          style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 10 }}
          placeholder="Conteúdo da Nota"
          value={conteudo}
          onChangeText={setConteudo}
          multiline
          numberOfLines={5}
        />
        <Button title="Salvar Nota" onPress={handleSave} />
      </View>
    </View>
  );
};
export default NotesCreated;