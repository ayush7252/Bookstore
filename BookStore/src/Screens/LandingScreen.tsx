import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../Components/Card';
import CardData from '../assets/Constants/Data';
import Header from '../Components/Header';

const LandingScreen = ({navigation}: any ) => {
  const [Counter, setCounter] = useState(0);
  const [SearchedText, setSearchedText] = useState('')
  const [filteredData, setfilteredData] = useState(CardData)

  useEffect(() => {
    setCounter(CardData.length);
  }, [CardData]);

  useEffect(()=>{
    if(SearchedText){
      const filtered = CardData.filter(item => item.title.toLowerCase().includes(SearchedText.toLowerCase()));
      setfilteredData(filtered);
      setCounter(filtered.length);
    }else{
      setfilteredData(CardData);
      setCounter(CardData.length);
    }
  },[SearchedText])

  const handleSearchedData = (data: string)=> {
    setSearchedText(data);
    console.warn(SearchedText);
  }

  return (
    <View style={styles.Container}>
      <Header navigation={navigation} onSearchDataChange={handleSearchedData}/>
      <ScrollView>
        <View style={styles.ContentArea}>
          <View
            style={{flexDirection: 'row', alignItems: 'baseline', padding: 10}}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#0A0102'}}>
              Books{' '}
            </Text>
            <Text style={{fontSize: 12, color: '#9D9D9D'}}>
              {Counter} items
            </Text>
          </View>
          <View style={styles.CardContainer}>
            {filteredData.map((item, index) => {
              return (
                <View
                  key={index}>
                  <Card data={item} />
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.Footer}>
          <View style={styles.FooterContent}>
            <Text style={{lineHeight: 20, fontSize: 15, color: '#fff'}}>
              Copyright <Text style={{marginTop: 20}}>©</Text>2020, Bookstore
              Private Limited. All Rights Reserved
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
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
  ContentArea: {
    backgroundColor: '#fff',
    marginTop: 10,
  },
  CardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  Footer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 142,
  },
  FooterContent: {
    height: 40,
    width: '100%',
    backgroundColor: '#A03037',
    justifyContent: 'center',
  },
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
