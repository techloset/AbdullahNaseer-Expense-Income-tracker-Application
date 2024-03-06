// import {useEffect, useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {
//   fetchUserData,
//   updateUserInFirestore,
// } from '../../../store/slices/userSlice';

// const useUpdateProfile = () => {
//   const dispatch = useDispatch();
//   const [displayName, setDisplayName] = useState('');
//   const [email, setEmail] = useState('');

//   const user = useSelector(state => state.user.user);

//   useEffect(() => {
//     if (user) {
//       setDisplayName(user.displayName);
//       setEmail(user.email);
//     }
//   }, [user]);

//   const handleUpdateProfile = async () => {
//     try {
//      await dispatch(updateUserInFirestore({displayName, email}) as any);
//       console.log('displayName', displayName);
//       console.log('email', email);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return {displayName, setDisplayName, email, setEmail, handleUpdateProfile};
// };

// export default useUpdateProfile;

import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateUserInFirestore} from '../../../store/slices/userSlice'; // Import the action

const useUpdateUser = () => {
  const dispatch = useDispatch();
  const {user, isLoading, error} = useSelector(state => state.user); // Access user data and state from Redux

  const [displayName, setDisplayName] = useState(user?.displayName || ''); // Initialize with user's displayName or an empty string
  const [email, setEmail] = useState(user?.email || ''); // Initialize with user's email or an empty string
  const [updateError, setUpdateError] = useState(null); // State to store update errors

  const handleUpdateProfile = async () => {
    try {
      setUpdateError(null); // Clear previous errors
      await dispatch(updateUserInFirestore({displayName, email}));
      console.log('User data updated successfully!');
    } catch (error) {
      console.error('Error updating user data:', error);
      setUpdateError(error.message); // Set the error message
    }
  };

  return {
    displayName,
    email,
    setDisplayName,
    setEmail,
    updateError,
    handleUpdateProfile,
    isLoading,
  };
};

export default useUpdateUser;
