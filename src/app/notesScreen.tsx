import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import * as Notas from '../db/notes'; 
import { abrirBancoDeDados } from '../db/database'; 
import { Link } from 'expo-router';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const NotesScreen: React.FC = () => {
  const [notas, setNotas] = useState<any[]>([]);

  useEffect(() => {
    const fetchNotas = async () => {
      const db = await abrirBancoDeDados();
      const notasData = await Notas.buscarNotas(db);
      setNotas(notasData);
    };

    fetchNotas();
  }, []);

  const handleDelete = async (id: number) => {
    const db = await abrirBancoDeDados();
    await Notas.deletarNota(db, id);
    setNotas(notas.filter((nota) => nota.id !== id));
  };

  const renderNota = ({ item }: { item: any }) => (
    <View className="border border-gray-300 p-4 mb-2 rounded">
      <Text className="text-lg font-bold">{item.titulo}</Text>
      <Link href={{ pathname: '/calendar', params: { nota: item } }}>
        <Text className="text-blue-500">Ver/Editar</Text>
      </Link>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <Text className="text-red-500">Deletar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 p-2">
      <Link href="/createNote" className='mt-24 w-12 h-20 rounded-lg pt-6'>
        <Ionicons name="add-circle" size={40} color="black" />
      </Link>
      <FlatList
        data={notas}
        renderItem={renderNota}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default NotesScreen;