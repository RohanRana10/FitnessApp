import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../constants/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import NAMES from '../constants/names';
import SPACING from '../constants/spacing';
import RADIUS from '../constants/radius';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let [fontsLoaded] = useFonts({
        "Outfit-Regular": require('../assets/fonts/Outfit-Regular.ttf')
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView enabled behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} style={{ backgroundColor: COLORS.background, flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <StatusBar barStyle={'light-content'} backgroundColor={'#000000'} />
                    <View style={{ top: hp(18), height: hp(68), width: wp(100), alignItems: 'center', gap: SPACING.XXXL }}>
                        <View style={{ width: wp(90), height: hp(17), justifyContent: 'space-between', gap: SPACING.XS }}>
                            <Text style={{ color: COLORS.title, fontWeight: '400', fontSize: hp(4.2), width: wp(50), height: hp(5), lineHeight: hp(5.3), fontFamily: 'Outfit-Regular' }}>
                                {NAMES.appTitle}
                            </Text>
                            <Text style={{ width: wp(90), height: hp(4), fontWeight: '400', fontSize: hp(3.1), lineHeight: hp(3.8), color: COLORS.white, fontFamily: 'Outfit-Regular' }}>
                                Login to your account
                            </Text>
                            <Text style={{ width: wp(90), height: hp(5.9), fontWeight: '400', fontSize: hp(2.1), lineHeight: hp(3.2), letterSpacing: hp(0.06), color: COLORS.gray, fontFamily: 'Outfit-Regular' }}>
                                Please enter your email address to proceed to your account.
                            </Text>
                        </View>

                        <View style={{ width: wp(100), height: hp(35.9), alignItems: 'center' }}>
                            <View style={{ width: wp(90), height: hp(28.3), gap: SPACING.XL }}>
                                <View style={{ width: wp(90), height: hp(19.9), gap: SPACING.M }}>
                                    <View style={{ width: wp(90), height: hp(9.1), gap: SPACING.S }}>
                                        <Text style={{ color: COLORS.textDarker, fontWeight: '400', width: wp(9.6), height: hp(2.5), fontSize: hp(1.8), lineHeight: hp(2.8), fontFamily: 'Outfit-Regular' }}>
                                            Email
                                        </Text>
                                        <View style={{ width: wp(90), height: hp(5.54), borderRadius: RADIUS.S, padding: SPACING.S, gap: SPACING.S, backgroundColor: COLORS.bgSurfaceLighter, flexDirection: 'row', alignItems: 'center' }}>
                                            <AntDesign name="user" size={hp(2.4)} color={COLORS.textDarker} />
                                            <TextInput
                                                onChangeText={text => setEmail(text)}
                                                value={email}
                                                style={{ color: COLORS.textDarker, fontWeight: '400', fontSize: hp(1.8), lineHeight: hp(2.8), width: wp(76.5), height: hp(2.5), fontFamily: 'Outfit-Regular' }}
                                                placeholder='Enter your email address'
                                                placeholderTextColor={COLORS.textDarker}
                                            />
                                        </View>
                                    </View>

                                    <View style={{ width: wp(90), height: hp(9.1), gap: SPACING.S }}>
                                        <Text style={{ color: COLORS.textDarker, fontWeight: '400', width: wp(17.5), height: hp(2.5), fontSize: hp(1.8), lineHeight: hp(2.8), fontFamily: 'Outfit-Regular' }}>
                                            Password
                                        </Text>
                                        <View style={{ width: wp(90), height: hp(5.54), borderRadius: RADIUS.S, padding: SPACING.S, gap: SPACING.S, backgroundColor: COLORS.bgSurfaceLighter, flexDirection: 'row', alignItems: 'center' }}>
                                            <Ionicons name="key-outline" size={hp(2.4)} color={COLORS.textDarker} />
                                            <TextInput
                                                onChangeText={text => setPassword(text)}
                                                value={password}
                                                style={{ color: COLORS.textDarker, fontWeight: '400', fontSize: hp(1.8), lineHeight: hp(2.8), width: wp(76.5), height: hp(2.5), fontFamily: 'Outfit-Regular' }}
                                                placeholder='Password'
                                                placeholderTextColor={COLORS.textDarker}
                                            />
                                        </View>
                                    </View>

                                </View>

                                <TouchableOpacity style={{ width: wp(90), height: hp(5.41), backgroundColor: COLORS.bgHighlight, paddingHorizontal: hp(2), paddingVertical: hp(1.3), gap: SPACING.S, borderRadius: RADIUS.S }}>
                                    <Text style={{ alignSelf: 'center', fontSize: hp(2.1), fontWeight: '400', color: COLORS.black, fontFamily: 'Outfit-Regular' }}>
                                        Continue
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ width: wp(90), height: hp(2.95), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '400', fontSize: hp(2.1), lineHeight: hp(3.1), color: COLORS.textDarker, fontFamily: 'Outfit-Regular' }}>
                                Don{'\''}t Have Account?&nbsp;
                            </Text>
                            <TouchableOpacity>
                                <Text style={{ fontWeight: '400', fontSize: hp(2.1), lineHeight: hp(3.1), color: COLORS.bgHighlight, fontFamily: 'Outfit-Regular' }}>Signup</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})