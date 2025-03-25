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
    TouchableOpacity,
} from "react-native";
import Header from "./header";
import { Linking } from 'react-native';

export default function VirtualApplication() {

    const installAPK = () => {
        const apkUrl = 'http://10.0.2.2:8000/Pharminnov/Pharminnov.apk';
        Linking.openURL(apkUrl)
          .catch(err => console.error("Failed to open URL:", err));
    };

    return (
        <SafeAreaView style={styles.content}>
            <Header />

            <View style={styles.container}>
            <Text style={styles.titleText}>Venez découvrir une pharmacie en visite virtuelle</Text>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Téléchargez l'appliation juste en dessous</Text>
                <TouchableOpacity style={styles.uploadButton} onPress={installAPK}>
                    <Text style={styles.uploadButtonText}>Voir la visite virtuelle</Text>
                </TouchableOpacity>
                
            </View>

        
            </View>
        </SafeAreaView>

        
    );
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: "#E9DDBC",
        flex: 1,
    },
    container:{
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        margin: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    titleText: { 
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 20,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    uploadButton: {
        backgroundColor: "#00A95C",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    uploadButtonText: {
        color: "#fff",
        fontSize: 16,
    },
});
