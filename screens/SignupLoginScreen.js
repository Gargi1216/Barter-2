import React from 'react';
import {View,StyleSheet,Text,Image,TextInput,TouchableOpacity,Alert} from 'react-native';
import exchangeAnimation from '../components/BarterSystem'
import db from '../config';
import firebase from 'firebase';

export default class SignupLoginScreen extends React.Component{
    constructor(){
        super();
        this.state({
            emailId:'',
            password:''
        })
    }

    userLogin = (emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            return alert("Login Successful")
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            return alert(errorMessage)
        })
    }

    userSignUp = (email,password)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((response)=>{
            return alert("User Added Successfully")
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            return alert(errorMessage)
        })
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style={styles.profileContainer}>
                    <exchangeAnimation/>
                    <Text style={styles.title}>Barter App</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TextInput
                    style={styles.loginBox}
                    placeholder="example@barter.com"
                    placeholderTextColor="#ff5722"
                    keyboardType='email-address'
                    onChangeText={(text)=>{
                        this.setState({
                            emailId:text
                        })
                    }}
                    />

                    <TextInput
                    style={styles.loginBox}
                    placeholder="password"
                    secureTextEntry={true}
                    placeholderTextColor="#ff5722"
                    onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })
                    }}
                    />

                    <View>
                    <TouchableOpacity 
                    style={[styles.button,{marginBottom:10}]}
                    onPress={()=>{this.userLogin(this.state.emailId,this.state.password)}}
                    >
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{
                        this.userSignUp(this.state.emailId,this.state.password)
                    }}
                    >
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f8de85'
    },
    profileContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:65,
        fontWeight:'300',
        paddingBottom:30,
        color:'#ff3d00'
    },
    loginBox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        borderColor:'#ff8a65',
        fontSize:20,
        margin:10,
        paddingLeft:10
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:'#ff9800'
    },
    buttonText:{
        color:'#ff5722',
        fontWeight:'bold',
        fontSize:18
    },
    buttonContainer:{
        flex:1,
        alignItems:'center'
    }
})