import * as SecureStore from 'expo-secure-store';

const getUserSession = async () => {
  try {
    const session = await SecureStore.getItemAsync('userSession');
    console.log(session)
    return session;
  } catch (error) {
    console.error('Error retrieving session:', error);
    return null;
  }
};

export default getUserSession