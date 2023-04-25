import React, { useCallback, useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "@emotion/styled";
import MainPage from './Pages/MainPage';
import FloatBar from './Components/FloatBar';
import Footer from './Components/Footer';
import CardViewer from './Pages/CardViewer';
import NotFound from './Pages/NotFound';

const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url("https://assets.website-files.com/63954148546a8e750c6f5e13/6396057e883c855039e30c0c_bg-snow%20(1).webp");
  background-attachment: fixed;
  background-size:100%;
`;

const view1 = 'https://assets.website-files.com/63954148546a8e750c6f5e13/6399143d1a85612d2eb3ca18_card2-p-800.webp';
const view2 = 'https://assets.website-files.com/63954148546a8e750c6f5e13/6399143dadfcb576ed2cadab_card4-p-800.webp';
const view3 = 'https://assets.website-files.com/63954148546a8e750c6f5e13/6399143d6a58e745a7b8bd3a_card3-p-800.webp';
const view4 = 'https://assets.website-files.com/63954148546a8e750c6f5e13/6399143dbb8660761da001cc_card1-p-800.webp';
const view5 = 'https://assets.website-files.com/63954148546a8e750c6f5e13/639618399834c12df2c2f5ce_Cookieman_min.webp';

function App() {
  const [card,setCard] = useState(1);
  const handleSetCard = useCallback((e)=>{
    setCard(e);
  },[])
  const [title,setTitle] = useState('Your Title');
  const handleSetTitle = useCallback((e)=>{
    setTitle(e);
  },[])
  const [message,setMessage] = useState('Add as little or as much text as you would like for your message in the card!');
  const handleSetMessage = useCallback((e)=>{
    setMessage(e);
  },[])
  const [name,setName] = useState('Your Name');
  const handleSetName = useCallback((e)=>{
    setName(e);
  },[])
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/Clone-JollyFlow' element={
            <>
              <MainPage 
                card={card} 
                title={title} 
                message={message} 
                name={name}
                handleSetName={handleSetName}
                handleSetCard={handleSetCard}
                handleSetTitle={handleSetTitle}
                handleSetMessage={handleSetMessage}
                view1={view1}
                view2={view2}
                view3={view3}
                view4={view4}
                view5={view5}
              />
              <Footer/>
            </>
          }/>
          <Route path='/Card/:CardNumber' element={
            <>
              <CardViewer
              ></CardViewer>
            </>
          }/>
          <Route path='*' element={
            <NotFound/>
          }/>
        </Routes>
      </BrowserRouter>
      <FloatBar/>
    </Container>
  )
}

export default App