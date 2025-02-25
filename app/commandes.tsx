import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  View,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import Header from "./header";
import { Link } from "expo-router";

export default function Commandes() {
  return (
    <SafeAreaView style={styles.content}>
      <Header />
      <ScrollView style={{ marginBottom: 90 }}>
        <Text style={styles.titleText}>Liste de vos commandes</Text>

        <View style={styles.commandContainer}>
          <Text style={styles.commandTitle}>Commande #4</Text> 
          {/* <Text style={styles.commandSubText}>Commande de : MICHEEEEEEEEEEEEL</Text> */}
            

          <View style={styles.textContainer}>
            
            <View>
              <Text style={styles.commandTitle}>Médicaments :</Text>
              <Text style={styles.commandTotalPrice}>1. Paracétamol 500mg</Text>
              <Text style={styles.commandSubText}> - Quantité : 20</Text>
              <Text style={styles.commandSubText}> - Prix Unitaire : 1 €</Text>

              <Text style={styles.commandTotalPrice}>2. Paracétamol 1000mg</Text>
              <Text style={styles.commandSubText}> - Quantité : 12</Text>
              <Text style={styles.commandSubText}> - Prix Unitaire : 1 €</Text>

              <Text style={styles.commandTotalPrice}>3. Ibuprofène 500mg</Text>
              <Text style={styles.commandSubText}> - Quantité : 5</Text>
              <Text style={styles.commandSubText}> - Prix Unitaire : 2 €</Text>

              <Text style={styles.commandTitle}>
                Prix total :
                <Text style={styles.commandTotalPrice}> 42.00 €</Text>
              </Text>
            </View>
          </View>

          {/* Container des boutons */}
          <View style={styles.btnContainer}>
            <Pressable style={styles.validateButton}>
              <Link href={"/login"} style={styles.link}>
                Valider la commande
              </Link>
            </Pressable>

            <Pressable style={styles.deleteButton}>
              <Link href={"/login"} style={styles.link}>
                Supprimer
              </Link>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#E9DDBC",
    
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 30,
  },
  commandContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical : 10,
    borderColor: "#00A95C",
    borderWidth: 3,
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 10,
    width: "90%",
    alignSelf: "center",
  },
  commandSubText: {
    color: "#000000",
    marginLeft: 30,
    fontSize: 16,
  },
  textContainer: {
    marginTop: 20,
    marginBottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  btnContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  validateButton: {
    height: 50,
    width: 150,
    backgroundColor: "#00A95C",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginRight: 15,
  },
  deleteButton: {
    height: 50,
    width: 150,
    backgroundColor: "#FF0000",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  link: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },

  commandTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginBottom: 20,
  },
  commandTotalPrice: {
    fontSize: 18,

    color: "#000000",
    marginLeft: 2,
  },
});
