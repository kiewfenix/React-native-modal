import React from 'react';
import {
  View,
  Modal,
  Animated,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import styles from './ModalPop.styles';
import Close from '../../assets/svg/Close';

export default function ModalPop({ visible, children, setVisible }) {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  const windowHeightPercent = Dimensions.get('window').height / 100;
  return (
    <Modal transparent visible={showModal}>

      <View style={styles.modalBackGround}>
        <Animated.View
          style={[{ transform: [{ scale: scaleValue }] }]}>
          <View style={styles.closeContainer} >
            <TouchableOpacity onPress={() => setVisible(false)} >
              <Close
                width={2 * windowHeightPercent}
                height={2 * windowHeightPercent}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
        <Animated.View
          style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};