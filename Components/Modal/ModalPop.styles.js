import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',

  },
  modalContainer: {
    width: '95%',
    backgroundColor: 'white',
    paddingHorizontal: '5%',
    paddingVertical: '7%',
    borderRadius: 20,
    elevation: 20,
    alignItems: 'center',
    marginLeft: '2.5%'
  },
  closeContainer: {
    alignItems: 'flex-end',
    marginRight: '7%',
    marginBottom: '7%'
  }
});