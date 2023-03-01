import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Styles } from "./assets/StyleSheet/Styles";
import { LinearGradient } from 'expo-linear-gradient';
//import { useFonts, Sancreek_400Regular } from "@expo-google-fonts/sancreek";
const Header = () => {
    return <LinearGradient
        colors={["#853E17", "transparent"]}
        style={Styles.header}
    >
        <Image
            source={{ uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/a8a32347b156a3a3f0ba80ecfcae1752" }}
            style={{ height: 50, width: 50, marginTop: 25, marginLeft: "3%" }}
        />
        <Text
            style={Styles.headerText}
        >
            Algorithm Visualization
        </Text>
        <TouchableOpacity>
            <Image
                source={{
                    uri: "https://cdn5.vectorstock.com/i/1000x1000/90/54/edit-profile-icon-vector-22989054.jpg",
                }}
                style={{
                    height: 40,
                    width: 40,
                    marginTop: 25,
                    marginRight: "3%",
                    borderRadius: 50,
                }}
            />
        </TouchableOpacity>
    </LinearGradient>
    // }
}
const Home = () => {
    return <>
        <View style={{ flex: 1, backgroundColor: "#F4DEC6" }}>
            <Header />

        </View>
    </>
}
export default Home;