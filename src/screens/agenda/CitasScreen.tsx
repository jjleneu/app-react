import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CitasScreenTabProp } from '../../types/navigation-prop';
import OptionCard from '../../components/OptionCard';
import { OpcionCita } from '../../types';
import TitleSection from '../../components/TitleSection';
import { citas, servicios } from '../../db';

export default function CitasScreen({ navigation }: CitasScreenTabProp) {
  

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
    <>
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>
            Citas
        </Text>
      </View>
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
    </>
    
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
  tituloContainer: {
    width: '100%',
    backgroundColor:'#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  titulo: {
    fontSize: 20,
    fontWeight:'bold'
  }
});