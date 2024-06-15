import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const categories = [
  "agriculture",
  "retail",
  "manufacturing",
  "hospitality",
  "healthcare",
  "technical services",
  "herbal med",
  "recreation",
  "handicrafts",
  "home stays",
  "transportation",
  "tourism",
  "rental assets",
  "finance",
  "art and craft",
  "event management",
  "sports academy",
  "spa services",
];

export default function Quest() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quest</Text>
      <ScrollView contentContainerStyle={styles.buttonsContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.button}>
            <Text style={styles.buttonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f7",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#d1d1d1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#333",
  },
  submitButton: {
    backgroundColor: "#333",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: "#fff",
  },
});
