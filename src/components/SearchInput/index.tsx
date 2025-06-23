import React from "react";
import { View, TextInput } from "react-native";
import { styles } from "./styles";


export const SearchInput = () => {
  return (
    <>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#aaa"
        />
      </View>
    </>
  )
}