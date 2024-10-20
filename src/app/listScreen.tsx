import * as Listas from '../db/list'; 
import { abrirBancoDeDados } from '../db/database'; 
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native'; 
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ListScreen(){
  const [listas, setListas] = useState<any[]>([]);

  useEffect(() => {
    const fetchListas = async () => {
      const db = await abrirBancoDeDados();
      const listasData = await Listas.buscarItensLista(db);
      setListas(listasData);
    };

    fetchListas();
  }, []);

  const handleDelete = async (id: number) => {
    const db = await abrirBancoDeDados();
    await Listas.deletarItemLista(db, id);
    setListas(listas.filter((lista) => lista.id !== id));
  };

  const renderLista = ({ item }: { item: any }) => (
    <View className="border border-gray-300 p-4 mb-2 rounded">
      <Text className="text-lg font-bold">{item.item}</Text>
      <Link href={{ pathname: '/calendar', params: { nota: item } }}>
        <Text className="text-blue-500">{item.categoria}</Text>
      </Link>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <Ionicons name="remove" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 p-2">
      <Link href="/createList" className='mt-24 w-12 h-20 rounded-lg pt-6'>
        <Ionicons name="add-circle" size={40} color="black" />
      </Link>
      <FlatList
        data={listas}
        renderItem={renderLista}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}