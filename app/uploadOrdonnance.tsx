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


export default function UploadOrdonnance() {
    const handleUpload = () => {
       
    };

    return (
        <SafeAreaView style={styles.content}>
            <Header />

            <View style={styles.container}>
            <Text style={styles.titleText}>Sur cette page, vous pourrez envoyer votre ordonnance en pdf, ou la prendre en photo</Text>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Veuillez télécharger votre ordonnance</Text>
                <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
                    <Text style={styles.uploadButtonText}>Choisir un fichier</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
                    <Text style={styles.uploadButtonText}>Envoyer votre ordonnance</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Sinon prenez la en photo</Text>
                <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
                    <Text style={styles.uploadButtonText}>Prendre une photo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
                    <Text style={styles.uploadButtonText}>Envoyer votre ordonnance</Text>
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
