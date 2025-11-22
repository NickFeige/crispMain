import React from 'react';
import {StyleSheet,Text,View,Image,ScrollView } from 'react-native';

const About = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>

        <Text style={styles.crisp}>CRISP</Text>

        <Text style={styles.title2}>MENU</Text>

        {/* ZOOMABLE IMAGE */}
        <ScrollView
          style={styles.zoomContainer}
          minimumZoomScale={1}
          maximumZoomScale={3}
          pinchGestureEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={require('@/assets/images/menu.jpg')}
            style={styles.image2}
            resizeMode="contain"
          />
        </ScrollView>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 50,
    alignItems: 'center',
    backgroundColor: "#ffffee",
  },

  crisp: {
    alignSelf: 'flex-start',
    fontSize: 50,
    fontWeight: '700',
    color: '#fd9696',
    marginBottom: 10,
    marginLeft: 5,
  },

  text: {
    fontSize: 26,
    fontWeight: '600',
    color: '#fd9696',
    marginBottom: 10,
  },

  text2: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fd9696',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  image2: {
    width: "100%",
    height: undefined,
    aspectRatio: 0.7,
    marginTop: 20,
    marginBottom: 20,
  },

  zoomContainer: {
    width: "95%",
    height: "100%",
    backgroundColor: "#ffffee",
  },
   title2: {
    fontSize: 32,
    fontWeight: "800",
    marginTop: 50,
    color: "#fd9696",
  },
});

export default About;