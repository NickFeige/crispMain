import { IconSymbol } from '@/components/ui/IconSymbol';
import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

export default function TabLayout() {
      const [fontsLoaded] = useFonts({
    Sawarabi: require("@/assets/fonts/SawarabiMincho-Regular.ttf"),
  });
  
  if (!fontsLoaded) {
    return null; // or Loading screen
  }
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
         tabBarActiveTintColor: '#fff',  // <-- sets active tab text & icon color
        tabBarInactiveTintColor: '#fd9696',
        tabBarActiveBackgroundColor:'#fd9696',
        tabBarInactiveBackgroundColor:'#ffffee'
        
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
          <Ionicons name="nutrition-outline" size={24} color={color} />
          ),
          tabBarLabelStyle: { fontFamily: "Sawarabi",fontSize: 13},
          
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Cafe',
          tabBarIcon: ({ color }) => (
            <Ionicons name="cafe-outline" size={24} color={color} />
          ),
          tabBarLabelStyle: { fontFamily: "Sawarabi",fontSize: 13 },
        }}
      />
    </Tabs>
  );
}
