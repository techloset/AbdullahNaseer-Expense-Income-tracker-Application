import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toggleButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  toggleButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 10,
    backgroundColor: '#FCFCFC',
  },
  activeButton: {
    backgroundColor: 'yellow',
  },
  toggleButtonText: {
    color: '#333',
  },
  displayContainer: {
    flex: 1,
    paddingTop: '10%',
    paddingHorizontal: 25,
  },
  displayContainerHeading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FCFCFC',
  },
  displayContainerCash: {
    fontSize: 64,
    fontWeight: '600',
    color: '#FCFCFC',
  },
  inputStyle: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    color: '#FCFCFC',
    fontSize: 64,
    fontWeight: '600',
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  textInput: {
    height: 56,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'whitesmoke',
    paddingHorizontal: 10,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fileInput: {
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  button: {
    margin: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  categoryItemContainer: {
    // borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    margin: 16,
  },
  categoryItemText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
  fileModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  attachmentPopup: {
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 20,
  },
  continueButton: {
    margin: 16,
  },
  ImagePreviewContainer: {
    height: 90,
    position: 'relative',
    width: 90,
    marginHorizontal: 16,
  },
  previewImage: {
    width: 90,
    height: 90,
  },
  imageRemoveBtn: {
    position: 'absolute',
    bottom: 70,
    left: 75,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#00000052',
    borderWidth: 1,
    borderColor: 'whitesmoke',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  imageRemoveBtnText: {
    color: 'white',
  },
});
