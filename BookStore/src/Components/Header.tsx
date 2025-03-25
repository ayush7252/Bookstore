import {StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';

const Header = ({navigation, onSearchDataChange}: any) => {
  const cart = useSelector((state: any) => state.cart.cart);
  const [isSearchVisible, setisSearchVisible] = useState(false);
  const [Data, setData] = useState('')


  const handleTextChange = (text: string) => {
    setData(text);
    onSearchDataChange(text);  
  };

  return (
    <View style={styles.Header}>
      {isSearchVisible ? (
        <View style={{flexDirection:'row',padding:10}}>
          <View style={{justifyContent:'center',padding:5}}>
            <Icon name='arrow-back' size={25} color='black' onPress={() => setisSearchVisible(false)} />
          </View>
          <TextInput
          style={styles.SearchInput}
          placeholder="Search..."
          placeholderTextColor='grey'
          value={Data}
          onChangeText={handleTextChange}
        />
        </View>
      ) : (
        <>
          <Image
            source={require('../assets/Images/Logo.png')}
            style={styles.Image}
          />
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => setisSearchVisible(true)}>
              <Icon
                name="search"
                size={27}
                color="#A03037"
                style={styles.RightImage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WishList')}>
              <Icon
                name="favorite-outline"
                size={27}
                color="#A03037"
                style={styles.RightImage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Icon
                name="shopping-cart"
                size={27}
                color="#A03037"
                style={styles.RightImage}
              />
              <View>
                {cart.length > 0 && (
                  <View
                    style={{
                      position: 'absolute',
                      backgroundColor: '#A03037',
                      borderRadius: 50,
                      width: 16,
                      height: 16,
                      alignItems: 'center',
                      justifyContent: 'center',
                      top: -35,
                      right: 10,
                    }}
                  >
                    <Text style={{ color: '#fff', marginBottom: 2 }}>
                      {cart.length}
                    </Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    height: 60,
    marginTop: 30,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 5,
  },
  Image: {
    width: 170,
    height: 40,
  },
  RightImage: {
    marginRight: 18,
  },
  SearchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#A03037',
    borderRadius: 20,
    paddingLeft: 15,
    fontSize: 16,
    color:'grey',
  }
});
