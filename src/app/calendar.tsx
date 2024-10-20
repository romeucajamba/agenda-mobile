import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export function Calendar({ navigation }: any){

    function goHome(){
        navigation.navigate('Home');
    }

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [events, setEvents] = useState<{ key: string }[]>([]);

    const onChange = (event: any, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        // Adiciona um evento simples
        setEvents((prevEvents) => [
          ...prevEvents,
          { key: currentDate.toDateString() },
        ]);
      };
    
      const showDatepicker = () => {
        setShow(true);
      };
    
    
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Calendário</Text>
        <Button onPress={showDatepicker} title="Selecionar Data" />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <Text style={styles.selectedDate}>
          Data Selecionada: {date.toLocaleDateString()}
        </Text>
        <FlatList
          data={events}
          renderItem={({ item }) => (
            <Text style={styles.eventItem}>{item.key}</Text>
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      padding: 16,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    selectedDate: {
      marginVertical: 20,
      fontSize: 18,
    },
    eventItem: {
      padding: 10,
      fontSize: 16,
      backgroundColor: '#e0e0e0',
      marginVertical: 5,
      borderRadius: 5,
    },
  });