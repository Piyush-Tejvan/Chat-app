import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import Button from '@mui/material/Button';

const Logout = () => {
  return (
    <div>
        <Button style={{ padding: '20px', fontSize: '15px', borderRadius: '0', fontWeight: '600' }} onClick={() => signOut(auth)}>Sign Out</Button>
    </div>
  )
}

export default Logout;