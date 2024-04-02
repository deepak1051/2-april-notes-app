import React, {useContext, useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import {Plus, Trash} from 'react-native-feather';
import {NoteContext} from '../context/noteContext';

const Homepage = ({navigation}) => {
  const {notes, handleDelete} = useContext(NoteContext);

  console.log(notes);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>All notes</Text>
        <Text style={styles.noteCount}>{notes?.length} notes</Text>
      </View>

      <FlatList
        keyExtractor={item => item.id.toString()}
        data={notes}
        renderItem={({item}) => (
          <Pressable
            style={styles.noteWrapper}
            onPress={() => navigation.navigate('SingleNote', {id: item.id})}>
            <Text style={styles.noteTitle}>
              {`${new Date(item.date).getDate()}/${
                new Date(item.date).getMonth() + 1
              }`}
            </Text>
            <Text style={styles.noteTitle}>{item.title}</Text>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDelete(item.id)}>
              <Trash width={20} height={20} color={'lightblue'} />
            </TouchableOpacity>
          </Pressable>
        )}
      />

      <Pressable
        style={styles.addButtonWrapper}
        onPress={() => navigation.navigate('CreateNote')}>
        <Plus height={34} width={34} style={styles.addButton} />
      </Pressable>
    </SafeAreaView>
  );
};

export default Homepage;

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
  noteCount: {
    color: '#8F8F8F',
  },

  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
  submitButton: {
    padding: 10,
    marginVertical: 10,
    fontWeight: 'bold',
    backgroundColor: 'black',
    borderRadius: 4,

    justifyContent: 'flex-end',
    color: 'white',
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
    height: 62,
    width: 62,
    borderRadius: 50,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    right: 20,
  },

  addButton: {
    fontWeight: '600',
    color: 'white',
  },
});
