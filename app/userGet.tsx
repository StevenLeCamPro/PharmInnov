import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import Header from "./header";

export default function UserList() {
  return (
    <SafeAreaView style={{ backgroundColor: "#E9DDBC", height: "100%" }}>
      <Header />
      <ScrollView style={{ marginBottom: 90 }}>
        <Text style={styles.titleText}>Liste des utilisateurs</Text>
        <View style={styles.userContainer}>
          <View style={styles.userImage}>
            <Image
              source={require("../assets/images/user.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.textContainer}>
            <View>
              <Text style={styles.userName}>Micheeeeeeeeeeeel</Text>
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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  infos: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profilLabel: {
    fontWeight: "bold",
    color: "#333",
  },
  profilContent: {
    color: "#333",
  },
  userContainer: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  userImage: {
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
