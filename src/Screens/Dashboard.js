import React, {useState, useEffect} from 'react';
import {Text, Alert, StyleSheet} from 'react-native';
import {getProfile} from '../API/api';
import { SafeAreaView } from 'react-native-safe-area-context';

const Dashboard = ({route}) => {
  const {token} = route.params;
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = await getProfile(token);
        setProfile(userData);
        console.log(userData);
      } catch (error) {
        Alert.alert('Error', error.message);
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token]);

  if (!profile) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to Dashboard, {profile.name}</Text>{' '}
      <Text>Email: {profile.email}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  welcomeSection: {
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Dashboard;
