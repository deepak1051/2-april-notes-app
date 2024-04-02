import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {NoteContext} from '../context/noteContext';
import {Pocket} from 'react-native-feather';

const CreateNote = ({navigation}) => {
  const {handleAddNote} = useContext(NoteContext);

  const [title, setTitle] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CreateNote</Text>
      </View>

      <View>
        <TextInput
          style={styles.input}
          textAlignVertical="top"
          multiline={true}
          numberOfLines={20}
          onChangeText={prev => setTitle(prev)}
          value={title}
          returnKeyType="done"
          // onEndEditing={() => handleAddNote(title)}
          autoFocus={true}
        />
      </View>

      <Pressable
        style={styles.addButtonWrapper}
        title="Submit"
        onPress={() => {
          handleAddNote(title);
          navigation.navigate('Home');
        }}>
        {/* <Text style={styles.submitButtonText}>Save</Text> */}
        <Pocket height={24} width={24} style={styles.addButton} />
      </Pressable>
    </SafeAreaView>
  );
};

export default CreateNote;

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
    fontSize: 24,
  },

  input: {
    borderWidth: 0,
    borderColor: 'gray',
    borderRadius: 6,
    // height: 100,
    color: 'white',
    fontSize: 20,
    // paddingHorizontal: 4,
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
