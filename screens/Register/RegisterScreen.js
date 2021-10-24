import React, { useState, useLayoutEffect } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { Button, Input, Text } from "react-native-elements";

import { StatusBar } from "expo-status-bar";
import { auth } from "../../firebase";

import styles from "./RegisterScreen.style";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back", //only for iOS
    });
  }, [navigation]);

  const registerHandler = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            imageUrl ||
            "https://cdn.icon-icons.com/icons2/1919/PNG/512/avatarinsideacircle_122011.png",
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Picture URL (optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={registerHandler}
        />
      </View>
      <Button
        style={styles.button}
        raised
        onPress={registerHandler}
        title="Register"
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
