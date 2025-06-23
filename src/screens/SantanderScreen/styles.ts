import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    paddingTop: 60,

  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: "contain",
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    color: '#ff0000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  cpfContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  cpfText: {
    fontSize: 16,
  },
  cpfLapis: {
    fontSize: 16,
    marginLeft: 5,
  },
  senhaAcesso: {
    fontSize: 16,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
  },
  olho: {
    fontSize: 20,
    marginLeft: 10,
  },
  esqueceuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  chave: {
    fontSize: 16,
    marginRight: 5,
  },
  esqueceu: {
    fontSize: 16,
    color: '#007bff',
    textDecorationLine: 'underline',
  },

});