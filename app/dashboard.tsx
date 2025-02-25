import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Button,
  Pressable,
} from "react-native";
import Header from "./header";
import { Link } from "expo-router";

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.content}>
      <Header />
      <View >
        <Text style={styles.titleText}>Tableau de bord</Text>
        <View style={styles.btnContainer}>
          <Pressable style={styles.button}>
            <Link href={"/medicaments"} style={styles.link}>
              Gestion des médicaments
            </Link>
          </Pressable>
          <Pressable style={styles.button}>
            <Link href={"/commandes"} style={styles.link}>
              Gestion des commandes
            </Link>
          </Pressable>
          <Pressable style={styles.button}>
            <Link href={"/login"} style={styles.link}>
              Gestion des utilisateurs
            </Link>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#E9DDBC",
    height: '100%',
  
  },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        marginTop: 40,
        },
  btnContainer: {
    marginTop: 60,
    marginBottom: 100,
  },
  button: {
    height: 100,
    backgroundColor: "#00A95C",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  link: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#fff",
  },
});
