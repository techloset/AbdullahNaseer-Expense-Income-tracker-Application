import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function ConfirmAlert() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Logout?</Text>
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.message}>Are you sure you want to logout?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.noButton}>
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.yesButton}>
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
    position: "relative",
  },
  container: {
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "#FFFFFF",
    width: "100%",
    marginTop: "auto", // Stick to the bottom of the screen
    padding: 14,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomWidth: 1, // Add a bottom border
    borderBottomColor: "#FFF", // Color of the bottom border
  },
  header: {
    backgroundColor: "#D3BDFF",
    alignSelf: "center",
    width: 36,
    height: 4,
    marginBottom: 10,
  },
  titleContainer: {
    marginTop: 10,
  },
  title: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: "600",
  },
  messageContainer: {
    color: "#91919F",
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
  },
  message: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: "600",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  noButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEE5FF",
    borderRadius: 16,
    padding: 17,
  },
  yesButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7F3DFF",
    borderRadius: 16,
    padding: 17,
  },
  buttonText: {
    fontFamily: "Inter",
    fontWeight: "600",
  },
});

export default ConfirmAlert;
