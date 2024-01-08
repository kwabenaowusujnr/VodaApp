import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo, Feather, FontAwesome5, Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons'
import ProgressBar from 'react-native-progress/Bar';
import SummaryDetails from '../components/SummaryDetails';
import SummaryGrid from '../components/SummaryGrid';

export default function Home() {
    const [theme, setTheme] = useState('details');
    const icondetailsColor = (theme == 'details') ? '#E30613' : '#000';
    const icongridColor = (theme == 'grid') ? '#E30613' : '#000';
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f8f8" }} >
            <View style={styles.headerStyle}>
                <Image
                    source={require('../assets/logo_red.png')}
                    resizeMode='contain'
                    style={{
                        height: 40,
                        width: 40
                    }}></Image>
                <Text style={{ justifyContent: 'center', fontWeight: '500' }}>Good morning, Kwabena.</Text>
                <TouchableOpacity>
                    <MaterialIcons name="notifications" size={28} color="#E30613" />
                </TouchableOpacity>
            </View>

            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'flex-end', padding: 16, paddingBottom: 0 }}>
                    <TouchableOpacity onPress={() => { setTheme('details') }}>
                        <Entypo name="list" size={24} color={icondetailsColor} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setTheme('grid') }}>
                        <Entypo name="grid" size={24} color={icongridColor} />
                    </TouchableOpacity>
                </View>
                {
                    (theme == 'details') ?
                        <SummaryDetails />
                        :
                        <SummaryGrid />
                }

            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({

    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: "12%",
        padding: 20

    },
    contentStyle: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15,
        gap: 20,
        marginBottom: 60
    },
    wrapper: {
        backgroundColor: '#FBFBFB',
        padding: 16,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#edebeb',
        gap: 10
    }
})
