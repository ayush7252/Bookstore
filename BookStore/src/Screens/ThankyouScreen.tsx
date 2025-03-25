import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity,
    Image 
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialIcons'
import Header from '../Components/Header';
  
  const ThankYou = ({ navigation } : any) => {
    return (
      <View>
        <Header />
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Icon name="check-circle" size={80} color="#A03037" />
          </View>
  
          <Text style={styles.title}>Thank You!</Text>
          <Text style={styles.subtitle}>Your order has been placed successfully</Text>
  
          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Order Number:</Text>
              <Text style={styles.detailValue}>#123456</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Estimated Delivery:</Text>
              <Text style={styles.detailValue}>2-3 business days</Text>
            </View>
          </View>
  
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default ThankYou;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#f0f2f5',
      padding: 20,
    },
    card: {
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 25,
      elevation: 5,
      alignItems: 'center',
      marginTop:150
    },
    iconContainer: {
      marginBottom: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#A03037',
      marginBottom: 8,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 16,
      color: '#666',
      textAlign: 'center',
      marginBottom: 30,
      lineHeight:18,
    },
    detailsContainer: {
      width: '100%',
      marginBottom: 30,
    },
    detailRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
    detailLabel: {
      fontSize: 14,
      color: '#666',
    },
    detailValue: {
      fontSize: 14,
      color: '#333',
      fontWeight: '500',
      lineHeight:18,
    },
    button: {
      backgroundColor: '#A03037',
      borderRadius: 8,
      padding: 16,
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });