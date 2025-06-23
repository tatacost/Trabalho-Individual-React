import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles";


export const ButtonBank = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity>
  )
}