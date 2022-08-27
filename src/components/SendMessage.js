import React, { useState, useEffect } from 'react';
import { db, auth, } from '../firebase';
import { Input, Button } from '@mui/material';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Picker from 'emoji-picker-react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Storage } from '../firebase';
import { ref, getDownloadURL, uploadBytesResumable, deleteObject } from "firebase/storage";
import SendIcon from '@mui/icons-material/Send';
import Fab from '@mui/material/Fab';
import Backdrop from '@mui/material/Backdrop';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CircularProgress from '@mui/material/CircularProgress';

const SendMessage = ({scroll}) => {

    const [msg, setMsg] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const [img, setImg] = useState('');
    const [progress, setProgress] = useState(0);
    const [imgdata, setImgdata] = useState("");
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handletoggle = () => {
        setOpen(!open);
    };

   

  

    const setImage = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        console.log(file);

        if (!file) return;
        const sotrageRef = ref(Storage, `${file.name}`);
        const uploadTask = uploadBytesResumable(sotrageRef, file);

        uploadTask.on(
        "state_changed",
        (snapshot) => {
            const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(prog);
        },
        (error) => console.log(error),
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImg(downloadURL);
            });
        }
        );

        setOpen(true);
    };
  

    const onEmojiClick = (event, emojiObject) => {
        setMsg(prevInput => prevInput + emojiObject.emoji);
        setShowPicker(false);
    };

    const user = auth.currentUser;

    var today = new Date();
    const time = today.getHours() + ':' + today.getMinutes();


    const data = {text: msg, photoUrl : user.photoURL, uid: user.uid, time: time, currtime: serverTimestamp(), media: img,}
    const sendMessage = ((e) => {
        e.preventDefault();
        const q = collection(db, 'chatroom');
        addDoc(q, data);
        setMsg('');
        setImg('');
    });


    const deleteFile = (e) => {
        var fileUrl = data.media;
        const fileRef = ref(Storage, fileUrl);
        deleteObject(fileRef).then(() => {
            console.log("file deleted");
          }).catch((error) => {
            console.log("file not deleted");
        });
        setProgress(0);
        setImg('');
        alert("File Removed")
    }
    
    console.log(data);
    useEffect(() => {
        scroll.current.scrollIntoView({ behavior: 'smooth' });
    })

    return (
        <div>
            
            {progress !== 100 ? <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={handleClose}>
                <CircularProgress variant="indeterminate" value={progress} />
            </Backdrop> :

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <div className='previewall'>
                    <img className="preview" src={data.media} alt='' />
                    <div className='pre-btn'>
                        <Button variant='contained' color='error' sx={{marginRight: "10px"}} onClick={deleteFile}>Remove</Button>
                        <Button variant='contained'>Ok</Button>
                    </div>
                </div>
                
                
            </Backdrop>
            }
            <form onSubmit={sendMessage}>
                <div>{showPicker && <Picker
                    pickerStyle={{ width: '100%' }}
                    onEmojiClick={onEmojiClick} />}</div>
                <div className="sendMsg">
                    <Button onClick={() => setShowPicker(val => !val)} sx={{ fontSize:'25px'}} >{showPicker ? 'X' : '🙂'}</Button>
                    <label className='attach' htmlFor="img"><AttachFileIcon /></label>
                    <input type="file" id='img' style={{display: 'none'}} onChange={setImage} accept="image/*"/>
                    <Button sx={!data.media ? {display: 'none'} : {display: 'true'}} onClick={handletoggle} color="inherit"><RemoveRedEyeIcon /></Button>
                    <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '5px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <Button style={{ width: '18%', fontSize: '18px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} type="submit" disabled={!data.text && !data.media ? true : false}>Send<SendIcon /></Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage;