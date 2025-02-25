import { Link } from "expo-router";
import React from "react";
import { StyleSheet, SafeAreaView, Image, Text, View, Pressable } from "react-native";
import { TextInput, Button } from "react-native";

export default function Login() {
  return (
    <SafeAreaView>
      <View style={styles.content}>
<Text style={styles.loginText}>
    Bonjour et bienvenue ! Veuillez vous connecter. 
</Text>

<View style={styles.inputContainer}>
    <Text style={styles.formText}>
        Rentrez vos informations ci-dessous pour vous connecter
    </Text>
    
    <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
    />
    <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
    />
    <Pressable style={styles.button}>
        <Link href={"/"} style={styles.link}>Se connecter</Link>
    </Pressable>
    <Pressable style={styles.button}>
      {/* Temporaire */}
        <Link href={"/uploadOrdonnance"} style={styles.link}>Voir la page ordonnance</Link> 
        
    </Pressable>

    <Text style={styles.formText2}>
    Si vous n'avez pas de compte, veuillez consulter notre site pour vous inscrire
    </Text>
</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  {
    content: {
      backgroundColor: '#E9DDBC',
      height: '100%',

    },
    loginText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      marginBottom: 30,
      marginTop: 50,
      
    },
    formText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      marginBottom: 20,
    },
    formText2 : {
        fontSize: 13,
        color: '#333',
        textAlign: 'center',
    },
    inputContainer: {
      marginBottom: 20,
      marginHorizontal: 30,
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 15,
      shadowColor: '#000',
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 20,
      padding: 10,
      borderRadius: 15,
    },
    button:{
        height : 50,
        backgroundColor: '#00A95C',
        borderRadius: 15,   
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 50,
        marginBottom : 20,
    },
    link:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    }
  }
)