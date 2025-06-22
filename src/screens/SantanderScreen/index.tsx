import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { styles } from "../SantanderScreen/styles";
import Santanderlogo from ".../../../../TrabalhoIndividualRN/src/assets/SantanderLogo.png";


export const Santander = () => {
  return (
    <View style={styles.container}>
      <Image source={Santanderlogo} style={styles.logo} />
      <Text style={styles.title}>Estamos quase lá...</Text>

      <View style={styles.cpfContainer}>
        <Text style={styles.cpfText}>CPF:***.***.***-10</Text>
        <Text style={styles.cpfLapis}>✏️</Text>
      </View>

      <Text style={styles.senhaAcesso}>Digite a senha de acesso</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder=""
          secureTextEntry={true}
          style={styles.input}
        />
        <Text style={styles.olho}>👁️</Text>
      </View>

      <TouchableOpacity onPress={() => { console.log("Teste!!") }} style={styles.esqueceuContainer}>
        <Text style={styles.chave}>🔑</Text>
        <Text style={styles.esqueceu}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

