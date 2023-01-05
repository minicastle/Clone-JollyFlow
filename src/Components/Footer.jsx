import React from 'react';
import styled from '@emotion/styled';
import "../FontFamily.css";
import { useState } from 'react';
import { useCallback } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background:url("https://assets.website-files.com/63954148546a8e750c6f5e13/6397501aa529fe7e0e9614e0_Credits%20(1).png");
    background-size: 100%;
    color: #fffcf4;
`;
const Arch1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 30px;
`;
const Arch2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
`;
const Header = styled.div`
    font-family: 'Boska';
    font-size: 96px;
`;
const Contents1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    white-space: nowrap;
    width: 40%;
`;
const Contents2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 40%;
`;
const Content = styled.div`
    font-family: 'Boska';
    font-size: 64px;
    z-index: 100;
`;
const SubTitle = styled.div`
    font-family: 'Pangolin';
    font-size: 16px;
    z-index: 100;
    padding-bottom: 15px;
`;
const HoverIcon1 = styled.img`
    top: ${(props)=>{return (props.y-150)+"px"}};
    left: ${(props)=>{return (props.x/5)+"px"}};
    height: 15%;
    position: fixed;
    opacity: 0;
    ${(props)=>{return props.Name === props.hovering?{animation: "Fadein 0.5s linear",opacity:1}:{opacity:0}}}
    @keyframes Fadein {
        0%{
            opacity:0
        }
        100%{
            opacity: 1;
        }
    }
    @keyframes FadeOut {
        0%{
            opacity:0
        }
        100%{
            opacity: 1;
        }
    }
`;
const HoverIcon2 = styled.img`
    top: ${(props)=>{return (props.y-150)+"px"}};
    right: ${(props)=>{return (props.x/5)+"px"}};
    height: 15%;
    position: fixed;
    opacity: 0;
    ${(props)=>{return props.Name === props.hovering?{animation: "Fadein 0.5s linear",opacity:1}:{opacity:0}}}
    @keyframes Fadein {
        0%{
            opacity:0
        }
        100%{
            opacity: 1;
        }
    }
    @keyframes FadeOut {
        0%{
            opacity:0
        }
        100%{
            opacity: 1;
        }
    }
`;
const HoverSet1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;
const HoverSet2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const image1 = 'https://assets.website-files.com/63954148546a8e750c6f5e13/639753e68d5fed0ad0dd5e36_singing%20candles%201.webp';
const image2 = 'https://assets.website-files.com/63954148546a8e750c6f5e13/639753eb1e93d54b35937167_candy%20stick%201.webp';
const image3 = 'https://assets.website-files.com/63954148546a8e750c6f5e13/639753e9968186e0370246bd_santa%20with%20black%20glasses_angle%201.webp';
const image4 = 'https://assets.website-files.com/63954148546a8e750c6f5e13/639753e6cb940a40771614e6_snowman_angle%201.webp';
const image5 = 'https://assets.website-files.com/63954148546a8e750c6f5e13/639753e60094d93eb85385a8_tartlet%201.webp';
const image6 = 'https://assets.website-files.com/63954148546a8e750c6f5e13/639753e48d5fedc144dd5e1c_star%204.webp';
const image7 = 'https://assets.website-files.com/63954148546a8e750c6f5e13/639753e17ed1b40ea547ae18_wreath_angle%201.webp';
const image8 = 'https://assets.website-files.com/63954148546a8e750c6f5e13/639753eab98a9a19271efb84_ginger%20breadman_angle%201.webp';

function Footer() {
    const [hover,setHover]=useState("none");
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    const handleMouseMove = useCallback((e)=>{
        setX(e.screenX);
        setY(e.screenY);
    },[])
    return (
        <Container>
            <Arch1>
                <Header>Credits</Header>
                <SubTitle>3D Assets from Wannathis</SubTitle>
            </Arch1>
            <Arch2>
                <Contents1>
                    <HoverSet1 onMouseMove={handleMouseMove} onMouseEnter={()=>setHover('image1')} onMouseLeave={()=>setHover("none")}>
                        <Content>Breeona Nechole</Content>
                        <SubTitle>Lead Designer</SubTitle>
                    </HoverSet1>
                    <HoverIcon1 src={image1}alt='' Name="image1" hovering={hover} x={x} y={y}/>

                    <HoverSet1 onMouseMove={handleMouseMove} onMouseEnter={()=>setHover('image2')} onMouseLeave={()=>setHover("none")}>
                        <Content>Lauren Harris</Content>
                        <SubTitle>Designer</SubTitle>
                    </HoverSet1>
                    <HoverIcon1 src={image2}alt='' Name="image2" hovering={hover} x={x} y={y}/>

                    <HoverSet1 onMouseMove={handleMouseMove} onMouseEnter={()=>setHover('image3')} onMouseLeave={()=>setHover("none")}>
                        <Content>Tom Buizer</Content>
                        <SubTitle>Designer</SubTitle>
                    </HoverSet1>
                    <HoverIcon1 src={image3}alt='' Name="image3" hovering={hover} x={x} y={y}/>

                    <HoverSet1 onMouseMove={handleMouseMove} onMouseEnter={()=>setHover('image4')} onMouseLeave={()=>setHover("none")}>
                        <Content>Devin & Diego</Content>
                        <SubTitle>Project Guidance</SubTitle>
                    </HoverSet1>
                    <HoverIcon1 src={image4}alt='' Name="image4" hovering={hover} x={x} y={y}/>
                    
                </Contents1>
                <Contents2>
                    <HoverSet2 onMouseMove={handleMouseMove} onMouseEnter={()=>setHover('image5')} onMouseLeave={()=>setHover("none")}>
                        <Content>Evil Twins</Content>
                        <SubTitle>Logic & Shenanigans</SubTitle>
                    </HoverSet2>
                    <HoverIcon2 src={image5}alt='' Name="image5" hovering={hover} x={x} y={y}/>

                    <HoverSet2 onMouseMove={handleMouseMove} onMouseEnter={()=>setHover('image6')} onMouseLeave={()=>setHover("none")}>
                        <Content>Eric W Odom</Content>
                        <SubTitle>Designer</SubTitle>
                    </HoverSet2>
                    <HoverIcon2 src={image6}alt='' Name="image6" hovering={hover} x={x} y={y}/>

                    <HoverSet2 onMouseMove={handleMouseMove} onMouseEnter={()=>setHover('image7')} onMouseLeave={()=>setHover("none")}>
                        <Content>Tony Seets</Content>
                        <SubTitle>Webflow Development</SubTitle>
                    </HoverSet2>
                    <HoverIcon2 src={image7}alt='' Name="image7" hovering={hover} x={x} y={y}/>

                    <HoverSet2 onMouseMove={handleMouseMove} onMouseEnter={()=>setHover('image8')} onMouseLeave={()=>setHover("none")}>
                        <Content>Flowman</Content>
                        <SubTitle>Webflow Development</SubTitle>
                    </HoverSet2>
                    <HoverIcon2 src={image8}alt='' Name="image8" hovering={hover} x={x} y={y}/>
                </Contents2>
            </Arch2>
        </Container>
    )
}

export default Footer