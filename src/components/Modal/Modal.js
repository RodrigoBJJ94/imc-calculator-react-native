import React, { useState } from 'react';
import { View, Modal } from 'react-native';
import ModalTitle from './ModalTitle';
import ModalButton from './ModalButton';
import ModalBanner from './ModalBanner';

export default function () {
    const [visible, setVisible] = useState(true);
    return (
        <View >
            <Modal animationType='slide' visible={visible}>
                <ModalTitle />
                <ModalButton setVisible={setVisible} />
                <ModalBanner />
            </Modal>
        </View>
    );
};
