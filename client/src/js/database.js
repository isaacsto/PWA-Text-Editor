import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  export const putDb = async (content)  => {
    console.log('PUT to database');
  
    const contactDb = await openDB('jate', 1);
    const tx = contactDb.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    const req = store.put({ id: 1, value: content });
    const res = await req;

    console.log('🚀 - data saved to the database', res);
  };
  
  // TODO: Add logic for a method that gets all the content from the database
  export const getDb = async () => {
    console.log('GET from the database');
  
    const contactDb = await openDB('jate', 1);
    const tx = contactDb.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const req = store.getAll();
    const res = await req;
    
    console.log('result.value', res);
    return res?.value;
  };
  
  
  initdb();
