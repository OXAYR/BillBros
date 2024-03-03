import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebase/auth';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const submitLoginForm = () => {
        if (email.length !== 0 && password.length !== 0) {
            alert("Credentials entered");
            console.log("Email----------------->", email);
            console.log("Password------------->", password);

            signInWithEmailAndPassword(auth, email, password)
                .then(() => console.log("login Successfull"))
                .catch((err) => alert("login failed", err.message))
        } else {
            setError("Invalid Email or password");
        }
    }

    return (
        <SafeAreaView>
            <View className="bg-violet-100 h-40">
                <View className="flex flex-row">
                    <View className="basis-1/4">
                        <Text className="text-black font-black ml-5 mt-5">X</Text>
                    </View>
                    <View>
                        <TouchableOpacity className="mt-5 ml-20">
                            <Text className="text-blue-500 mx-4">Forgot your credentials?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View className="justify-center items-center m-12">
                <Text className="text-2xl font-bold mb-2">Let's Sign You in!</Text>
                <Text className="text-gray-500 font-bold mb-6">Welcome Back To BillBros</Text>
                <View className="w-full max-w-md ">
                    <TextInput
                        className="bg-gray-100 p-2 mb-4 rounded-lg"
                        placeholder="Enter Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput
                        className="bg-gray-100 p-2 mb-4 rounded-lg"
                        placeholder="Enter Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry
                    />
                    {error.length > 0 && <Text className="text-red-500 mb-2">{error}</Text>}
                    <TouchableOpacity
                        className="bg-blue-500 p-2 rounded-lg"
                        onPress={submitLoginForm}
                    >
                        <Text className="text-white text-center">Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="mt-4">
                        <Text className="text-blue-500 text-center">Create an account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
