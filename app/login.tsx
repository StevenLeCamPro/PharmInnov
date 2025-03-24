import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Image, Text, View, Pressable } from "react-native";
import { TextInput, Button } from "react-native";
import * as SecureStore from 'expo-secure-store';



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  // const navigate = useNavigate();
  // const { message, addFlashMessage } = useFlashMessage();

  const handleLogin = async () => {
    const loginData = JSON.stringify({ email, password });
    
    console.log('tu me tentes le login maintenant la con de ta race')

    try {
      const response = await fetch('http://10.0.2.2:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: loginData,
      });

      const data = await response.json();

      console.log(data)

      await SecureStore.setItemAsync('userSession', JSON.stringify(data));

      // if (response.ok) {
      //     Cookies.set('pharminnov_login', JSON.stringify({
      //         user_id: data.user_id,
      //         role: data.role,
      //         date: data.date,
      //         token: data.token,
      //     }), { secure: true, sameSite: 'strict', expires: 1 });

      //     console.log('Login successful!');
      //     GetCookieInfo();

      //     addFlashMessage("Connexion réussie !");
      //     setTimeout(() => {
      //         navigate('/');
      //     }, 1000);
      // } else {
      //     setErrorMessage(data.error || "Connexion échouée. Veuillez réessayer.");
      // }
    } catch (error) {
      // setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
      console.error('An error occurred:', error);
    }
  };

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
            onChangeText={setEmail}
            defaultValue={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            secureTextEntry
            onChangeText={setPassword}
            defaultValue={password}
          />
          <Pressable style={styles.button} onPress={() => handleLogin()}>
            <Link href={"/"} style={styles.link} onPress={() => handleLogin()}>Se connecter</Link>
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
    formText2: {
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
    button: {
      height: 50,
      backgroundColor: '#00A95C',
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 50,
      marginBottom: 20,
    },
    link: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    }
  }
)