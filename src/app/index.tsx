import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Link } from "expo-router";

export default function Home({ navigation }: any){


    return (
        <View className="flex-1 items-center bg-gray-100">
          <Text className="text-2xl font-bold mt-14 mb-4">Agenda</Text>
          <View className="flex flex-row items-center w-screen h-20">

            <Link href="/calendar"
                className="flex-row items-center mb-4 bg-gray-200 rounded-lg p-2 w-12 justify-center ml-14"
            >
                <Ionicons name="calendar" size={25} color="black" />
            </Link>

            <Link href="/notesScreen"
                className="flex-row items-center mb-4 bg-gray-200 rounded-lg p-2 w-10 justify-center ml-8"
            >
                <Ionicons name="document-text" size={25} color="black" />
            </Link>

            <Link href="/listScreen"
                className="flex-row items-center mb-4 bg-gray-200 rounded-lg p-2 w-10 justify-center ml-8"
            >
                <FontAwesome name="list" size={25} color="black" />
            </Link>

            <Link href="/activityScreen"
                className="flex-row items-center mb-4 bg-gray-200 rounded-lg p-2 w-12 justify-center ml-8"
            >
                <Ionicons name="checkmark-circle" size={25} color="black" />
            </Link>
      </View>

    </View>
    )
}