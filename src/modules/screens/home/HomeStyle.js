import {StyleSheet} from 'react-native';

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5FA',
    width: '100%',
  },
  top: {
    // backgroundColor: '#F23459',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
  },
  top1: {
    // backgroundColor: '#F20009',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  top1div: {
    borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 55,
    borderColor: '#57419D',
    shadowColor: '#57419D',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,

    
    
  },
  top1divimg: {
    borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 55,
    

    
    
  },

  top2: {
    // backgroundColor: '#F66009',
    flex: 6,
  },
  top2txt: {
    marginTop: 10,
    flexDirection: 'row',
  },
  top2txtname: {
    marginTop: 10,
    fontSize: 18,
    marginLeft: 10,
  },
  top2txt1: {
    fontSize: 18,
  },
  top3: {
    // backgroundColor: '#F009',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mdl: {
    backgroundColor: '#FAAA00',
    width: '100%',
    flex: 6,
  },
  btm: {
    backgroundColor: '#FAA990',
    width: '100%',
    flex: 1,
  },
});
export default HomeStyle;

