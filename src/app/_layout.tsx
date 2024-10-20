import "../styles/global.css";
import {Slot} from "expo-router";
import { StatusBar } from "expo-status-bar";
import  Loaded  from "../components/loaded";

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function Layout() {
    const [ fonstLoaded ] = useFonts({
        Roboto_400Regular, 
        Roboto_500Medium, 
        Roboto_700Bold
    });

    return (
        <>
        <StatusBar style="auto"/>
            { fonstLoaded ? <Slot/> : <Loaded/>}
        </>
    )
}
