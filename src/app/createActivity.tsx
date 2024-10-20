import React, { useEffect, useState } from 'react';
import { View, Button, TextInput } from 'react-native';
import * as Actividades from '../db/activity'; 
import { abrirBancoDeDados } from '../db/database'; 

const ActividadesCreated: React.FC = () => {
  const [actividade, setActividade] = useState<any[]>([]);
  const [descricao, setDescricao] = useState('');
   const [status, setStatus] = useState('')
   const [ data_criacao, setData_criacao ] = useState('')

  useEffect(() => {
    const fetchActivity = async () => {
      const db = await abrirBancoDeDados();
      const activityData = await Actividades.buscarAtividades(db);
      setActividade(activityData);
    };

    fetchActivity();
  }, []);

  const handleSave = async () => {
    if (!descricao || !status) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const db = await abrirBancoDeDados();
    await Actividades.inserirAtividade(db, descricao, status, data_criacao); 
    setDescricao('');
    setData_criacao('');
    setStatus(); 
  };

  return (
    <View className="flex-1 p-4">
      <View style={{ marginBottom: 20 }}>
        <TextInput
          style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 10, marginTop: 70 }}
          placeholder="Descrição"
          value={descricao}
          onChangeText={setDescricao}
        />
        <TextInput
          style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 10 }}
          placeholder="Status"
          value={status}
          onChangeText={setStatus}
          multiline
          numberOfLines={5}
        />
                        
        <TextInput
          style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 10 }}
          placeholder="Data"
          value={data_criacao}
          onChangeText={setData_criacao}
          multiline
          numberOfLines={5}
        />
        <Button title="Salvar" onPress={handleSave} />
      </View>
    </View>
  );
};
export default ActividadesCreated;