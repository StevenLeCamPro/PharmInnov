import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Pressable } from "react-native";
import Header from "./header";
import { Link } from "expo-router";
import getUserSession from "./getUserSession";
import Api from "./api";

interface User {
  id: number
  name: string
  firstName: string
  email: string
  brithDate: string
  phone: string
  roles: number
  address: string
}

export default function Profil() {
  const [user, setUser] = useState<User[]>([]);
  const session = getUserSession()
  var userId: number

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setUser(await Api("user", "get", userId));
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    session.then(user => {
      if (user) {
        const userData = JSON.parse(user)
        userId = userData.user_id
        fetchUser();
      }
    })
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user])

  return (
    <SafeAreaView style={styles.content}>
      <Header />

      {user.length > 0 ? (
        user.map((currentUser) => (
          <View key={currentUser.id}>
            <Text style={styles.titleText}>Profil de {currentUser.firstName}</Text>

            <View style={styles.profilContainer}>
              <Text style={styles.profilTitle}>{currentUser.firstName} {currentUser.name}</Text>

              <View style={styles.infoContainer}>
                <View style={styles.infos}>
                  <Text style={styles.profilLabel}>Email : </Text>
                  <Text style={styles.profilContent}>{currentUser.email}</Text>
                </View>
                <View style={styles.infos}>
                  <Text style={styles.profilLabel}>Date de Naissance : </Text>
                  <Text style={styles.profilContent}>{currentUser.brithDate}</Text>
                </View>
                <View style={styles.infos}>
                  <Text style={styles.profilLabel}>Adresse : </Text>
                  <Text style={styles.profilContent}>{currentUser.address}</Text>
                </View>
                <View style={styles.infos}>
                  <Text style={styles.profilLabel}>Numéro de Téléphone : </Text>
                  <Text style={styles.profilContent}>{currentUser.phone}</Text>
                </View>
              </View>

              {/* Container des boutons */}
              <View style={styles.btnContainer}>
                <Pressable style={styles.deleteButton}>
                  <Link href={"/login"} style={styles.link}>
                    Déconnexion
                  </Link>
                </Pressable>
              </View>
            </View>
          </View>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#E9DDBC", // à changer
    height: "100%",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 30,
  },
  profilContainer: {
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderColor: "#00A95C",
    borderWidth: 3,
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 10,
    width: "90%",
    alignSelf: "center",
  },
  profilTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  infos: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoContainer: {
    marginTop: 20,
    marginBottom: 0,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  profilLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginVertical: 10,
  },
  profilContent: {
    fontSize: 16,
    color: "#000000",
    marginVertical: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  validateButton: {
    backgroundColor: "#00A95C",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  deleteButton: {
    backgroundColor: "#FF0000",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  link: {
    color: "#fff",
    textAlign: "center",
  },
});
