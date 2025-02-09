import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { CitasScreenTabProp } from '../../types/navigation-prop';
import OptionCard from '../../components/OptionCard';
import { OpcionCita } from '../../types';
import TitleSection from '../../components/TitleSection';

export default function CitasScreen({ navigation }: CitasScreenTabProp) {
  const servicios: OpcionCita[] = [
    { id: '1', title: 'Consulta Médica', icon: "../../assets/consulta-medica.png" },
    { id: '2', title: 'Laboratorio', icon: "../../assets/laboratorio.png" },
    { id: '3', title: 'Imágenes y Procedimiento' },
    { id: '4', title: 'Terapía Física' },
    { id: '5', title: 'Recetas médicas' },
    { id: '6', title: 'Orden externa' },
  ];

  const citas = [
    { id: '1', title: 'Próximas citas' },
    { id: '2', title: 'Historial de citas' }
  ];

  const sections = [
    {
      title: 'Servicios',
      data: servicios,
      renderItem: ({ item }: { item: OpcionCita }) => (
        <View style={styles.cardContainer}>
          <OptionCard option={item} />
        </View>
      ),
      numColumns: 2,
    },
    {
      title: 'Citas',
      data: citas,
      renderItem: ({ item }: { item: OpcionCita }) => (
        <View style={styles.cardContainer}>
          <OptionCard option={item} />
        </View>
      ),
     numColumns: 2,
    },
  ];

  return (
    <FlatList
      data={sections}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View>
          <TitleSection title={item.title} />
          <FlatList
            data={item.data}
            keyExtractor={(subItem) => subItem.id}
            renderItem={item.renderItem}
            numColumns={item.numColumns} 
            contentContainerStyle={styles.list}
          />
        </View>
      )}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    padding: 10,
  },
  cardContainer: {
    padding: 5,
  },
  list: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});