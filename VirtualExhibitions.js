import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

export default function VirtualExhibitionsScreen() {
  const exhibitions = [
    { id: '1', title: 'Starry Night', artist: 'Vincent van Gogh', image: require('./components/painting1.jpg') },
    { id: '2', title: 'Mona Lisa', artist: 'Leonardo da Vinci', image: require('./components/painting2.jpg') },
    { id: '3', title: 'The Persistence of Memory', artist: 'Salvador Dalí', image: require('./components/painting4.jpg') },
    { id: '4', title: 'The Scream', artist: 'Edvard Munch', image: require('./components/painting4.jpg') },
    { id: '5', title: 'Gazzled Gallaxy', artist: 'Vincent van Gogh', image: require('./components/painting5.jpg') },
    { id: '6', title: 'Moonlight Morning', artist: 'Leonardo da Vinci', image: require('./components/painting6.jpg') },
    { id: '7', title: 'Parle Paradise', artist: 'Salvador Dalí', image: require('./components/painting7.jpg') },
    { id: '8', title: 'The River', artist: 'Edvard Munch', image: require('./components/painting8.jpg') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Virtual Exhibitions</Text>
      </View>
      <FlatList
        data={exhibitions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.artist}>{item.artist}</Text>
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
    backgroundColor: '#4c669f', // Header background color
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
    elevation: 3, // Shadow for Android
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  artist: {
    fontSize: 16,
    color: '#555',
  },
});
