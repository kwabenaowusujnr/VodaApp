
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo, Feather, FontAwesome5, Ionicons, Octicons } from '@expo/vector-icons'
import ProgressBar from 'react-native-progress/Bar';

const SummaryDetails = () => {
    return (
        < View style={styles.contentStyle}>


            <View style={styles.wrapper}>
                <Entypo name="signal" size={18} color="#E30613" />
                <ProgressBar height={12} width={340} progress={0.4} borderRadius={5} borderWidth={0} backgroundColor={"#D9D9D9"} color={"#E30613"} />
                <Text style={{ fontSize: 14, fontWeight: 500, color: "#949494" }}>Your data</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end'
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 800, color: "#000" }}>20.94</Text>
                        <Text style={{ fontSize: 14, fontWeight: 700, color: "#000" }}> GB left</Text>

                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end'
                    }}>
                        <Text style={{ fontSize: 14, fontWeight: 700, color: "#949494" }}>of </Text>
                        <Text style={{ fontSize: 20, fontWeight: 800, color: "#949494" }}>300</Text>
                        <Text style={{ fontSize: 14, fontWeight: 700, color: "#949494" }}> GB</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>

                <View style={{ width: '48%', ...styles.wrapper }}>
                    <Entypo name="wallet" size={22} color="#E30613" style={{ marginBottom: 20 }} />
                    <Text style={{ fontSize: 14, fontWeight: 600, color: "#949494" }}>Your airtime balance</Text>
                    <Text style={{ fontSize: 20, fontWeight: 800, color: "#000" }}> ₵ 14.32</Text>
                </View>

                <View style={{ width: '48%', ...styles.wrapper }}>
                    <Ionicons name="document-text-outline" size={22} color="#E30613" style={{ marginBottom: 20 }} />
                    <Text style={{ fontSize: 20, fontWeight: 800, color: "#000" }}>Pay Bill</Text>
                    <Text style={{ fontSize: 14, fontWeight: 600, color: "#949494" }}>Make payments for your postpaid services</Text>
                </View>
            </View>
            <Text style={{ fontSize: 20, fontWeight: 800, color: "#000" }}>Manage</Text>
            <View>
                <View style={{ ...styles.wrapper, borderRadius: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: 42, height: 42, borderRadius: 30, backgroundColor: '#e3e3de', alignItems: 'center', justifyContent: 'center' }}>
                        <Octicons name="plus-circle" size={24} color="#666A78" />
                    </View>
                    <View style={{ flex: 1, marginStart: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: 700, color: "#212121" }}>Top up airtime or data</Text>
                        <Text style={{ fontSize: 12, fontWeight: 500, color: "#949494" }}>Recharge airtime or data to this phone</Text>
                    </View>
                    <FontAwesome5 name="chevron-right" size={26} color="#666A78" />
                </View>
                <View style={{ ...styles.wrapper, borderRadius: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: 42, height: 42, borderRadius: 30, backgroundColor: '#e3e3de', alignItems: 'center', justifyContent: 'center' }}>
                        <Feather name="smartphone" size={24} color="#666A78" />
                    </View>
                    <View style={{ flex: 1, marginStart: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: 700, color: "#212121" }}>My Subscriptions</Text>
                        <Text style={{ fontSize: 12, fontWeight: 500, color: "#949494" }}>Manage all your subscriptions</Text>
                    </View>
                    <FontAwesome5 name="chevron-right" size={26} color="#666A78" />
                </View>
                <View style={{ ...styles.wrapper, borderRadius: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: 42, height: 42, borderRadius: 30, backgroundColor: '#e3e3de', alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons name="sparkles" size={24} color="#666A78" />
                    </View>
                    <View style={{ flex: 1, marginStart: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: 700, color: "#212121" }}>Value-Added Services</Text>
                        <Text style={{ fontSize: 12, fontWeight: 500, color: "#949494" }}>All your Value-Added Services</Text>
                    </View>
                    <FontAwesome5 name="chevron-right" size={26} color="#666A78" />
                </View>
                <View style={{ ...styles.wrapper, borderRadius: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: 42, height: 42, borderRadius: 30, backgroundColor: '#e3e3de', alignItems: 'center', justifyContent: 'center' }}>
                        <Octicons name="gift" size={24} color="#666A78" />
                    </View>
                    <View style={{ flex: 1, marginStart: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: 700, color: "#212121" }}>Red Loyalty Rewards</Text>
                        <Text style={{ fontSize: 12, fontWeight: 500, color: "#949494" }}>Our best Red Loyalty Rewards</Text>
                    </View>
                    <FontAwesome5 name="chevron-right" size={26} color="#666A78" />
                </View>
            </View>
        </View>
    )
}

export default SummaryDetails

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
