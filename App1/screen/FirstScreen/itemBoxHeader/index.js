import React from 'react'
import { View,Text,Dimensions,Image,TouchableOpacity,Animated } from 'react-native';

import styles from './styles';


const ItemBoxHeader=(props)=>{
   
   

    return(
      <View style={{flexDirection:'row'}}>
      <View style={{flex:2}}>
         <Text style={{color:'black',fontWeight:'bold'}}>Owner Avatar</Text>
      </View>
      <View style={{flex:2}}>
         <Text style={{color:'black',fontWeight:'bold'}}>Repo Name</Text>
      </View>
      <View style={{flex:2}}>
         <Text style={{color:'black',fontWeight:'bold'}}>Owner Name</Text>
      </View>
 </View>
    )
}

export default ItemBoxHeader;
