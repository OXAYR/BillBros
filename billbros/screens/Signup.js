import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { auth } from 'firebase/auth';

export default function Signup() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState('');

    const validateInputs = () => {
        if (!name || !number || !email || !password || !confirmPassword) {
            setError("All fields are required");
            return false;
        } else if (password !== confirmPassword) {
            setError("Password and Confirm Password must match");
            return false;
        } else if (number.length !== 11) {
            setError("Phone number must contain 11 digits");
            return false;
        }
        return true;
    }

    const handleSignUp = () => {
        if (validateInputs()) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    Alert.alert("Success", "Account created successfully");
                    navigation.navigate('Login');
                })
                .catch((error) => {e
                    setError(error.message);
                });
        }
    }
    
    return (
        <SafeAreaView>
           
            <View className="justify-center items-center m-12">
                <Text className="text-2xl font-bold mb-2">Let's Sign You Up!</Text>
                <Text className="text-gray-500 font-bold mb-6">Welcome To BillBros</Text>
                <View className="w-full max-w-md ">

                    <TextInput
                        className="border-2 border-gray-300 p-2 mb-4 rounded-lg"
                        placeholder="Enter Name"
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                    <TextInput
                        className="border-2 border-gray-300 p-2 mb-4 rounded-lg"
                        placeholder="Enter Phone Number"
                        value={number}
                        onChangeText={text => setNumber(text)}
                    />
                    <TextInput
                        className="border-2 border-gray-300 p-2 mb-4 rounded-lg"
                        placeholder="Enter Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput
                        className="border-2 border-gray-300 p-2 mb-4 rounded-lg"
                        placeholder="Enter Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry
                    />
                    <TextInput
                        className="border-2 border-gray-300 p-2 mb-4 rounded-lg"
                        placeholder="Enter Confirm Password"
                        value={confirmPassword}
                        onChangeText={text => setConfirmPassword(text)}
                        secureTextEntry
                    />
                    {error.length > 0 && <Text className="text-red-500 mb-2">{error}</Text>}
                    <TouchableOpacity
                        className="bg-blue-500 p-2 rounded-lg"
                        onPress={handleSignUp}
                    >
                        <Text className="text-white text-center">Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="mt-4"
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text className="text-blue-500 text-center">Already have an account? Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
