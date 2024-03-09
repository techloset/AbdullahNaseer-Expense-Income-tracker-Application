import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 116,
    width: 116,
  },
  UpperContainer: {
    backgroundColor: '#FD3C4A',
    padding: 16,
    flex: 2,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
    position: 'relative',
  },
  UpperContainerText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  uppercontainerCashText: {
    fontSize: 48,
    fontWeight: '700',
    color: 'white',
  },
  uppercontainerHeadingText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    marginVertical: 8,
  },
  upperContainerDateText: {
    fontSize: 13,
    fontWeight: '500',
    color: 'white',
  },
  lowerContainer: {
    flex: 4,
    padding: 16,
    position: 'relative',
  },
  CategoryContainer: {
    borderWidth: 1,
    borderColor: '#91919F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: 'white',
    marginHorizontal: 16,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 16,
    position: 'absolute',
    top: 270,
  },
  preview: {
    width: '100%',
    height: 116,
    borderRadius: 16,
    backgroundColor: '#7F3DFF',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerContainerHeading: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 8,
    color: '#91919F',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '80%',
  },
  editButton: {
    position: 'absolute',
    bottom: 16,
    width: '100%',
    marginHorizontal: 16,
  },
});
