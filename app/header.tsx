import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Header() {
    const [visibility, setVisibility] = useState(false)

    const toggleVisibility = () => {
        if (!visibility) {
            setVisibility(true)
        } else {
            setVisibility(false)
        }
    }

    return (
        <SafeAreaView style={styles.header}>
            <View style={styles.logoMenu}>
                <View style={styles.viewlogo}>
                    <Image source={require("../assets/images/logo.png")} style={styles.logo} />
                </View>
                <View style={styles.viewmenu}>
                    <Pressable style={styles.menu} onPress={() => toggleVisibility()}>
                        <Image source={require("../assets/images/menu.png")} style={styles.menu} />
                    </Pressable>
                </View>
            </View>
            {visibility ? 
            <View style={styles.nav}>
                <Pressable style={styles.navLink} onPress={() => toggleVisibility()}>
                    <Link href={"/"}><Text style={styles.navText}>Accueil</Text></Link>
                </Pressable>
                <Pressable style={styles.navLink} onPress={() => toggleVisibility()}>
                    <Link href={"/medicaments"}><Text style={styles.navText}>Médicaments</Text></Link>
                </Pressable>
                <Pressable style={styles.navLink} onPress={() => toggleVisibility()}>
                    <Link href={"/"}><Text style={styles.navText}>Visite Virtuelle</Text></Link>
                </Pressable>
                <Pressable style={styles.navLink} onPress={() => toggleVisibility()}>
                    <Link href={"/"}><Text style={styles.navText}>Connexion</Text></Link>
                </Pressable>
            </View>
            : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        header: {
            backgroundColor: '#00A95C',
        },
        logoMenu: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 84
        },
        viewlogo: {
            height: 84,
            width: 175,
            marginStart: 10
        },
        viewmenu: {
            height: 84,
            width: 40,
            marginEnd: 25
        },
        logo: {
            flex: 1,
            height: null,
            width: null,
            resizeMode: 'contain'
        },
        menu: {
            flex: 2,
            height: null,
            width: null,
            resizeMode: 'contain'
        },
        nav: {
            flexDirection: 'column'
        },
        navLink: {
            paddingVertical: 5,
            paddingHorizontal: 15,
            backgroundColor: '#fff',
            marginBottom: 10,
            marginHorizontal: 10,
            borderRadius: 5
        },
        navText: {
            fontSize: 18,
            fontWeight: 'bold'
        }
    }
)