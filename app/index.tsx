import React from "react";
import { StyleSheet, SafeAreaView, Image, Text, View } from "react-native";
import Header from "./header";
import Login from "./login";

export default function Index() {
  return (
    <SafeAreaView>
      <Header/>
      <View style={styles.content}>

      <Login/>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  {
    content: {
      backgroundColor: '#f0f0f0',  // à changer
   

    }
  }
)