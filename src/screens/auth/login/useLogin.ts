import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

interface LoginState {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  error: string | null;
  loading: boolean;
  handleLogin: () => Promise<void>;
  navigation: any; 
}


const useLogin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const [error, setError] = useState<string|null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError(null);
      const user = await auth().signInWithEmailAndPassword(email, password);
      console.log(user);
      console.log('login successful');
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    handleLogin,
    navigation,
  };
};

export default useLogin;
