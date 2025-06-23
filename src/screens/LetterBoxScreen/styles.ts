import { StyleSheet } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B3A4A',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  card: {
    width: '33.2%',//Teste de espaçamento
    aspectRatio: 2 / 3,//largura altura
    borderRadius: 8,
    marginBottom: 8,
    overflow: 'hidden',
    backgroundColor: '#444',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

});



