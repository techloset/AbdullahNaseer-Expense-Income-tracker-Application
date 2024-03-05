import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserData} from '../../../store/slices/userSlice';

const useUpdateProfile = () => {
  const dispatch = useDispatch();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');

  const user = useSelector(state => state.user.user);

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName);
      setEmail(user.email);
    }
  }, [user]);

  return {displayName, setDisplayName, email, setEmail};
};

export default useUpdateProfile;
