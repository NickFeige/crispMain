import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.crisp}>CRISP</Text>
      <Text style={styles.text}>Hello, welcome to CRISP</Text>
      <Text style={styles.text2}>For 18 years, we have been committed to providing the St Albans
         community with high-quality, fresh produce. Five years ago,
          we expanded our services with the opening of our café, which has since become a popular
           and inviting space for customers to meet, study, and enjoy a diverse selection
            of freshly prepared food and beverages.
      </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // <-- background color here
     justifyContent: 'flex-start', 
    alignItems: 'center',
  },
   crisp: {
    alignSelf: 'flex-start', // <-- only CRISP moves to left
    fontSize: 50,
    fontWeight: '700',
    color: '#fd9696',
    marginBottom: 10,
    marginLeft:5
  },
  text: {
    fontSize: 26,
    fontWeight: '600',
    color: '#fd9696',
    marginBottom: 10, // make text readable on dark background
  },
  text2: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fd9696',
    marginLeft:20,
    marginRight:20 // make text readable on dark background
  },
});

export default About;