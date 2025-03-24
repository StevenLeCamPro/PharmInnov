import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ActivityIndicator, SafeAreaView, StyleSheet } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import axios from "axios";
import Tesseract from "tesseract.js";
import Header from "./header";

const CLOUDCONVERT_API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2RhZjIxNmEzZjgzOWQ1ZDE2OGIwNmYzNDU3ZWRhYTc0YWUzNjY5YzY2NjA4YjczNTMzYjQ2MzA4OGZmNjdlYjYwYzQwNDMwYTJmYmVkOTciLCJpYXQiOjE3NDI3OTg1MjkuNTY2NzcxLCJuYmYiOjE3NDI3OTg1MjkuNTY2NzcyLCJleHAiOjQ4OTg0NzIxMjkuNTYyMDcsInN1YiI6IjcxNDI2Njc2Iiwic2NvcGVzIjpbInVzZXIucmVhZCIsInVzZXIud3JpdGUiLCJ0YXNrLnJlYWQiLCJ0YXNrLndyaXRlIiwid2ViaG9vay5yZWFkIiwid2ViaG9vay53cml0ZSIsInByZXNldC5yZWFkIiwicHJlc2V0LndyaXRlIl19.TjNQUqpMapWr-6IPEHO7fkYw79G3gZ9Ga9ShlEH7dOuVax7WNGZBABj_KNEQ4jyhi5RMsioWR0GcHub9yFXYm2KJMiNvWIWAEC3_e5K_z9OFMOrmT6YVbPgEUTOWdjD7few8rJBf7f5Bnz-vzTG0-Xo_gjgh_RTHw6LY2I2EuxhzZuuTkqw2Bk_6geahH6kJCOwchndyt_vEhyDskNSvMv4i15FPWRbZRuIRuBANIqGqWz72DW8B5iuDqprn99CJSuVPRUhbLSIbQ9VOd2JdcYY2GuKxuiKS-_d0A7IeGI4GCbfc0FGNAqw8KZoQTG5qOMbBQGEHtcciykgCtCRA8snCBYATD8W_K4mU-mKWK8OpXQnLnRIm0IeqI7nZmGiEzAuxocH4KH8LHZfWKYbm8z67SM23QcKt0n9mTU69h8EgK5-hWUvXr5BRTnOcs3nBQgyNlOS0e13W0gOFfiXpiJWDx6HDF8zaFRWniAfBohibWS4Rf4IUvyA6cQuA584JbX8zsF-QzfONismnDjpYHr3EMZce6_KvynMZ3IoMC6__Ag88DmN9cz9bhuAUSeDSzhcIwQq7uVURxP5fKbWGndSiVAaUdevojAW0bbKLxcivXb3VzkFfdB-WGyTl6Ezmi7QYx9Eq66mvk4KAIR2qDDBo-qp1vIK6CHdaxAv8RoI";

export default function UploadOrdonnance() {
    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    const [imageUri, setImageUri] = useState<string | null>(null);
    const [extractedText, setExtractedText] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleUpload = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({ type: "application/pdf" });

            if (!result.canceled && result.assets && result.assets.length > 0) {
                setSelectedFile(result.assets[0].uri);
                console.log("Fichier sélectionné :", result.assets[0].uri);
            }
        } catch (error) {
            console.error("Erreur lors de la sélection du fichier :", error);
        }
    };

    const handleConvertToImage = async () => {
        if (!selectedFile) {
            alert("Veuillez sélectionner un fichier d'abord.");
            return;
        }

        setLoading(true);
        setExtractedText(null);
        setImageUri(null);

        try {
            console.log("Création du job CloudConvert...");
            const jobResponse = await axios.post(
                "https://api.cloudconvert.com/v2/jobs",
                {
                    "tasks": {
                        "task-1": {
                            "operation": "convert",
                            "input_format": "pdf",
                            "output_format": "png",
                            "input": [selectedFile],
                            "fit": "max",
                            "strip": false,
                            "pixel_density": 300,
                            "quality": 75,
                            "alpha": false
                        }
                    },
                    "tag": "jobbuilder"
                },
                {
                    headers: {
                        Authorization: `Bearer ${CLOUDCONVERT_API_KEY}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            const jobId = jobResponse.data.id;
            console.log("Job CloudConvert créé :", jobId);

            // Récupérer les informations de téléchargement
            console.log("Attente de la fin de conversion...");
            await new Promise((resolve) => setTimeout(resolve, 5000)); // Attente (CloudConvert peut être lent)

            const jobStatus = await axios.get(`https://api.cloudconvert.com/v2/jobs/${jobId}`, {
                headers: {
                    Authorization: `Bearer ${CLOUDCONVERT_API_KEY}`,
                },
            });

            const exportTask = jobStatus.data.data.tasks.find((task: any) => task.name === "export-my-file");
            if (!exportTask || exportTask.status !== "finished") {
                throw new Error("Erreur lors de la conversion avec CloudConvert");
            }

            const imageUrl = exportTask.result.files[0].url;
            setImageUri(imageUrl);
            console.log("Image générée :", imageUrl);

            // Lancer l'OCR
            console.log("Lancement de l'OCR...");
            const { data } = await Tesseract.recognize(imageUrl, "fra", {
                logger: (m) => console.log(m),
            });

            setExtractedText(data.text);
            console.log("Texte extrait :", data.text);
        } catch (error) {
            console.error("Erreur lors de la conversion :", error);
            alert("Échec de la conversion du PDF.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.content}>
            <Header />
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    Sur cette page, vous pourrez envoyer votre ordonnance en PDF, ou la prendre en photo.
                </Text>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Veuillez télécharger votre ordonnance</Text>
                    <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
                        <Text style={styles.uploadButtonText}>Choisir un fichier</Text>
                    </TouchableOpacity>
                    {selectedFile && <Text style={styles.fileText}>Fichier sélectionné : {selectedFile}</Text>}
                    <TouchableOpacity style={styles.uploadButton} onPress={handleConvertToImage}>
                        <Text style={styles.uploadButtonText}>Envoyer votre ordonnance</Text>
                    </TouchableOpacity>
                </View>

                {loading && <ActivityIndicator size="large" color="#00A95C" />}
                {extractedText && (
                    <View style={styles.textContainer}>
                        <Text style={styles.extractedText}>{extractedText}</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: "#E9DDBC",
        flex: 1,
    },
    container: {
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
    fileText: {
        marginTop: 10,
        fontSize: 14,
        color: "#333",
        textAlign: "center",
    },
    textContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    extractedText: {
        fontSize: 16,
        color: "#333",
    },
});
