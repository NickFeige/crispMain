import React from 'react';
import { Entypo } from "@expo/vector-icons";
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Pressable, 
  Linking, 
  ScrollView 
} from 'react-native';

const About = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>

        <Text style={styles.crisp}>CRISP</Text>

        <Text style={styles.text}>Hello, welcome to CRISP</Text>

        <Text style={styles.text2}>
          For 18 years, we have been committed to providing the St Albans
          community with high-quality, fresh produce. Five years ago, we expanded
          our services with the opening of our café, which has since become a
          popular and inviting space for customers to meet, study, and enjoy a
          diverse selection of freshly prepared food and beverages.
        </Text>

        {/* LOCATIONS */}
     <View style={styles.locationRow}>

  {/* EDGEWARE */}
  <View style={styles.locationCard}>
    <Text style={styles.locationHeader}>LOCATION – EDGEWARE</Text>

    <Pressable 
      onPress={() =>
        Linking.openURL(
          "https://www.google.com/maps/place/Crisp+on+Edgeware/@-43.5138082,172.6344616,16z/data=!3m1!4b1!4m6!3m5!1s0x6d318bcd71ea39b5:0x64b3960bbb909b13!8m2!3d-43.5138082!4d172.6370365!16s%2Fg%2F1vxw8fyr?entry=ttu&g_ep=EgoyMDI1MTExMS4wIKXMDSoASAFQAw%3D%3D"
        )
      }
    >
      <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/staticmap?center=-43.5138,172.6370&zoom=15&size=600x400&markers=color:red|-43.5138,172.6370&key=YOUR_API_KEY",
        }}
        style={styles.staticMap}
      />
    </Pressable>
  </View>

  {/* NORTHWOOD */}
  <View style={styles.locationCard}>
    <Text style={styles.locationHeader}>LOCATION – NORTHWOOD</Text>

    <Pressable 
      onPress={() =>
        Linking.openURL(
          "https://www.google.com/maps/place/Crisp+Grovelea/@-43.4590257,172.6204139,16z/data=!3m1!4b1!4m6!3m5!1s0x6d318c6a4bd9d62f:0x499b0912ab1c707d!8m2!3d-43.4590257!4d172.6229888!16s%2Fg%2F1tfklc1y?entry=ttu&g_ep=EgoyMDI1MTExMS4wIKXMDSoASAFQAw%3D%3D"
        )
      }
    >
      <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/staticmap?center=-43.4590,172.6229&zoom=15&size=600x400&markers=color:red|-43.4590,172.6229&key=YOUR_API_KEY",
        }}
        style={styles.staticMap}
      />
    </Pressable>
  </View>
  

</View>
<Text style={styles.text}>CONNECTION</Text>
 <Pressable
    style={styles.contactRow}
    onPress={() => Linking.openURL("mailto:simon@realcrisp.co.nz")}
  >
    <Entypo name="mail" size={24} color="#fd9696" style={styles.icon} />
    <Text style={styles.contactText}>simon@realcrisp.co.nz</Text>
  </Pressable>

  {/* INSTAGRAM */}
  <Pressable
    style={styles.contactRow}
    onPress={() => Linking.openURL("https://www.instagram.com/crisp_nz")}
  >
    <Entypo name="instagram" size={24} color="#fd9696" style={styles.icon} />
    <Text style={styles.contactText}>crisp_nz</Text>
  </Pressable>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 50,
    alignItems: 'center',
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

  locationRow: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: 20,
},

locationCard: {
  flex: 1,
  alignItems: "center",
  paddingHorizontal: 10,
},

locationHeader: {
  fontSize: 20,
  fontWeight: "700",
  color: "#fd9696",
  marginBottom: 10,
  textAlign: "center",
},

staticMap: {
  width: 160,
  height: 160,
  borderRadius: 12,
  marginBottom: 20,
  backgroundColor: "#eee",
},
contactSection: {
  marginTop: 30,
  width: "100%",
  alignItems: "center",
},

contactRow: {
  flexDirection: "row",
  alignItems: "center",
  marginVertical: 8,
},

icon: {
  marginRight: 10,
},

contactText: {
  fontSize: 18,
  fontWeight: "600",
  color: "#fd9696",
},
});

export default About;