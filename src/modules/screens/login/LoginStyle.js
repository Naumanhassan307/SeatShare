import {

  StyleSheet,
  
} from 'react-native';


const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',

    
  },
  loginMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    // height: "60%",
    // backgroundColor: '#FFF000',
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 50,
  },
  loginMain1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    // backgroundColor: '#FF0022',
    paddingHorizontal: 2,
    marginHorizontal: 10,
  },
  loginMain2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    // backgroundColor: '#F20022',
    paddingHorizontal: 1,
    marginHorizontal: 10,
  },
  t1inp: {
    borderWidth: 1,
    borderRadius: 40,
    borderColor: '#00A4EF',
    marginTop: '5%',
    width: '45%',
    fontSize: 18,
    paddingLeft: 10,
    marginHorizontal: 10,
  },
  t1inp1: {
    borderWidth: 1,
    borderRadius: 40,
    paddingLeft: 10,
    borderColor: '#00A4EF',
    marginTop: '5%',
    width: '80%',
    fontSize: 18,
    marginHorizontal: 10,
  },
  loginbtn: {
    borderWidth: 1,
    borderColor: '#00A4EF',
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginVertical: 5,
  },
});
export default LoginStyle