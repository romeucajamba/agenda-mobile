import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function Home({ navigation }: any){
    function goCalendar(){
        navigation.navigate('Calendar')
    }

    function goActivities(){
        navigation.navigate('Activities')
    }

    function goNotes(){
        navigation.navigate('Notes')
    }
    function goList(){
        navigation.navigate('Lists')
    }

    return (
        <View className="flex-1 justify-center items-center bg-gray-100">
            <Text className="text-2xl font-bold mb-8">Agenda</Text>
            <View className="flex flex-row items-center justify-center w-screen h-14 bg-red-700">

            <TouchableOpacity
                className="flex-row items-center mb-4 bg-gray-200 rounded-lg p-4 w-4/5 justify-center"
                onPress={goCalendar}
            >
                <Ionicons name="calendar" size={32} color="black" />
                <Text className="ml-2 text-lg">Calendário</Text>
            </TouchableOpacity>

            <TouchableOpacity
                className="flex-row items-center mb-4 bg-gray-200 rounded-lg p-4 w-4/5 justify-center"
                onPress={goNotes}
            >
                <Ionicons name="md-document-text" size={32} color="black" />
                <Text className="ml-2 text-lg">Notas</Text>
            </TouchableOpacity>

            <TouchableOpacity
                className="flex-row items-center mb-4 bg-gray-200 rounded-lg p-4 w-4/5 justify-center"
                onPress={goList}
            >
                <FontAwesome name="list" size={32} color="black" />
                <Text className="ml-2 text-lg">Listas</Text>
            </TouchableOpacity>

            <TouchableOpacity
                className="flex-row items-center mb-4 bg-gray-200 rounded-lg p-4 w-4/5 justify-center"
                onPress={goActivities}
            >
                <Ionicons name="md-checkmark-circle" size={32} color="black" />
                <Text className="ml-2 text-lg">Atividades</Text>
            </TouchableOpacity>
      </View>

    </View>
    )
}