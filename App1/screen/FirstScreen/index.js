import React,{useState,useEffect} from 'react';
import {View,Text,SafeAreaView,FlatList,Image,Animated,TouchableOpacity} from 'react-native';
import NetInfo from "@react-native-community/netinfo";

import styles from './styles';
import Loading from '../../uiElements/Loading';
import ItemBox from './itemBox';
import ItemBoxHeader from './itemBoxHeader'
import SearchText from './searchtxt'



function Page1(props){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [name, setName] = useState([]);


    useEffect(()=>{
      getData('que')
      
    },[])


    getData=(name)=>{
      NetInfo.fetch().then(state => {
         console.log("Connection type", state.type);
         console.log("Is connected?", state.isConnected);
         let url='https://api.github.com/search/repositories?q='+name+'&per_page=100&page=1' 
         if(state.isConnected==true){
               fetch(url)
               .then((response) => response.json())
               .then((json) =>{
                  console.log(json.items)
                    setData(json.items)
                }  
               )
               .catch((error) => console.error(error))
               .finally(() => setLoading(false));

              
         }else{
            alert('No internet')
            setLoading(false)
         }

       });

    }

    searchName=(text)=>{
      getData(text)
    }




    return(
     <SafeAreaView style={styles.container}>
      
          {isLoading?  <Loading navigation={props.navigation} animating={true} />:null}
             <SearchText 
                searchPlaceHolder="Search here"
                onChangeSearch={(text)=>searchName(text)}
             />
              
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    ListHeaderComponent={()=>
                      <ItemBoxHeader/>
                  }
                    renderItem={({ item }) => (
                        <ItemBox 
                           url={item.owner.avatar_url}
                           reponame={item.name}
                           ownername={item.owner.login}
                        />
                    )}
                    ItemSeparatorComponent={()=>{
                      return <View style={styles.separator}></View>
                    }}
                    />
     
     </SafeAreaView>
    )

}

export default Page1


