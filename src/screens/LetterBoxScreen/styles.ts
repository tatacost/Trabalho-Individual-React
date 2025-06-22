import { StyleSheet } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B3A4A',
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#2B3A4A',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  butonnBusca: {
    padding: 8,
    borderRadius: 20,
  },
  lupa: {
    color: '#fff',
    fontSize: 22,
  },
  menus: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#3D4E60',
    backgroundColor: '#2B3A4A',
  },
  text: {
    color: '#fff',
    fontSize: 15,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'flex-start',
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  card: {
    width: '33.2%',//Teste de espaçamento
    aspectRatio: 2 / 3,
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
  //teste
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#2B3A4A',
  },
  searchInput: {
    height: 40,
    borderColor: '#3D4E60',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    color: '#fff',
    backgroundColor: '#2B3A4A',
  },

});



