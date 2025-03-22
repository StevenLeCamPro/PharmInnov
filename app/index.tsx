import React from "react";
import { StyleSheet, SafeAreaView, Image, Text, View } from "react-native";
import Header from "./header";
import Login from "./login";
import Test from "./testApiGet";

export default function Index() {
  return (
    <SafeAreaView >
      <Header/>
      <View style={styles.content}>

        {/* <Test></Test> */}

      <Login/>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  {
    content: {
      backgroundColor: '#E9DDBC',  // à changer
   

    }
  }
)