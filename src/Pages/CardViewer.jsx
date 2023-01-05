import React from 'react';
import styled from "@emotion/styled";
import { useParams } from 'react-router-dom';
import { useCallback } from 'react';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position:relative;
`;
const FrontCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    ${(props)=>{return props.flip?{animation:"FlipFront 0.5s linear",opacity:0,zIndex:0}:{opacity:1,zIndex:100}}};
    @keyframes FlipFront {
        0%{
            opacity: 1;
            transform: rotateY(0);
        }
        100%{
            opacity: 0;
            transform: rotateY(180deg);
        }
    }
`;
const BackCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    ${(props)=>{return props.flip?{animation:"FlipBack 0.5s linear",opacity:1,zIndex:100}:{opacity:0,zIndex:0}}};
    @keyframes FlipBack {
        0%{
            opacity: 0;
            transform: rotateY(180deg);
        }
        100%{
            opacity: 1;
            transform: rotateX(0);
        }
    }
`;
const Header = styled.div`
    font-size: 96px;
    font-family: 'Boska';
    color: white;
`;
const Button = styled.div`
    margin: 50px;
    padding: 16px 16px;
    font-size: 16px;
    border: 1px solid black;
    border-radius: 50px;
    background-color: white;
    box-shadow: 3px 3px 0 0 #212121;
    :hover{
        animation: Fadein 0.1s linear;
        color:white;
        background-color: black;
    }
    @keyframes Fadein {
        0%{
            color: black;
            background-color: white;
        }
        100%{
            color: white;
            background-color: black;
        }
    }
`;
const CardView = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const Viewer = styled.img`
    width: 100%;
    opacity: 0;
    ${(props)=>{return props.View === props.Numbering?{animation:"ViewerFadeIn 0.5s linear",opacity:1}:{opacity:0}}}
    @keyframes ViewerFadeIn {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
`;
const MessageCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 10px;
    border-radius: 10px;
    height: fit-content;
    background-image: url(https://assets.website-files.com/63954148546a8e750c6f5e13/63964379048bbb938f58d45d_candy-cane-bg.jpg);
    background-size: 70%;
    margin-bottom: 20px;
`;
const MessageDeco = styled.img`
    position: absolute;
    top:${(props)=>{return props.top+"px"}};
    left:${(props)=>{return props.left+"px"}};
    bottom: ${(props)=>{return props.bottom+"px"}};
    width: ${(props)=>{return props.width}};
    z-index: 100;
    opacity: ${(props)=>{return props.opacity}};
`;
const MessgePaper = styled.div`
    width: 100%;
    min-width: 600px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:#212121;
    padding: 14px 0;
    background-image: url(https://assets.website-files.com/63954148546a8e750c6f5e13/63976e076465e23d05286b05_Rectangle%2040.png);
    background-size: 100%;
    background-position: center;
    gap: 10px;
`;
const MessageHead = styled.div`
    font-size: 16px;
    font-family: 'Pangolin';
    border: 1px solid #212121;
    padding: 10px 10px;
    border-radius: 50px;
`;
const MessageContent = styled.div`
    font-size: ${(props)=>{return props.FontSize+"px"}};
    font-family: 'Pangolin';
`;

function CardViewer({view1,view2,view3,view4,view5,title,message,name}) {
    const [flip,setFlip] = useState(false);
    const {CardNumber}=useParams();
    const handleImage = useCallback((e)=>{
        if(e==="1") return view1;
        if(e==="2") return view2;
        if(e==="3") return view3;
        if(e==="4") return view4;
        if(e==="5") return view5;
    },[view1, view2, view3, view4, view5])
    return (
        <Container>
            <FrontCard flip={flip}>
                <Header>You Have A Message</Header>
                <CardView>
                    <Viewer src={handleImage(CardNumber)} Numbering={CardNumber} View={CardNumber}></Viewer>
                </CardView>
                <Button onClick={()=>{flip?setFlip(false):setFlip(true)}}>READ MESSAGE</Button>
            </FrontCard>
            <BackCard flip={flip}>
                <Header>Merry Christmas</Header>
                <MessageCard>
                    <MessgePaper>
                        <MessageHead>Here's To You</MessageHead>
                        <MessageContent FontSize={64}>{title}</MessageContent>
                        <MessageContent FontSize={16}>{message}</MessageContent>
                        <MessageHead>From</MessageHead>
                        <MessageContent FontSize={64}>{name}</MessageContent>
                    </MessgePaper>
                    <MessageDeco opacity={0.3} top={1} left={0} src="https://assets.website-files.com/63954148546a8e750c6f5e13/63954dd7fd907e616861154c_postcard-stamps.png" alt=""/>
                    <MessageDeco onClick={()=>setFlip(false)} bottom={-50} left={-120} width="250px" src={handleImage(CardNumber)} alt=''/>
                </MessageCard>
            </BackCard>
        </Container>
    )
}

export default CardViewer