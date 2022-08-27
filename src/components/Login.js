import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { Button } from '@mui/material';

const Login = () => {
    const signInWithGoogle = async () => {
        provider.setCustomParameters({ prompt: 'select_account' });
        signInWithPopup(auth, provider)

    }
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={signInWithGoogle}>Sign In With Google</Button>
        </div>
    )
}

export default Login;