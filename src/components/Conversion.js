import React, {useState} from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import AddCommentIcon from '@mui/icons-material/AddComment';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
`;

const Card = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 60%;
height: 60%;

`;

const Tree = styled.div`
margin-left: -2px;
padding-left: 20px;
border-left: 1px dashed grey;

`;
const Conversion = () => {
    const [main, setMain] = useState([]);

    const handleReply = () => {

    }
    const arr = [];
    const handleEnter = (e) => {
        const data = e.target.value;
        arr.push(data);
        setMain(arr);
    }

    console.log(main);
  return (
    <Container>
        <Card>
            <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon="-"
            defaultExpandIcon="+"
            defaultEndIcon="*"
            sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
            >
                <Button onClick={handleReply}><AddCommentIcon />reply</Button>
                <Button onClick={handleEnter}><AddCommentIcon />Enter</Button>
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Empty"
                    style={{ width: 200 }}
                    onChange={handleEnter}
                />
                {main.map((val, index) => (
                    <div id={index}>
                        <TreeItem nodeId="1" label={val}>
                            <Tree><TreeItem nodeId="100" label="Calendar" /></Tree>
                        </TreeItem>
                    </div>
                    
                ))}
                <TreeItem nodeId="4" label="Applicatidswdons">
                    <Tree><TreeItem nodeId="3" label="Calendar" /></Tree>
                </TreeItem>
                <TreeItem nodeId="5" label="Documents">
                    <Tree>
                        <TreeItem nodeId="10" label="OSS" >
                            <Tree><TreeItem nodeId="2" label="Calendar" /></Tree>
                        </TreeItem>
                    </Tree>
                    <Tree><TreeItem nodeId="6" label="MUI" /></Tree>
                </TreeItem>
            </TreeView>
        </Card>
    </Container>
  )
}

export default Conversion;