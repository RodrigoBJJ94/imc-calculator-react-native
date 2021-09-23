import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3695136153697131/3714273012';

export default function () {
    const [visible, setVisible] = useState(true);
    return (
        <View >
            <Modal
                animationType='slide'
                visible={visible}
            ><View>
                    <Text style={styles.titleModal}>Calculadora de IMC</Text>
                    <TouchableOpacity
                        style={styles.touch}
                        onPress={() => setVisible(false)}
                    ><Text style={styles.touchText}>COMEÇAR</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ads}>
                    <BannerAd
                        unitId={adUnitId}
                        size={BannerAdSize.LARGE_BANNER}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                        }}
                    />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    titleModal: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 60,
        marginBottom: 30,
    },
    touch: {
        backgroundColor: 'rgb(81, 2, 100)',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchText: {
        color: 'white'
    },
    ads: {
       alignItems: 'center',
       marginTop: 275, 
    }
})