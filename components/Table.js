import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3695136153697131/8188704647';

export default function Table() {
    return (
        <View style={styles.block}>
            <Image
                style={styles.imageImc}
                source={require('../assets/img/imc.png')}
            />
            <View style={styles.ads}>
                <BannerAd
                    unitId={adUnitId}
                    size={BannerAdSize.BANNER}
                    requestOptions={{
                        requestNonPersonalizedAdsOnly: true,
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        marginBottom: 15
    },
    imageImc: {
        width: '100%',
        resizeMode: 'contain',
        marginTop: -48,
    },
    ads: {
        marginTop: -55,
        alignItems: 'center',
    }
});