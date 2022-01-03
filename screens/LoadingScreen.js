import React, {useEffect} from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { auth } from '../firebase'

const LoadingScreen = ({navigation}) => {
    
    
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
                setTimeout(() => {
                    navigation.replace("Home")
                }, 2000);         
            }
            else{
                setTimeout(() => {
                    navigation.navigate("Login")
                }, 2000);               
            }
        })
    })
    
    return (
        <View style={styles.container}>
            <Text style={styles.loading}>Be Great</Text>
            <ActivityIndicator size="large"/>
        </View>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
    loading: {
        fontSize: 48,
        color: '#fff',
        textShadowColor: '#fff', 
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 15, 
    }
})
