import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../Components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  addToCart,
  decrementQuantity,
  removeFromCart,
} from '../Redux/CartReducer';
import {addCustomer} from '../Redux/CustomerReducer';

const Cart = ({navigation}: any) => {
  const cart = useSelector((state: any) => state.cart.cart);
  const customers = useSelector((state: any) => state.customer.customer);
  const [Counter, setCounter] = useState(0);
  const [isVisible, setisVisible] = useState(false);
  const [UserAddress, setUserAddress] = useState({
    name: '',
    phone: '',
    pincode: '',
    locality: '',
    address: '',
    city: '',
    landmark: '',
  });
  const [visibility, setVisibility] = useState({
    home: false,
    office: false,
    other: false,
  });

  // redux
  const Dispatch = useDispatch();

  const addItemToCart = (item: any) => {
    Dispatch(addToCart(item));
  };
  const decrementItemFromCart = (item: any) => {
    Dispatch(decrementQuantity(item));
  };
  const removeItemFromCart = (item: any) => {
    Dispatch(removeFromCart(item));
  };

  // for adding customer
  const handleAddCustomer = () => {
    Dispatch(addCustomer(UserAddress));
    setisVisible(false);
    setUserAddress({
      name: '',
      phone: '',
      pincode: '',
      locality: '',
      address: '',
      city: '',
      landmark: '',
    });
  };

  useEffect(() => {
    setCounter(cart.length);
  }, [cart]);

  const handleVisibility = (option:any) => {
    setVisibility({
      home: option === 'home',
      office: option === 'office',
      other: option === 'other',
    });
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total: number, item: any) => total + item.price * item.quantity, 0);
  };

  return (
    <View>
      <Header navigation={navigation} />
      <View style={styles.Heading}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={30} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 10, justifyContent: 'center'}}>
          <Text style={{fontSize: 23}}>
            My Bag{' '}
            <Text style={{color: 'grey', lineHeight: 20, fontSize: 14}}>
              ({Counter}) items
            </Text>
          </Text>
        </View>
      </View>
      <View>
        <ScrollView style={{height: '70%'}}>
          {cart.map((item: any, index: number) => (
            <View key={index} style={styles.CardView}>
              <Image source={item.image} style={{width: 100, height: 150}} />
              <View style={styles.CardViewContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={{fontSize: 19}}>{item.title}</Text>
                    <Text style={{color: 'grey', fontSize: 14, lineHeight: 15}}>
                      by {item.author}
                    </Text>
                    <Text
                      style={{
                        lineHeight: 30,
                        fontSize: 19,
                        fontWeight: 'bold',
                      }}>
                      Rs. {item.price}
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <View style={{flexDirection: 'row', marginRight: 10}}>
                    <TouchableOpacity
                      style={styles.CardFunctionBtn}
                      onPress={() => decrementItemFromCart(item)}>
                      <Icon name="remove" size={20} color="#A03037" />
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 20,
                        marginHorizontal: 10,
                        marginTop: 2,
                      }}>
                      {item.quantity}
                    </Text>
                    <TouchableOpacity
                      style={styles.CardFunctionBtn2}
                      onPress={() => addItemToCart(item)}>
                      <Icon name="add" size={20} color="#fff" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View>
                <TouchableOpacity onPress={() => removeItemFromCart(item)}>
                  <Icon name="delete" size={30} color="#A03037" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
          <View style={styles.CustomerDetails}>
            <TouchableOpacity
              style={styles.CustomerBtn}
              onPress={() => setisVisible(true)}>
              <Text style={{fontSize: 18, fontWeight: '600'}}>
                Customer Details
              </Text>
              <Icon name="add" size={28} color="#000" />
            </TouchableOpacity>
          </View>
          <View>
            {customers.map((item: any)=>(
              <View key={customers.id} style={[styles.CustomerDetails , {padding:10,marginTop:-20}]}>
                <Text style={styles.customerText}>{item.name}</Text>
                <Text style={styles.customerText}>{item.phone}</Text>
                <Text style={styles.customerText}>{item.visibility}</Text>
                <Text style={styles.customerText}>{item.address}</Text>
                <Text style={styles.customerText}>{item.locality}, {item.city}-{item.pincode}</Text>
              </View>
            ))
            }
          </View>
        </ScrollView>
        <View style={styles.Footer}>
            <View style={styles.FooterLeft}>
              <Text style={{fontSize:17,color:'#707070'}}>Total</Text>
              <Text style={{fontSize:23,color:'#9D2F36'}}>Rs. {calculateTotalPrice()}</Text>
            </View>
            <View style={styles.FooterRight}>
              <TouchableOpacity style={styles.PlaceBtn} onPress={()=> navigation.navigate('Thankyou')}>
                <Text style={{fontSize:20,color:'#FFFFFF'}}>PLACE ORDER</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>

      <Modal
        visible={isVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setisVisible(false)}>
        <View style={styles.ModalOverlay}>
          <View style={{alignItems: 'center', marginBottom: 10}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#A03037',
                borderRadius: 50,
                borderWidth: 2,
                borderColor: '#fff',
              }}
              onPress={() => setisVisible(false)}>
              <Icon name="close" size={28} color={'#fff'} />
            </TouchableOpacity>
          </View>
          <View style={styles.ModalContainer}>
            <Text style={{fontSize: 22, color: '#9D9D9D', fontWeight: 500}}>
              Customer Details
            </Text>
            <ScrollView>
              <TextInput
                style={styles.CustomerInput}
                placeholder="Name"
                placeholderTextColor={'#707070'}
                value={UserAddress.name}
                onChangeText={(text) =>
                  setUserAddress((prevState) => ({ ...prevState, name: text }))}
              />
              <TextInput
                style={styles.CustomerInput}
                placeholder="Phone Number"
                placeholderTextColor={'#707070'}
                value={UserAddress.phone}
                onChangeText={(text) =>
                  setUserAddress((prevState) => ({ ...prevState, phone: text }))}
              />
              <TextInput
                style={styles.CustomerInput}
                placeholder="Pincode"
                placeholderTextColor={'#707070'}
                value={UserAddress.pincode}
                onChangeText={(text) =>
                  setUserAddress((prevState) => ({ ...prevState, pincode: text }))}
              />
              <TextInput
                style={styles.CustomerInput}
                placeholder="Locality"
                placeholderTextColor={'#707070'}
                value={UserAddress.locality}
                onChangeText={(text) =>
                  setUserAddress((prevState) => ({ ...prevState, locality: text }))}
              />
              <TextInput
                style={[styles.CustomerInput]}
                placeholder="Address"
                placeholderTextColor={'#707070'}
                multiline={true}
                numberOfLines={4}
                value={UserAddress.address}
                onChangeText={(text) =>
                  setUserAddress((prevState) => ({ ...prevState, address: text }))}
              />
              <TextInput
                style={styles.CustomerInput}
                placeholder="City/Town"
                placeholderTextColor={'#707070'}
                value={UserAddress.city}
                onChangeText={(text) =>
                  setUserAddress((prevState) => ({ ...prevState, city: text }))}
              />
              <TextInput
                style={styles.CustomerInput}
                placeholder="Landmark"
                placeholderTextColor={'#707070'}
                value={UserAddress.landmark}
                onChangeText={(text) =>
                  setUserAddress((prevState) => ({ ...prevState, landmark: text }))}
              />
              <Text
                style={{
                  fontSize: 19,
                  lineHeight: 20,
                  color: '#9D9D9D',
                  marginTop: 20,
                }}>
                Type
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 20,
                }}>
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={() => handleVisibility('home')}>
                  {visibility.home ? (
                    <Icon
                      name="radio-button-checked"
                      size={20}
                      color={'#000'}
                    />
                  ) : (
                    <Icon
                      name="radio-button-unchecked"
                      size={20}
                      color={'#000'}
                    />
                  )}
                  <View style={{justifyContent: 'center', marginLeft: 5}}>
                    <Text>Home</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={() => handleVisibility('office')}>
                  {visibility.office ? (
                    <Icon
                      name="radio-button-checked"
                      size={20}
                      color={'#000'}
                    />
                  ) : (
                    <Icon
                      name="radio-button-unchecked"
                      size={20}
                      color={'#000'}
                    />
                  )}
                  <View style={{justifyContent: 'center', marginLeft: 5}}>
                    <Text>Office</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={() => handleVisibility('other')}>
                  {visibility.other ? (
                    <Icon
                      name="radio-button-checked"
                      size={20}
                      color={'#000'}
                    />
                  ) : (
                    <Icon
                      name="radio-button-unchecked"
                      size={20}
                      color={'#000'}
                    />
                  )}
                  <View style={{justifyContent: 'center', marginLeft: 5}}>
                    <Text>Other</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.AddBtn}
                onPress={() => handleAddCustomer()}>
                <Text style={{fontSize: 20, color: '#fff'}}>ADD</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  Heading: {
    marginTop: 10,
    padding: 10,
    flexDirection: 'row',
  },
  CardView: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CardViewContent: {
    marginLeft: 10,
    marginTop: 10,
    padding: 5,
  },
  CardFunctionBtn: {
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: '#A03037',
    marginRight: 7,
  },
  CardFunctionBtn2: {
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: '#A03037',
    backgroundColor: '#A03037',
    marginLeft: 7,
  },
  CustomerDetails: {
    marginTop: 30,
    borderWidth: 20,
    borderRadius: 3,
    borderColor: 'lightgrey',
  },
  CustomerBtn: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  // Modal
  ModalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  ModalContainer: {
    height: '70%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  CustomerInput: {
    marginTop: 20,
    // height: 45,
    lineHeight:22,
    borderWidth: 1,
    borderColor: '#707070',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  AddBtn: {
    width: '100%',
    height: 45,
    backgroundColor: '#EEB7BA',
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customerText: {
    fontSize:18,
    lineHeight:20,
    color:'grey',
  },
  Footer: {
    height:91,
    flexDirection:'row',
    elevation: 1,
    borderTopWidth:0.1,
    borderColor:'#00000029'
  },
  FooterLeft: {
    width:'50%',
    padding:20,
    justifyContent:'center',
    flex:1
  },
  FooterRight: {
    width:'50%',
    padding:20,
    justifyContent:'center',
    flex:1,
    borderLeftWidth:2,
    borderColor:'#707070',
    marginVertical:20
  },
  PlaceBtn: {
    width: '93%',
    height:45,
    backgroundColor:'#A03037',
    alignItems:'center',
    justifyContent:'center',
  }
  
});
