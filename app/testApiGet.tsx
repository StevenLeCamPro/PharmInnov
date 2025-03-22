import { useEffect, useState } from "react";
import Api from "./api";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

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
        padding: 50
    }
});