import { StyleSheet } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({

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
  butonBusca: {
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
    marginHorizontal: 8,
  },
});