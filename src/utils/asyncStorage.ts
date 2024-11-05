import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setItem(key: string, value: string): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    return false;
  }
}


export async function getItem(key: string): Promise<string | undefined> {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? value : undefined; // Return value or undefined if null
  } catch (error) {
    console.error("Error getting item from AsyncStorage:", error); // Optional: Log the error for debugging
    return undefined; // Return undefined on error
  }
}


export async function removeItem(key: string): Promise<boolean> {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}

export async function emptyStorage(): Promise<void> {
  try {
    const keys = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove([...keys]); // Spread operator to convert readonly array to a mutable one
  } catch (error) {
    // console.error('Error clearing app data.');
  }
}
