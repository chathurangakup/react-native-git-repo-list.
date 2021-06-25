import {
  StyleSheet,
  Platform
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconstyle: {
    marginRight: wp('4%'),

    marginTop: Platform.OS === 'android' ? wp('1%') : wp('0%')
  },
  searchcontainer: {
    justifyContent: 'center',
    margin: Platform.OS === 'android' ? hp('0%') : hp('1%'),
    padding: Platform.OS === 'android' ? hp('0%') : hp('1%'),
    marginTop: wp('8%'),
    borderRadius: 5,
    backgroundColor: '#2f2f40',
    width: Platform.OS === 'android' ? wp('95%') : wp('95%'),
    alignSelf: 'center'
  },
  seachsubcontsaimer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'android' ? hp('0%') : hp('1%')
  }


});
