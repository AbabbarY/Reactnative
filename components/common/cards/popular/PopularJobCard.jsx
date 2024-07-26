import React from 'react'
import { View, Text ,Image} from 'react-native'

import styles from './popularjobcard.style'
import { TouchableOpacity } from 'react-native'

const PopularJobCard = (item ,SelectedJob , handleCardPress) => {
  return (
    
    <TouchableOpacity style={styles.container(SelectedJob,item)} onPress={() => handleCardPress(item) }>

        <TouchableOpacity style={styles.logoContainer(SelectedJob,item)}>
            <Image source={ {uri : item.employer_logo} } resizeMode="contain" style={styles.logoImage} />
        </TouchableOpacity>
        
    </TouchableOpacity>
  )
}

export default PopularJobCard