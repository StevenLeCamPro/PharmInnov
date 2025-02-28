import { useEffect, useState } from "react";
import Api from "./api";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TestApiGet() {
    const [produits, setProduits] = useState([]);

    const fetchProduits = async () => {
        try {
            const result = await Api("produit", "get", 47);
            console.log("API Response:", result);

            // Ensure `produits` is an array
            setProduits(Array.isArray(result) ? result : result.produits || []);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProduits();
    }, []);  // Add empty dependency array to avoid infinite calls

    return (
        <SafeAreaView>
        <View>
            {produits.map((produit, index) => (
                <Text key={index} style={styles.caca}>{produit.nom}</Text>
            ))}
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create(
{
    caca: {
        flex: 1,
        padding: 50,
        color: '#333',
        textAlign: 'center',
    }
}
)