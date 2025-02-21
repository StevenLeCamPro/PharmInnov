import React from "react";
import { StyleSheet, SafeAreaView, Image, Text, View } from "react-native";
import Header from "./header";

export default function Medicaments() {
  return (
    <SafeAreaView>
      <Header/>
      <View style={styles.content}>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  {
    content: {

    }
  }
)