import React from 'react';
import Styles from './Styles';
import { View } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3695136153697131/8188704647';

export default function Banner() {
    return (
        <View style={Styles.ads}>
            <BannerAd
                unitId={adUnitId}
                size={BannerAdSize.BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
            />
        </View>
    );
};
