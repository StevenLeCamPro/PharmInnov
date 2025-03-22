import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import Header from "./header";
import { Link } from "expo-router";
import Api from "./api";

interface Produit {
  id: number;
  nom: string;
  description: string;
  dosage: string;
  prix: number;
  stock: number;
  image: string;
  imageId: number;
  categorie: string[];
}

export default function Medicaments() {
  const [produits, setProduits] = useState<Produit[]>([]);

  const fetchProduits = async () => {
    try {
      setProduits(await Api("produit", "get"));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProduits();
  }, []);

  useEffect(() => {
    console.log(produits);
  }, [produits])

  const imageLink = (imgurl: string) => {
    return ("http://10.0.2.2:8000" + imgurl)
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#E9DDBC" }}>
      <Header />
      <ScrollView style={{ marginBottom: 90 }}>
        <Text style={styles.titleText}>Liste des médicaments</Text>

        {produits.length > 0 ? (
          produits.map((produit, index) => (
            
            <View style={styles.medContainer} key={index}>
              <View style={styles.medImage}>
                <Image
                  source={{uri: imageLink(produit.image)}}
                  style={styles.image}
                />
              </View>

              <View style={styles.textContainer}>
                <View>
                  <Text style={styles.medTitle}>{produit.nom}</Text>
                  <Text style={styles.medTitle}>{produit.dosage}</Text>
                </View>
                <View>
                  <Text style={styles.medTitle}>{produit.prix} €</Text>

                </View>

              </View>
              <View style={styles.priceContainer}>
                <Image
                  source={require("../assets/images/package.png")}
                ></Image>
                <Text style={styles.medPrice}>{produit.stock} en stock</Text>
              </View>
              <Pressable style={styles.button}>
                <Link href={"/login"} style={styles.link}>
                  Voir les détails 
                </Link>
              </Pressable>
            </View>
            
          ))
        ) : (
          <Text>Loading...</Text>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 30,
  },
  medContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderColor: "#00A95C",
    borderWidth: 3,
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 10,
    width: "90%",
    alignSelf: "center",
  },
  medImage: {
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  textContainer: {
    marginTop: 20,
    marginBottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  button: {
    height: 50,
    backgroundColor: "#00A95C",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 50,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  medTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: 20,
  },
  medPrice: {
    fontSize: 16,
    textAlign: 'right',
    justifyContent: 'flex-end',
    color: '#6B7280',
    marginLeft: 2,
  }
});
