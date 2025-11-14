import { IconSymbol } from '@/components/ui/IconSymbol';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
         tabBarActiveTintColor: '#fff',  // <-- sets active tab text & icon color
        tabBarInactiveTintColor: '#fd9696',
        tabBarActiveBackgroundColor:'#fd9696',
        tabBarInactiveBackgroundColor:'#fff'
        
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
          title: 'About',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}