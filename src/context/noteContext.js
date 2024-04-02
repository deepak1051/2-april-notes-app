import React, {useEffect, useState} from 'react';
import {createContext} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const NoteContext = createContext();

export const NoteContextProvider = ({children}) => {
  const [notes, setNotes] = useState([]);

  const handleAddNote = async title => {
    try {
      const newNote = {
        id: Date.now(),
        title: title,
        date: Date.now(),
      };
      const jsonValue = JSON.stringify([...notes, newNote]);
      await AsyncStorage.setItem('my-key', jsonValue);

      setNotes([...notes, newNote]);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('my-key');
        const _notes = jsonValue != null ? JSON.parse(jsonValue) : [];
        setNotes(_notes);
      } catch (e) {
        // error reading value
        console.log(e);
      }
    };
    fetchNotes();
  }, []);

  const handleDelete = async id => {
    setNotes(prev => prev.filter(note => note.id !== id));
    const jsonValue = JSON.stringify(notes.filter(note => note.id !== id));
    await AsyncStorage.setItem('my-key', jsonValue);
  };

  const handleEditNote = async note => {
    setNotes(prev => prev.map(n => (n.id === note.id ? note : n)));

    const jsonValue = JSON.stringify(
      notes.map(n => (n.id === note.id ? note : n)),
    );
    await AsyncStorage.setItem('my-key', jsonValue);
  };

  return (
    <NoteContext.Provider
      value={{notes, handleAddNote, handleDelete, handleEditNote}}>
      {children}
    </NoteContext.Provider>
  );
};
