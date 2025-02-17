import React from "react";
import { StyleSheet, SafeAreaView, Image, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/icon.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.content}>

      </View>
      <View style={styles.footer}>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  {
    header: {
      backgroundColor: '#00A95C',
      height: 84,
    },
    content: {

    },
    footer: {

    },
    logo: {
      height: 50,
      width: 50
    }
  }
)