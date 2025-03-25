import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../Components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import Card from '../Components/Card';

const WishList = ({navigation}: any) => {
  const wishlist = useSelector((state: any) => state.wishlist.wishlist);
  const [Counter, setCounter] = useState(0);

  useEffect(()=>{
    setCounter(wishlist.length)
  },[wishlist])
  return (
    <View>
      <Header navigation={navigation} />
      <View style={styles.Heading}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
        <View style={{justifyContent: 'center', marginLeft: 10}}>
          <Text style={{fontSize: 23}}>
            WishList{' '}
            <Text style={{fontSize: 15, color: 'grey'}}>({Counter}) items</Text>
          </Text>
        </View>
      </View>
        <View>
          <ScrollView >
            <View style={styles.CardView}>
            {wishlist.map((item: any, index: number) => (
              <View key={index}>
                <Card data={item} />
              </View>
            ))}
            </View>
          </ScrollView>
        </View>
    </View>
  );
};

export default WishList;

const styles = StyleSheet.create({
  Heading: {
    flexDirection: 'row',
    padding: 10,
  },
  CardView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  }
});
