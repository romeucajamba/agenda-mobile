import { View, Text } from "react-native"

export  default function ActivitiesScreen(){
    return(
        <View className="flex-1 justify-center items-center bg-gray-100">
        <Text className="text-2xl font-bold">Atividades</Text>
        {/* Aqui você pode adicionar a lógica para criar, deletar, atualizar e visualizar atividades */}
      </View>
    )
}