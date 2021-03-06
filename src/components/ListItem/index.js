import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { View, Text } from 'react-native';
import { ContainerButton, Item, ActionContainer } from './styles';
import { Feather } from '@expo/vector-icons';

export default function ListItem({ data, selectedItem, deleteItem }) {

  function RightActions(){
    return(
      <ActionContainer onPress={ () => deleteItem(data.id) }>
        <Feather
          name="trash"
          color="#FFF"
          size={24}
        />
      </ActionContainer>
    )
  }

 return (
   <View>
    <Swipeable renderRightActions={RightActions}>
        <ContainerButton activityOpacity={0.9} onPress={ () => selectedItem(data) }>
          <Feather
            name="link"
            color='#FFF'
            size={24}
          />
          <Item numberOfLines={1}>{data.long_url}</Item>
        </ContainerButton>
      </Swipeable>
   </View>
  );
}