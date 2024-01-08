import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo, Feather, FontAwesome5, Ionicons, Octicons } from '@expo/vector-icons'
import ProgressBar from 'react-native-progress/Bar';

const SummaryGrid = () => {
    return (
        < View style={styles.contentStyle}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}>
                <View style={{ width: '48%', marginBottom: 20, ...styles.wrapper }}>
                    <Entypo name="signal" size={26} color="#E30613" style={{ marginBottom: 15 }} />
                    <Text style={{ fontSize: 14, fontWeight: 600, color: "#949494" }}>Your data</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                    }}>
                        <Text style={{ fontSize: 22, fontWeight: 800, color: "#000" }}>20.94</Text>
                        <Text style={{ fontSize: 16, fontWeight: 700, color: "#000" }}> GB </Text>

                    </View>
                </View>

                <View style={{ width: '48%', marginBottom: 20, ...styles.wrapper }}>
                    <Entypo name="wallet" size={26} color="#E30613" style={{ marginBottom: 15 }} />
                    <Text style={{ fontSize: 14, fontWeight: 600, color: "#949494" }}>Your airtime balance</Text>
                    <Text style={{ fontSize: 22, fontWeight: 800, color: "#000" }}> ₵ 14.32</Text>
                </View>

                <View style={{ width: '48%', marginBottom: 20, ...styles.wrapper }}>
                    <Ionicons name="document-text-outline" size={26} color="#E30613" style={{ marginBottom: 15 }} />
                    <Text style={{ fontSize: 20, fontWeight: 800, color: "#000" }}>Pay Bill</Text>
                    <Text style={{ fontSize: 14, fontWeight: 600, color: "#949494" }}>Make payments for your postpaid services</Text>
                </View>
            </View>
            <Text style={{ fontSize: 20, fontWeight: 800, color: "#000" }}>Manage</Text>
            <View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                }}>
                    <View style={{ width: '48%', marginBottom: 20, ...styles.wrapper }}>
                        <Octicons name="plus-circle" size={30} color="#666A78" style={{ marginBottom: 30 }} />
                        <Text style={{ fontSize: 16, fontWeight: 700, color: "#212121" }}>Top Up Airtime Or Data</Text>
                    </View>

                    <View style={{ width: '48%', marginBottom: 20, ...styles.wrapper }}>
                        <Feather name="smartphone" size={30} color="#666A78" style={{ marginBottom: 30 }} />
                        <Text style={{ fontSize: 16, fontWeight: 700, color: "#212121" }}>My Subscriptions</Text>
                    </View>

                    <View style={{ width: '48%', marginBottom: 20, ...styles.wrapper }}>
                        <Ionicons name="sparkles" size={30} color="#666A78" style={{ marginBottom: 30 }} />
                        <Text style={{ fontSize: 16, fontWeight: 700, color: "#212121" }}>Value-Added Services</Text>
                    </View>

                    <View style={{ width: '48%', marginBottom: 20, ...styles.wrapper }}>
                        <Octicons name="gift" size={30} color="#666A78" style={{ marginBottom: 30 }} />
                        <Text style={{ fontSize: 16, fontWeight: 700, color: "#212121" }}>Red Loyalty Rewards</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SummaryGrid

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
