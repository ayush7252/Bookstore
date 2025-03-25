import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DiscriptionBox = () => {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setisVisible(false)}>
      <View style={styles.ModalOverlay}>
        <View style={{alignItems: 'center', marginBottom: 10}}>
          <TouchableOpacity onPress={() => setisVisible(false)}>
            <Icon name="close" size={35} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.ModalContent}>
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
  );
};

export default DiscriptionBox;

const styles = StyleSheet.create({
  ModalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  ModalContent: {
    height: '50%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
