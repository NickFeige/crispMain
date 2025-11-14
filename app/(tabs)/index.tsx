import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Cat = () => {
  const items = [
    { name: "Carrot", price: "$0.60", image: require("@/assets/images/carrot.jpg") },
    { name: "Broccoli", price: "$2.00", image: require("@/assets/images/broccoli.jpg") },
    { name: "Tomato", price: "$1.50", image: require("@/assets/images/tomatoes.jpg") },
  ];

  const [index, setIndex] = useState(0);

  // AUTO-CYCLE every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 8000); // 8 seconds

    return () => clearInterval(interval);
  }, []);

  const prevItem = () =>
    setIndex((prev) => (prev - 1 + items.length) % items.length);

  const nextItem = () =>
    setIndex((prev) => (prev + 1) % items.length);

  return (
    <View style={styles.container}>
      <Text style={styles.crisp}>CRISP</Text>

      {/* IMAGE CAROUSEL */}
      <View style={styles.carousel}>
        <Pressable onPress={prevItem} style={styles.arrowButton}>
          <Entypo name="chevron-left" size={40} color="#FFCC00" />
        </Pressable>

        <Image source={items[index].image} style={styles.image} resizeMode="contain" />

        <Pressable onPress={nextItem} style={styles.arrowButton}>
          <Entypo name="chevron-right" size={40} color="#FFCC00" />
        </Pressable>
      </View>

      {/* DOTS */}
      <View style={styles.dotsContainer}>
        {items.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              index === i && styles.dotActive,
            ]}
          />
        ))}
      </View>

      {/* TITLE */}
      <Text style={styles.title}>{items[index].name}</Text>
      <Text style={styles.price}>{items[index].price}</Text>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingTop: 40,
    flex: 1,
  },
  crisp: { alignSelf: 'flex-start', 
    fontSize: 50, 
    fontWeight: '700', 
    color: '#fd9696', 
    marginBottom: 10, },

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
    width: 300,
    height: 220,
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
    marginTop: 30,
    textAlign: "center",
  },

  price: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 5,
    color: "#444",
  },
});

export default Cat;