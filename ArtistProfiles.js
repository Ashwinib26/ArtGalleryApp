import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

export default function ArtistProfilesScreen() {
  const artists = [
    { 
      id: '1', 
      username: 'vangogh_1889', 
      name: 'Vincent van Gogh', 
      email: 'vangogh@example.com', 
      profilePic: require('./components/profile1.jpg') 
    },
    { 
      id: '2', 
      username: 'davinci_1452', 
      name: 'Leonardo da Vinci', 
      email: 'davinci@example.com', 
      profilePic: require('./components/profile2.jpg') 
    },
    { 
      id: '3', 
      username: 'dali_surreal', 
      name: 'Salvador Dalí', 
      email: 'dali@example.com', 
      profilePic: require('./components/profile3.jpg') 
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Artist Profiles</Text>
      </View>
      <FlatList
        data={artists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.profilePic} style={styles.profilePic} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.username}>@{item.username}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    backgroundColor: '#4c669f', // Background color for header
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Adds shadow for Android
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  username: {
    fontSize: 16,
    color: '#555',
    marginVertical: 3,
  },
  email: {
    fontSize: 14,
    color: '#888',
  },
});
