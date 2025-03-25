import {Image, StyleSheet, Text, TouchableOpacity, View, Modal} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../Redux/CartReducer';
import { addToWishlist, removeFromWishlist } from '../Redux/WishlistReducer';

const Card = ({data}: any) => {
  const {title, author, price, image, actualPrice} = data;
    const [isVisible, setisVisible] = useState(false);

    // redux for cart
    const cart = useSelector((state: any) => state.cart.cart);
      console.warn(cart);
      const Dispatch = useDispatch();

      const addItemToCart = (item: any) => {
        Dispatch(addToCart(item));
      };

    // redux for wishlist
    const wishlist = useSelector((state: any) => state.wishlist.wishlist);
    const dispatch = useDispatch();
    const addItemToWishlist = (item: any) => {
      dispatch(addToWishlist(item));
    }
    const removeItemFromWishlist = (item: any) => {
      dispatch(removeFromWishlist(item))
    }



  return (
    <View>
      <TouchableOpacity style={styles.Container} onPress={() => setisVisible(true)}>
      <View style={styles.TopArea}>
        <Image source={image} style={styles.Image} />
      </View>
      <View style={styles.BottomArea}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.Author}>by {author}</Text>
        <Text style={styles.Price}>Rs. {price} {' '}<Text style={{fontSize:15,fontWeight:'500', textDecorationLine: 'line-through', textDecorationColor:'lightgrey',color:'grey'}}>{actualPrice}</Text></Text>
      </View>
      <View>
        {cart.some((item: any) => item.id == data.id) ? (
          <View style={styles.Footer}>
            <TouchableOpacity style={styles.AddedToCart}>
              <Text style={{color: '#A03037', alignSelf: 'center', fontSize: 13}}>
                ADDED TO BAG
              </Text>
            </TouchableOpacity>
          </View>
        ):(
          <View style={styles.Footer}>
            {wishlist.some((item: any) => item.id == data.id) ? (
              <TouchableOpacity style={styles.Favourites} onPress={() => (removeItemFromWishlist(data))}>
                <Icon name="favorite" size={20} color="#A03037" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.Favourites} onPress={() => (addItemToWishlist(data))}>
                <Icon name="favorite-outline" size={20} color="#A03037" />
              </TouchableOpacity>
            )}

            <TouchableOpacity style={styles.AddToCart} onPress={()=> addItemToCart(data)}>
              <Text style={{color: '#fff', alignSelf: 'center', fontSize: 15}}>
                ADD TO BAG
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableOpacity>

    {/* Modal */}
    <Modal
          visible={isVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setisVisible(false)}>
          <View style={styles.ModalOverlay}>
            <View style={{alignItems: 'center', marginBottom: 10}}>
              <TouchableOpacity onPress={() => setisVisible(false)}>
                <Icon name="close" size={30} color="#fff"  style={styles.CancleImage}/>
              </TouchableOpacity>
            </View>
            <View style={styles.ModalContent}>
              <View style={styles.ModalTopArea}>
                <View style={{width: '30%'}}>
                  <Image source={image} style={[styles.Image , {height:120,width:90}]} />
                </View>
                <View style={{justifyContent: 'center', marginLeft: 30,width:'70%'}}>
                  <Text style={styles.title}>{title}</Text>
                  <Text style={styles.Author}>by {author}</Text>
                </View>
              </View>
              <Text style={{fontSize: 18}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, est
                laudantium dicta accusantium quo deleniti animi ipsa! Expedita iure
                fuga maxime vitae ad doloribus doloremque, omnis quaerat, iste eum
                laudantium hic eveniet sequi veniam sapiente aperiam voluptates
                perferendis officiis ipsum obcaecati quam rem? Et beatae totam
                repellendus alias optio possimus?
              </Text>
            </View>
          </View>
        </Modal>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    width: 160,
    height: 280,
    borderRadius: 4,
    margin: 10,
    borderWidth: 0.5,
    borderColor: '#E2E2E2',
  },
  TopArea: {
    height: '58%',
    backgroundColor: '#F5F5F5',
  },
  Image: {
    height: 133,
    width: 100,
    alignSelf: 'center',
    marginTop:15,
  },
  BottomArea: {
    padding: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    flexWrap: 'nowrap',
  },
  Author: {
    fontSize: 12,
    color: '#9D9D9D',
    lineHeight: 15,
  },
  Price: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 25,
    marginBottom:10,
  },
  Footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop:-25,
    padding: 10,
  },
  Favourites: {
    backgroundColor: '#F5F5F5',
    height: 35,
    width:'24%',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 4,
  },
  AddToCart: {
    backgroundColor: '#A03037',
    height: 35,
    width:'60%',
    justifyContent: 'center',
    borderRadius: 2,
  },
  AddedToCart: {
    backgroundColor: '#FFE7E8',
    height: 35,
    width:'95%',
    justifyContent: 'center',
    borderRadius: 2,
    borderColor: '#A03037',
    borderWidth:0.5,
  },
  ModalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  ModalContent: {
    height: '60%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  CancleImage: {
    backgroundColor: '#A03037',
    borderRadius: 50,
    padding:2,
  },
  ModalTopArea: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    marginHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E2E2E2',
    marginBottom:20,
  },
});
