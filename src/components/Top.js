import React from 'react';
import { Button } from '@mui/material';
import Switch from '@mui/material/Switch';
import styled from '@emotion/styled';

const Container = styled.div`
box-shadow: 1px 5px 5px gray;
`;

const Nav = styled.div`
display: flex;
`;

const Listbtn = styled.div`
 
`;

const Slidebtn = styled.div`
display: flex;
justify-content: right;
width: 100%;
text-align: right;
margin-right: 20px;

`;

const Text1 = styled.div`
  margin-top: 4px;
  font-size: 13px;
  color: blue; 
  margin-right: 20px;
`;

const Data = styled.div`
 
`;

const LoanId = styled.div`
display: flex;
 
`;

const LoanAmt = styled.div`
 
`;


const Top = () => {

  const data = {
    ID : 423563665,
    Name: "Piyush",
    Amount: 48289,
    Use: "property",
    Tenure: 240,
  };

  return (
    <Container>
      <Nav>
        <Listbtn>
          <Button sx={{ textTransform: 'none', marginLeft: "20px" }} size='small'>Listing</Button>
        </Listbtn>
        <Slidebtn>
          <Text1>Split mode:</Text1>
          <Switch defaultChecked size='small' sx={{ marginTop: "3px" }}/>
          <Button sx={{ textTransform: 'none', marginRight: "40px" }} size='small'>Minimise</Button>
        </Slidebtn>
      </Nav>
      <Data>
        <LoanId >
          <div>
            <div style={{display: "flex"}}>
              <div style={{marginLeft: "30px", marginBottom: "20px"}}>
                Loan ID
              </div>
              <div style={{marginLeft: "150px", marginRight: "20px"}}>
                {`: ${data.ID}`}
              </div>
            </div>
            <div style={{display: "flex"}}>
              <div style={{marginLeft: "30px", marginBottom: "20px"}}>
                Applicant Name
              </div>
              <div style={{marginLeft: "90px"}}>
                {`: ${data.Name}`}
              </div>
            </div>
          </div>
          <div style={{borderLeft: "2px solid black", height: "65px", marginLeft: "40px"}}></div>
          <div>
            <div style={{display: "flex"}}>
              <div style={{marginLeft: "40px", marginBottom: "20px"}}>
                Loan Amount
              </div>
              <div style={{marginLeft: "56px"}}>
                {`: ${data.Amount}`}
              </div>
            </div>
            <div style={{display: "flex"}}>
              <div style={{marginLeft: "40px"}}>
                End use of Loan
              </div>
              <div style={{marginLeft: "40px"}}>
                {`: ${data.Use}`}
              </div>
            </div>
          </div>
          <div>
            <div style={{display: "flex"}}>
              <div style={{marginLeft: "150px"}}>
                Loan Tenure (in Months)
              </div>
              <div style={{marginLeft: "56px"}}>
                {`: ${data.Tenure}`}
              </div>
            </div>
          </div>
          <div style={{borderLeft: "2px solid black", height: "65px", marginLeft: "40px"}}></div>
          <div>
            <Button variant='contained' size='small' sx={{ textTransform: 'none', marginLeft: "100px" }}>Submit</Button>
          </div>
        </LoanId>
        <LoanAmt>

        </LoanAmt>

      </Data>
    </Container>
  );
};

export default Top;