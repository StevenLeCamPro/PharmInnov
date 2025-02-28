import React from "react";
import { SafeAreaView, View, Text, ImageBackground, StyleSheet, ScrollView, Pressable, Dimensions } from "react-native";
import Header from "./header";
import { Link } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';

const { height } = Dimensions.get("window");

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <ImageBackground 
                    source={require("../assets/images/landing.png")} 
                    style={styles.backgroundImage}
                >
                    <View style={styles.overlay}>
                        <Text style={styles.welcomeText}>Bienvenue sur PharmInnov</Text>
                        <MaterialIcons name="keyboard-arrow-down" size={40} color="white" style={styles.arrowIcon} />
                    </View>
                </ImageBackground>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>C'est quoi PharInnov ?</Text>
                    <Text style={styles.paragraph}>
                        Dans un monde où l'accès aux médicaments est indispensable pour la santé de chacun,
                        l’évolution vers des solutions numériques se dessine de plus en plus. Pharminnov est une réponse à ce besoin :
                        une pharmacie en ligne qui propose du « click and collect » permettant aux patients un gain de temps précieux
                        ainsi qu’une obtention de leur traitement simplement et efficacement.
                    </Text>
                    <Text style={styles.paragraph}>
                        Avec Pharminnov, les patients peuvent importer leur ordonnance sur le site et, une fois cette dernière
                        vérifiée par le médecin inscrit en bas de page, ils reçoivent un bon de commande contenant tous leurs
                        médicaments, ainsi qu’une notification si un ou plusieurs médicaments sont manquants.
                        Cela permet d’avoir une visibilité sur la disponibilité des produits en pharmacie, sans avoir à se déplacer.
                    </Text>
                </View>

                <View style={styles.divOrdonnance}>
                    <Text style={styles.ordonnanceText}>Vérifiez la disponibilité de vos médicaments en cliquant ci-dessous :</Text>
                    <Pressable style={styles.button}>
                        <Link href={"/uploadOrdonnance"} style={styles.link}>Voir la page ordonnance</Link> 
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9DDBC', 
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 50,
    },
    backgroundImage: {
        width: '100%',
        height: height * 0.83,
        justifyContent: 'center',
        marginTop: -10,
        alignItems: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    arrowIcon: {
        marginTop: 10,
    },
    textContainer: {
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 16,
        color: '#555',
        lineHeight: 24,
        marginBottom: 10,
        textAlign: 'justify',
    },
    divOrdonnance: {
        backgroundColor: '#00A95C',
        padding: 20,
        margin: 20,
        borderRadius: 15,
        alignItems: 'center',
    },
    ordonnanceText: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    link: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00A95C',
    }
});
