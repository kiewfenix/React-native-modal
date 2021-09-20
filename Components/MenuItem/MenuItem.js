import React from 'react';
import {
    View,
    Button,
    Image,
    Text,
    Dimensions,
} from 'react-native';
import ModalPop from '../Modal/ModalPop.js';
import Download from '../QrCode/DownloadQr.js';
import QrCode from '../QrCode/QrCode.js';
import styles from './MenuItem.styles';
import Near from '../../assets/svg/Near.js';

export default function MenuItem({ data, nearPrice, euroPrice, description, consistOf }) {
    const [visible, setVisible] = React.useState(false);
    const windowHeightPercent = Dimensions.get('window').height / 100;

    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <ModalPop visible={visible} setVisible={() => setVisible(false)}>

                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/Burger.png')}
                        style={{ height: 30 * windowHeightPercent, width: 30 * windowHeightPercent, marginVertical: '-30%', marginBottom: 0 }}
                    />
                </View>
                <View style={{ marginVertical: '1%', paddingHorizontal: '5%' }}>
                    <Text style={{ fontSize: 3 * windowHeightPercent, fontWeight: 'bold', textAlign: 'center' }}>
                        {description}
                    </Text>
                </View>
                <View style={{ paddingHorizontal: '5%' }}>
                    <Text style={{ fontSize: 2.5 * windowHeightPercent, textAlign: 'center' }}>
                        {consistOf}
                    </Text>
                </View>
                <View style={{ paddingHorizontal: '5%', paddingVertical: '4%' }}>
                    <Text style={{ fontSize: 2.7 * windowHeightPercent, textAlign: 'center' }}>
                        {data}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', paddingVertical: '4%' }}>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', paddingHorizontal: '5%' }} >
                        <Near
                            style={{ height: 3 * windowHeightPercent, width: 3 * windowHeightPercent }}
                        />
                        <Text style={{ fontSize: 5.5 * windowHeightPercent, fontWeight: 'bold', paddingHorizontal: '2%' }}>
                            {nearPrice}
                        </Text>
                        <Text style={{ fontSize: 2.1 * windowHeightPercent }}>
                            € {euroPrice}
                        </Text>
                    </View>
                </View>
                <View style={{ marginVertical: '1%', paddingHorizontal: '5%', paddingVertical: '2%' }}>
                    <Text style={{ fontSize: 2.8 * windowHeightPercent, textAlign: 'center', fontWeight: 'bold' }}>
                        QR paid order
                    </Text>
                </View>
                <View style={styles.qrBlock}>
                    <View style={{ flexDirection: 'row', flex: 2, justifyContent: "flex-end", marginRight: '5%', marginLeft: "55%", marginTop: '5%', marginBottom: '55%' }}>
                        <QrCode windowHeightPercent={windowHeightPercent} />
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginBottom: '55%', justifyContent: 'flex-end', marginHorizontal: '6%' }}>
                        <View style={{ alignItems: 'center' }}>
                            <Download windowHeightPercent={windowHeightPercent} />
                        </View>
                    </View>
                </View>
            </ModalPop >
            <Button title="Open" onPress={() => setVisible(true)} />
        </View >

    );
}