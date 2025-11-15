import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Image, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Cat = () => {
  const items = [
    { name: "Carrot", price: "$0.60", image: require("@/assets/images/carrot.jpg") },
    { name: "Broccoli", price: "$2.00", image: require("@/assets/images/broccoli.jpg") },
    { name: "Tomato", price: "$1.50", image: require("@/assets/images/tomatoes.jpg") },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const prevItem = () =>
    setIndex((prev) => (prev - 1 + items.length) % items.length);

  const nextItem = () =>
    setIndex((prev) => (prev + 1) % items.length);

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>

        <Text style={styles.crisp}>CRISP</Text>

        {/* CAROUSEL */}
        <View style={styles.carousel}>
          <Pressable onPress={prevItem} style={styles.arrowButton}>
            <Entypo name="chevron-left" size={40} color="#FFCC00" />
          </Pressable>

          <Image
            source={items[index].image}
            style={styles.image}
            resizeMode="contain"
          />

          <Pressable onPress={nextItem} style={styles.arrowButton}>
            <Entypo name="chevron-right" size={40} color="#FFCC00" />
          </Pressable>
        </View>

        {/* DOTS */}
        <View style={styles.dotsContainer}>
          {items.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, index === i && styles.dotActive]}
            />
          ))}
        </View>

        {/* TITLE */}
        <Text style={styles.title}>{items[index].name}</Text>
        <Text style={styles.price}>{items[index].price}</Text>

        <Text style={styles.title2}>CAFE</Text>

        {/* ZOOMABLE IMAGE (Still inside same scroll) */}
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
        <Text style={styles.title2}>FRUIT BOX</Text>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 0,
  },
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 50,
  },
  crisp: {
    alignSelf: "flex-start",
    fontSize: 50,
    fontWeight: "700",
    color: "#fd9696",
    marginBottom: 0,
    marginLeft: 5,
  },
  carousel: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  arrowButton: {
    padding: 10,
  },
  image: {
    flexShrink: 300,
    height: 280,
    width:600
  },
  dotsContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  dot: {
    width: 25,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 3,
  },
  dotActive: {
    backgroundColor: "#FFCC00",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    marginTop: 20,
    textAlign: "center",
  },
  price: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 5,
    color: "#444",
  },
  title2: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 50,
    color: "#fd9696",
  },
  image2: {
    width: "100%",
    height: undefined,
    aspectRatio: 0.7,
    marginTop: 20,
    marginBottom: 20,
  },
  zoomContainer: {
    width: "100%",
    height: 600,
    backgroundColor: "#fff",
  },
});

export default Cat;