import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VirtualExhibitionsScreen from './VirtualExhibitions';
import ArtistProfilesScreen from './ArtistProfiles';

function HomeScreen({ navigation }) {
  const fadeIn = useRef(new Animated.Value(0)).current; 
  const scale = useRef(new Animated.Value(0.5)).current; 

  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1, 
      duration: 2000, 
      useNativeDriver: true,
    }).start();

    Animated.timing(scale, {
      toValue: 1, 
      duration: 2000, 
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']} 
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Animated.View style={[styles.iconContainer, { opacity: fadeIn, transform: [{ scale }] }]}>
          <Icon name="brush" size={50} color="#fff" />
        </Animated.View>

        <Animated.Text
          style={[
            styles.appName,
            {
              opacity: fadeIn, 
              transform: [{ scale }],
            },
          ]}
        >
          ArtScape
        </Animated.Text>

        <Animated.Text
          style={[styles.punchLine, { opacity: fadeIn, transform: [{ scale }] }]}
        >
          Discover the World of Art
        </Animated.Text>
        <Text style={styles.subLine}>Immerse yourself in breathtaking masterpieces</Text>

        <View style={styles.navigationButtons}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Artist Profiles')}
          >
            <Text style={styles.navText}>Artist Profiles</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Virtual Exhibitions')}
          >
            <Text style={styles.navText}>Virtual Exhibitions</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Artist Profiles" component={ArtistProfilesScreen} />
        <Stack.Screen name="Virtual Exhibitions" component={VirtualExhibitionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  iconContainer: {
    marginBottom: 20, 
  },
  punchLine: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subLine: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  appName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ff6347',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 60,
    fontFamily: 'sans-serif-condensed', 
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 80,
  },
  navButton: {
    backgroundColor: '#ff6347',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  navText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
