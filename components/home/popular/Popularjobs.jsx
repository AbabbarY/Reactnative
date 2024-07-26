import React, { useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'


import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import { TouchableOpacity,ActivityIndicator } from 'react-native'
import { COLORS, SIZES } from '../../../constants'
import PopularjobCard from "../../common/cards/popular/PopularJobCard"
import useFetch from "../../../Hook/useFetch"

const Popularjobs = () => {
  const router = useRouter();

  const {data,isLoading,error} = useFetch('search',{
        query: 'React Developer',
        num_pages : 1

  })

  console.log(data);
 

  return (
    <View style={styles.container}>

       <View style={styles.header}>
                <Text style={styles.headerTitle}>Popular Jobs</Text>
                      <TouchableOpacity>
                         <Text>Show all</Text>
                      </TouchableOpacity>

        </View>

        <View style={styles.cardsContainer}>
            {isLoading ? (
                <ActivityIndicator size="large" colors={COLORS.primary} ></ActivityIndicator>
            ):error ? (
                <Text>Something is wrong</Text>
            ): (
              <FlatList 
                data={[1,2,3,4,5,6]}
                renderItem={( {item} ) => (
                    <PopularjobCard />
                )}
                keyExtractor={ item => item?.Job_id }
                contentContainerStyle={ {columnGap:SIZES.small} }
                horizontal
              />
                  
                
            )
          }
        </View>

    </View>
  )
}

export default Popularjobs