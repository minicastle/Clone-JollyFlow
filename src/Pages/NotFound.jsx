import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`;
const CardLine = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
    max-width: 1000px;
    border-radius: 20px;
    background-image: url(https://assets.website-files.com/63954148546a8e750c6f5e13/63964379048bbb938f58d45d_candy-cane-bg.jpg);
    background-position: center;
    background-size: 70%;
`;
const Contents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 98%;
    height: 98%;
    border-radius: 20px;
    background-image: url(https://assets.website-files.com/63954148546a8e750c6f5e13/63976e076465e23d05286b05_Rectangle%2040.png);
    background-size: 120%;
    background-position: center;
    position:relative;
`;
const MessageDeco = styled.img`
    position: absolute;
    top:${(props)=>{return props.top}};
    left:${(props)=>{return props.left}};
    bottom:${(props)=>{return props.bottom}};
    right:${(props)=>{return props.right}};
    rotate: ${(props)=>{return props.deg+"deg"}};
    z-index: 100;
    opacity: 0.3;
`;
const HomeButton = styled.div`
    margin: 50px;
    padding: 20px 16px;
    font-size: 30px;
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

function NotFound() {
    return (
        <Container>
            <CardLine>
                <Contents>
                    <p style={{fontSize:"96px",fontFamily:"Boska",fontWeight:"bold",textDecoration:"underline"}}>Not Found</p>
                    <span style={{fontSize:"70px",fontFamily:"Boska",fontWeight:"bold"}}>404 Error</span>
                    <Link to="/" style={{textDecoration:"none"}}><HomeButton>Go to Home</HomeButton></Link>
                    <MessageDeco top={0} left={0}src="https://assets.website-files.com/63954148546a8e750c6f5e13/63954dd7fd907e616861154c_postcard-stamps.png" alt=""/>
                    <MessageDeco bottom={0} right={0} deg={180} src="https://assets.website-files.com/63954148546a8e750c6f5e13/63954dd7fd907e616861154c_postcard-stamps.png" alt=""/>
                </Contents>
            </CardLine>
        </Container>
    )
}

export default NotFound