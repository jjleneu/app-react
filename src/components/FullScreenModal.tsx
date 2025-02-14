// FullScreenModal.tsx

import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const FullScreenModal = ({ modalVisible, closeModal }: { modalVisible: boolean, closeModal: () => void }) => {
  return (
    <Modal
      visible={modalVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={closeModal}
    >
      {/* Fondo oscuro semitransparente */}
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>¡Este es un modal con BottomTab visible!</Text>

          {/* Botón para cerrar el modal */}
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <Text style={styles.buttonText}>Cerrar Modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-start',  // Alinea el modal en la parte superior
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro con algo de transparencia
  },
  modalContainer: {
    width: '100%', // Modal ocupa todo el ancho
    height: height - 100, // Ocupa toda la altura menos la altura de la barra BottomTab (~50px) y un margen
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    padding: 15,
    backgroundColor: '#FF5733',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default FullScreenModal;
