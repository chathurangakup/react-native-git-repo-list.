import React from 'react'
import { View,Text,Dimensions,Image,TouchableOpacity,Animated } from 'react-native';

import styles from './styles';


const ItemBox=(props)=>{
   
   

    return(
        <TouchableOpacity>
                  <View style={styles.container}>
                              <View style={styles.imagecontainerstyle}>
                                     <Image
                                            style={{width:50,height:50}}
                                            source={{
                                              uri: props.url,
                                            }}
                                       />
                                </View>
                                 <View style={{flex:2,padding:10}}>
                                              <Text >{props.reponame}</Text>
                                 </View>
                                 <View style={{flex:2,padding:10}}>
                                              <Text >{props.ownername}</Text>
                                 </View> 
                  </View>
       </TouchableOpacity>
    )
}

export default ItemBox;
