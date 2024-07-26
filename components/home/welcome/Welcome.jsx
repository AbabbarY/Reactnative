import { View, Text,TextInput, TouchableOpacity,Image,FlatList } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { COLORS, SIZES ,icons} from '../../../constants'

const jobtypes = ["Full-time","Part-time","contractor"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType,setActiveJobsType] = useState("Full-time");

  return (
    <View >
      <View style={styles.container}>
            <Text style={styles.userName}> Hello Adrian</Text>
            <Text style={styles.welcomeMessage}> Find your job</Text>
      </View>
      
      <View style={styles.searchContainer}>

         <View style={styles.searchWrapper}>
              <TextInput style={styles.searchInput}  value='' placeholder='Get your job now' onChange={() => {} }/>
         </View>

             <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
                <Image source={icons.search} resizeMode="contain" style={styles.searchBtnImage} />
            </TouchableOpacity>
        </View>
          
          <View style={styles.tabsContainer}>
                <FlatList data={jobtypes} renderItem={ ({item}) => (
                  <TouchableOpacity
                      style={styles.tab(activeJobType,item)} 
                       onPress={() => {
                        setActiveJobsType(item),
                        router.push(`/search/${item}`)
                        }}>
                      
                      <Text style={styles.tabText(activeJobType,item)} >{item}</Text>
                  
                  </TouchableOpacity>
                  
                  
                  
                ) } 
                keyExtractor={item => item} contentContainerStyle={{ columnGap:SIZES.small }} horizontal
                />
          </View>


    </View>

    
  )
}

export default Welcome