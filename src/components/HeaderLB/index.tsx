import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { SearchInput } from "../../components/SearchInput";


export const HeaderLB = () => {
  return (

    <>
      <View style={styles.Header}>
        <Text style={styles.title}>Popular</Text>
        <TouchableOpacity style={styles.butonBusca} >
          <Text style={styles.lupa}>🔎</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menus}>
        <Text style={styles.text}>FILMS</Text>
        <Text style={styles.text}>REVIEWS</Text>
        <Text style={styles.text}>LISTS</Text>
        <Text style={styles.text}>JOURNAL</Text>
      </View >

      {/* <SearchInput /> */}
    </>
  )
};
