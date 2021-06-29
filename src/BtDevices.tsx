import * as React from 'react'

import { StyleSheet, View, Text, useColorScheme, } from 'react-native'
import BluetoothDevices, { DeviceType } from 'react-native-bluetooth-devices'
import {  Colors } from 'react-native/Libraries/NewAppScreen';

export default function BtDevices() {

    const isDarkMode = useColorScheme() === 'dark';

    const [btDevice, setBtDevice] = React.useState([])

    React.useEffect(() => {
        BluetoothDevices.startScan()
        BluetoothDevices.addEventListener("onConnectedDevices", (res: {
            devices: Array<DeviceType>
            }) => {
                setBtDevice(res.devices)
                console.log("khushi",res.devices, isDarkMode)

            // BluetoothDevices.connectToDevice(res.devices[0].id)
            // BluetoothDevices.disconnect()
            }
        )  
    }, [])

    return (
        <View >
            <Text style={{ fontSize: 20 }}>Khusbhu's Demo App</Text>
            <Text style={{ fontSize: 15, paddingBottom: 20 }}>Bluetooth Devices:</Text>

        
            {btDevice.map((item, index) => {
                return(
                    <View key={index} style={[styles.container, {backgroundColor: item.isConnected ? 'green' : 'white'}]}>
                        <Text>{item.name}</Text>
                        <Text style={{fontSize: 10, color: 'grey'}}>{item.id}</Text>
                    </View>
                )
            })}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderColor:'grey',
        borderWidth: 1,
        height: 50,
        padding: 5
    },
    box: {
        width: 60,
        height: 60,
        marginVertical: 20,
    },
})