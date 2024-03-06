import {useState} from 'react';
import auth from '@react-native-firebase/auth';
// import 
const useProfile = () => {
  const [confirmAlert, setConfirmAlert] = useState(false);

  //   const handleConfirmAlert = () => {
  //     setConfirmAlert(!confirmAlert);
  //   };

  
  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    setConfirmAlert(false);
  };
  const handleCancelSignOut = () => {
    setConfirmAlert(false);
  };

  return {confirmAlert, setConfirmAlert, handleCancelSignOut, handleSignOut};
};

export default useProfile;
