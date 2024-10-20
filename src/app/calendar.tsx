import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const DAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState<{ key: string, isToday: boolean, isWeekend: boolean }[]>([]);
  
  const feriados = [
    new Date(currentDate.getFullYear(), 0, 1), 
    new Date(currentDate.getFullYear(), 4, 1),
    new Date(currentDate.getFullYear(), 11, 25), 
  ];

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const days = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const daysArray = Array.from({ length: days + firstDay }, (_, index) => {
      if (index < firstDay) {
        return { key: '', isToday: false, isWeekend: false };
      }

      const day = index - firstDay + 1;
      const date = new Date(year, month, day);
      const isToday = date.toDateString() === new Date().toDateString();
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      const isHoliday = feriados.some(feriado => feriado.toDateString() === date.toDateString());

      return {
        key: day.toString(),
        isToday,
        isWeekend,
        isHoliday
      };
    });

    setDaysInMonth(daysArray);
  }, [currentDate]);

  const renderItem = ({ item }: { item: { key: string, isToday: boolean, isWeekend: boolean, isHoliday: boolean } }) => (
    <View
      className={`flex-1 items-center justify-center p-2 border border-gray-300 ${item.isToday ? 'bg-green-400' : item.isWeekend ? 'bg-purple-300' : item.isHoliday ? 'bg-yellow-300' : 'bg-gray-100'}`}
    >
      <Text className={`text-lg ${item.isToday ? 'font-bold' : ''}`}>{item.key || ''}</Text>
    </View>
  );

  const changeMonth = (increment: number) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + increment);
      return newDate;
    });
  };

  return (
    <View className="flex-1 bg-gray-200 p-4">
      <View className="flex-row justify-between mb-5">
        <TouchableOpacity onPress={() => changeMonth(-1)}>
          <Text className="text-lg">{"<"}</Text>
        </TouchableOpacity>
        <Text className="text-2xl">
          {currentDate.toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}
        </Text>
        <TouchableOpacity onPress={() => changeMonth(1)}>
          <Text className="text-lg">{">"}</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row mb-2">
        {DAYS.map((day) => (
          <View key={day} className="flex-1 items-center">
            <Text className="font-bold">{day}</Text>
          </View>
        ))}
      </View>
      <FlatList
        data={daysInMonth}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={7}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Calendar;
