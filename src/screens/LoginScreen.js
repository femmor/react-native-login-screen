import React from 'react'
import { AppLoading } from 'expo';
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler'

const LoginScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View>
                <Text style={styles.bigText}>Doggy Care</Text>
                <Text style={styles.desc}>Happy home for a pet is a happy home for you</Text>
                <TouchableOpacity>
                    <Text style={styles.signInButton}>Sign In</Text>
                </TouchableOpacity>
            </View>
            <Image source={require("../../assets/dog.png")} style={styles.dogImage}/>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: "#336287",
        ...StyleSheet.absoluteFillObject,
        justifyContent: "space-between"
    },

    dogImage: {
        alignSelf: "flex-end"
    },
    bigText: {
        fontSize: 60,
        color: "white",
        marginVertical: 30,
        textAlign: 'center',
    },
    desc: {
        color: "white",
        marginVertical: 10,
        textAlign: "center",
        lineHeight: 16,
        opacity: 0.7,
        fontSize: 16
    },
    signInButton: {
        backgroundColor: "tomato",
        alignSelf: 'center',
        marginVertical: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        color: "white",
    }
})

export default LoginScreen


