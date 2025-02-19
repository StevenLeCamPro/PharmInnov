import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";

export default function Header() {
    return(
        <SafeAreaView style={styles.header}>
            <View style={styles.viewlogo}>
                <Image source={require("../assets/images/logo.png")} style={styles.logo}/>
            </View>
            <View style={styles.viewmenu}>
                <Image source={require("../assets/images/menu.png")} style={styles.menu}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {  
        header: {
            backgroundColor: '#00A95C',
            height: 84,
            flexDirection: 'row',
            justifyContent: 'space-between'
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
        }
    }
)