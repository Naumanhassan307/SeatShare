import {

  StyleSheet,
  
} from 'react-native';


const SplashStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5FA',
    // flexDirection: "column"
    // width: "100%",
  },
  top: {
    flex: 3,
    // backgroundColor: "red",
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topimg: {
    flex: 1,

  },
  topimgtxt: {
    color: '#000000',
    paddingBottom: 10,
    fontSize: 42,
  },
  topimgtxt1: {
    color: '#000000',
    paddingBottom: 50,
    fontSize: 18,
  },
  btm: {
    flex: 2,
    // backgroundColor: "green",
    width: '100%',
    alignItems: 'center',
  },
});
export default SplashStyle