import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import AccordionComponent from '../Components/AccordionComponent';
import {COLORS} from '../Utils/COLORS';

const data = [
  {
    id: 0,
    title: 'Cillum eiusmod fug ea est nostrud.',
    description:
      'Irure laborum non proident esse ut consectetur in voluptate irure. Sint officia culpa cupidatat voluptate ex esse mollit deserunt commodo. Qui excepteur sunt irure irure non mollit cillum.',
  },
  {
    id: 1,
    title: 'Cillum eiusmod fug ea est nostrud.',
    description:
      'Irure laborum non proident esse ut consectetur in voluptate irure. Sint officia culpa cupidatat voluptate ex esse mollit deserunt commodo. Qui excepteur sunt irure irure non mollit cillum.',
  },
  {
    id: 3,
    title: 'Cillum eiusmod fug ea est nostrud.',
    description:
      'Irure laborum non proident esse ut consectetur in voluptate irure. Sint officia culpa cupidatat voluptate ex esse mollit deserunt commodo. Qui excepteur sunt irure irure non mollit cillum.',
  },
  {
    id: 4,
    title: 'Cillum eiusmod fug ea est nostrud.',
    description:
      'Irure laborum non proident esse ut consectetur in voluptate irure. Sint officia culpa cupidatat voluptate ex esse mollit deserunt commodo. Qui excepteur sunt irure irure non mollit cillum.',
  },
  {
    id: 5,
    title: 'Cillum eiusmod fug ea est nostrud.',
    description:
      'Irure laborum non proident esse ut consectetur in voluptate irure. Sint officia culpa cupidatat voluptate ex esse mollit deserunt commodo. Qui excepteur sunt irure irure non mollit cillum.',
  },
  {
    id: 6,
    title: 'Cillum eiusmod fug ea est nostrud.',
    description:
      'Irure laborum non proident esse ut consectetur in voluptate irure. Sint officia culpa cupidatat voluptate ex esse mollit deserunt commodo. Qui excepteur sunt irure irure non mollit cillum.',
  },
  {
    id: 7,
    title: 'Cillum eiusmod fug ea est nostrud.',
    description:
      'Irure laborum non proident esse ut consectetur in voluptate irure. Sint officia culpa cupidatat voluptate ex esse mollit deserunt commodo. Qui excepteur sunt irure irure non mollit cillum.',
  },
];

function ListingScreen(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={data.id}
        renderItem={({item}) => (
          <AccordionComponent
            id={item.id}
            title={item.title}
            description={item.description}
          />
        )}
      />
      {/* <Text>New App</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});

export default ListingScreen;
