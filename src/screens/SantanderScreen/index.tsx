import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Button } from "react-native";
import { styles } from "../SantanderScreen/styles";
import Santanderlogo from "../../assets/SantanderLogo.png";
import { ButtonBank } from "../../components/Button";


export const Santander = () => {
  const [senhaVisivel, setSenhaVisivel] = useState(false);

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
          placeholder="Senha"
          secureTextEntry={!senhaVisivel}
          style={styles.input}
        />
        <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)} >
          <Text style={styles.olho}>{senhaVisivel ? "🙈" : "👁️"}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => { console.log("Teste!!") }} style={styles.esqueceuContainer}>
        <Text style={styles.chave}>🔑</Text>
        <Text style={styles.esqueceu}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <ButtonBank />
    </View>
  );
}

