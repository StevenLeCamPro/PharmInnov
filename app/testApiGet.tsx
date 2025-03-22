import { useEffect, useState } from "react";
import Api from "./api";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

<<<<<<< HEAD
export default function TestApiGet() {
    const [produits, setProduits] = useState([]);

    const fetchProduits = async () => {
        try {
            const result = await Api("produit", "get", 47);
            console.log("API Response:", result);

            // Ensure `produits` is an array
            setProduits(Array.isArray(result) ? result : result.produits || []);
=======
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

export default function Test() {
    const [produits, setProduits] = useState<Produit[]>([]);

    const fetchProduits = async () => {
        try {
            setProduits(await Api("produit", "get", 22));
>>>>>>> 512c5aebc8004463ad50c43b904fd9dfe0dd1d3e
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

    return (
        <SafeAreaView>
            <View>
                {produits.length > 0 ? (
                    produits.map((produit, index) => (
                        <Text key={index} style={styles.caca}>{produit.nom}</Text> // ✅ No more TypeScript error
                    ))
                ) : (
                    <Text style={styles.caca}>Loading...</Text>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    caca: {
<<<<<<< HEAD
        flex: 1,
        padding: 50,
        color: '#333',
        textAlign: 'center',
=======
        padding: 50
>>>>>>> 512c5aebc8004463ad50c43b904fd9dfe0dd1d3e
    }
});