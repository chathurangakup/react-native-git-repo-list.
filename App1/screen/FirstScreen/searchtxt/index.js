import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles';

function SearchText(props){

    return (
      <View style={styles.searchcontainer}>
        <View style={styles.seachsubcontsaimer}>
          <View style={{ marginLeft: wp('5%') }}>
            <TextInput
              placeholder={props.searchPlaceHolder}
              onBlur={props.onBlurSearch}
              placeholderTextColor='#BDBDBD'
              style={{ borderColor: 'gray', fontSize: wp('4%'), color: 'white' }}
              onChangeText={props.onChangeSearch}
              value={props.search}
            />
          </View>
          <View style={styles.iconstyle}>
            {props.search != '' ?
              <View style={{}}>
                <Icon name="search" size={25} color={'#818181'} onPress={props.onPressClose} />
              </View>
              :
              <View>
                <Icon name="search1" size={22} color={'#FE3D40'} style={{ padding: wp('3%') }} />
              </View>
            }
          </View>

        </View>
      </View>

    );
  }

export default SearchText;