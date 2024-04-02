import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {NoteContext} from '../context/noteContext';
import {Edit} from 'react-native-feather';

const SingleNote = ({route, navigation}) => {
  const {notes} = useContext(NoteContext);

  const {id} = route.params;

  const note = notes.find(n => n.id === id);

  console.log(note);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Note</Text>
      </View>

      <View style={styles.noteWrapper}>
        <Text style={styles.noteTitle}>{note.title}</Text>
      </View>

      <Pressable
        style={styles.addButtonWrapper}
        onPress={() => {
          navigation.navigate('EditNote', {
            id: id,
          });
        }}>
        <Edit height={24} width={24} style={styles.addButton} />
      </Pressable>
    </SafeAreaView>
  );
};

export default SingleNote;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#000000',
  },

  header: {
    color: 'white',
    paddingVertical: 24,
    paddingHorizontal: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 32,
  },

  noteWrapper: {
    backgroundColor: '#383838',
    marginBottom: 10,
    padding: 10,
    minHeight: 120,
    borderRadius: 10,
    position: 'relative',
  },
  noteTitle: {
    fontSize: 18,
    // color: 'black',
    color: '#8F8F8F',
  },
  deleteButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },

  addButtonWrapper: {
    backgroundColor: '#4F67D3',
    height: 52,
    width: 52,
    borderRadius: 50,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 30,
    right: 20,
  },

  addButton: {
    fontWeight: '600',
    color: 'white',
  },
});
