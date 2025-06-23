import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { SearchInput } from "../../components/SearchInput";


export const HeaderLB = () => {
  return (

    <>
      <View style={styles.Header}>
        <TouchableOpacity style={styles.menuIcon} >
          <Text style={styles.iconText}>☰</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Popular</Text>

        <TouchableOpacity style={styles.butonBusca} >
          <Text style={styles.lupa}>🔎</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.menus}>
        <TouchableOpacity>
          <Text style={styles.text}>FILMS</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>REVIEWS</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>LISTS</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>JOURNAL</Text>
        </TouchableOpacity>
      </View>


    </>
  )
};
