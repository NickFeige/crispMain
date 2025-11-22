import { IconSymbol } from '@/components/ui/IconSymbol';
import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
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
            <IconSymbol size={28} name="house.fill" color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Cafe',
          tabBarIcon: ({ color }) => (
            <Ionicons name="cafe-outline" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}