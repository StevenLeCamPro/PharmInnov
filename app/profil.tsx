import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Pressable } from "react-native";
import Header from "./header";
import { Link } from "expo-router";

export default function Profil() {
  return (
    <SafeAreaView style={styles.content}>
      <Header />
          <Text style={styles.titleText}>Profil de Micheeeeeeel</Text>

      <View style={styles.profilContainer}>
        <Text style={styles.profilTitle}>Micheeeeeeeel Barnier</Text>

        <View style={styles.infoContainer}>
          <View style={styles.infos}>
            <Text style={styles.profilLabel}>Email : </Text>
            <Text style={styles.profilContent}>michel@michel.fr</Text>
          </View>
          <View style={styles.infos}>
          <Text style={styles.profilLabel}>Date de Naissance : </Text>
            <Text style={styles.profilContent}>21/12/21</Text>
            </View>
            <View style={styles.infos}>
          <Text style={styles.profilLabel}>Adresse : </Text>
            <Text style={styles.profilContent}>1 rue du code</Text>
            </View>
            <View style={styles.infos}>
          <Text style={styles.profilLabel}>Numéro de Téléphone : </Text>
            <Text style={styles.profilContent}>0606060606</Text>
            </View>
            <View style={styles.infos}>
          <Text style={styles.profilLabel}>Date de création : </Text>
            <Text style={styles.profilContent}>21/12/21</Text>
            </View>
        </View>

        {/* Container des boutons */}
        <View style={styles.btnContainer}>
          <Pressable style={styles.deleteButton}>
            <Link href={"/login"} style={styles.link}>
              Déconnexion
            </Link>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#E9DDBC", // à changer
    height: "100%",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 30,
  },
  profilContainer: {
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderColor: "#00A95C",
    borderWidth: 3,
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 10,
    width: "90%",
    alignSelf: "center",
  },
  profilTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  infos: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoContainer: {
    marginTop: 20,
    marginBottom: 0,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  profilLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginVertical: 10,
  },
    profilContent: {
        fontSize: 16,
        color: "#000000",
        marginVertical: 10,
    },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  validateButton: {
    backgroundColor: "#00A95C",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  deleteButton: {
    backgroundColor: "#FF0000",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  link: {
    color: "#fff",
    textAlign: "center",
  },
});
