import React from 'react';
import styled from '@emotion/styled';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const Section = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;
const GapWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
`;
const SnowFlake=styled.img`
    position: absolute;
    width: ${(props)=>{return props.width}};
    top: ${(props)=>{return props.top}};
    left: ${(props)=>{return props.left}};
    rotate: ${(props)=>{return props.deg + "deg"}};
`;
const MainImages = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: fit-content;
    position:relative;
`;
const MainHeaderImage = styled.img`
    width: 100%;
    z-index: 100;
`;
const SubHeaderImage = styled.img`
    width: 100%;
    position: absolute;
    top: ${(props)=>{return props.top+"px"}};
    left: ${(props)=>{return props.left+"px"}};
    z-index: 100;
`;
const TextLine = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const TextType1 = styled.div`
    font-size: 34px;
    color: white;
`;
const TextType2 = styled.div`
    font-size: 16px;
    font-family: 'Pangolin';
    color:white;
`;
const HeaderButton = styled.div`
white-space: nowrap;
    font-size: 16px;
    color: #212121;
    background-color: white;
    padding: 16px 20px;
    border-radius: 50px;
    box-shadow: 0 5px 0 0px  #212121;
    :hover{
        animation: HeaderButtonHover 0.1s linear;
        background-color: #212121;
        color: white;
    }
    @keyframes HeaderButtonHover {
        0%{
            color: #212121;
            background-color: white;
        }
        100%{
            background-color: #212121;
            color: white;
        }
    }
`;
const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 96px;
    font-family: 'Boska';
    color:white;
    margin-bottom: 20px;
`;
const CardView = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
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
const Cards = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    margin-bottom: 30px;
`;
const Card = styled.img`
    width: 15%;
`;
const MessageCard = styled.div`
    width: 50%;
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
    z-index: 100;
    opacity: 0.3;
`;
const MessgePaper = styled.div`
    width: 100%;
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
    border: 1px solid #212121;
    padding: 16px 20px;
    border-radius: 50px;
`;
const InputMessage = styled.input`
    width: 100%;
    font-family: ${(props)=>{return props.FontFamily}};
    font-size: ${(props)=>{return props.FontSize+"px"}};
    text-align: center;
    border: none;
    background-color: transparent;
    :focus{
        outline: none;
    }
`;
const Buttons = styled.div`
    margin: 20px 0 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const flake = 'https://assets.website-files.com/63954148546a8e750c6f5e13/63976f46006e1a8a16bd8d7e_snowflake%2016-p-500.png';
const NameMain = 'https://assets.website-files.com/63954148546a8e750c6f5e13/6395f5b72721b3e7107ca31e_JollyFlow%20Rustic.svg';
const NameSub = 'https://assets.website-files.com/63954148546a8e750c6f5e13/6395f5b7dd443080bd62fd7c_JollyFlow%20Rustic-1.svg';
const card1 = 'https://assets.website-files.com/63954148546a8e750c6f5e13/639621ce048e7c005a95d390_Calendar_min.webp';
const card2 = 'https://assets.website-files.com/63954148546a8e750c6f5e13/639621ced716ff3d8388f854_Snowman_min.webp';
const card3 = 'https://assets.website-files.com/63954148546a8e750c6f5e13/639621ceaa7b427f893656ba_Gift_min.webp';
const card4 = 'https://assets.website-files.com/63954148546a8e750c6f5e13/639621ce9834c1c49cc3a4fa_Santa_min.webp';
const card5 = 'https://assets.website-files.com/63954148546a8e750c6f5e13/639621ced716ffcdfc88f853_Cookie_min.webp';

function MainPage({card,title,message,name,handleSetName,handleSetTitle,handleSetMessage,handleSetCard,view1,view2,view3,view4,view5}) {
    const section1 = useRef();
    const section2 = useRef();
    const section3 = useRef();
    const section4 = useRef();
    return (
        <Container>
            <Section ref={section1}>
                <GapWrap style={{fontFamily:"Pangolin"}}>
                    <MainImages>
                        <MainHeaderImage src={NameMain} alt='1'/>
                        <SubHeaderImage src={NameSub} alt='2' top={20} left={20} />
                    </MainImages>
                    <TextLine>
                        <TextType1>Who do you appreciate</TextType1>
                        <TextType1>this holiday season?</TextType1>
                    </TextLine>
                    <HeaderButton onClick={()=>{section2.current.scrollIntoView({behavior:"smooth"})}}>BEGIN THE EXPERIENCE</HeaderButton>
                </GapWrap>
                <SnowFlake src={flake} alt='3' width={"15%"} top={"2%"} left={"36%"}/>
                <SnowFlake src={flake} alt='4' width={"30%"} top={"1%"} left={"67%"} deg={10}/>
                <SnowFlake src={flake} alt='5' width={"20%"} top={"15%"} left={"11%"}/>
                <SnowFlake src={flake} alt='6' width={"20%"} top={"59%"} left={"18%"} deg={-10}/>
                <SnowFlake src={flake} alt='7' width={"25%"} top={"56.5%"} left={"64.5%"}/>
            </Section>
            <Section ref={section2}>
                <Header>Choose a Card</Header>
                <CardView>
                    {
                        card === 1?
                        <Viewer src={view1} Numbering={1} View={card}></Viewer>:
                        card ===2?
                        <Viewer src={view2} Numbering={2} View={card}></Viewer>:
                        card ===3?
                        <Viewer src={view3} Numbering={3} View={card}></Viewer>:
                        card ===4?
                        <Viewer src={view4} Numbering={4} View={card}></Viewer>:
                        <Viewer src={view5} Numbering={5} View={card}></Viewer>
                    }
                </CardView>
                <Cards>
                    <Card src={card1} alt='card1' onClick={()=>{handleSetCard(1)}}/>
                    <Card src={card2} alt='card2' onClick={()=>{handleSetCard(2)}}/>
                    <Card src={card3} alt='card3' onClick={()=>{handleSetCard(3)}}/>
                    <Card src={card4} alt='card4' onClick={()=>{handleSetCard(4)}}/>
                    <Card src={card5} alt='card5' onClick={()=>{handleSetCard(5)}}/>
                </Cards>
                <HeaderButton onClick={()=>{section3.current.scrollIntoView({behavior:"smooth"})}}>Next Step</HeaderButton>
            </Section>
            <Section ref={section3}>
                <Header>Write Your Message</Header>
                <MessageCard>
                    <MessgePaper>
                        <MessageHead>Card Title</MessageHead>
                        <InputMessage FontFamily={'Boska'} FontSize={64} value={title} onChange={(e)=>{handleSetTitle(e.target.value)}}></InputMessage>
                        <MessageHead>Write Your Message</MessageHead>
                        <InputMessage FontFamily={'Pangolin'} FontSize={16} value={message} onChange={(e)=>{handleSetMessage(e.target.value)}}></InputMessage>
                        <MessageHead>Add Your Name</MessageHead>
                        <InputMessage FontFamily={'Boska'} FontSize={64} value={name} onChange={(e)=>{handleSetName(e.target.value)}}></InputMessage>
                    </MessgePaper>
                    <MessageDeco top={1} left={0} src="https://assets.website-files.com/63954148546a8e750c6f5e13/63954dd7fd907e616861154c_postcard-stamps.png" alt=""/>
                </MessageCard>
                <HeaderButton onClick={()=>{section4.current.scrollIntoView({behavior:"smooth"})}} >SHARE THE LOVE</HeaderButton>
            </Section>
            <Section ref={section4}>
                <Header>Share Your Message</Header>
                <img src='https://assets.website-files.com/63954148546a8e750c6f5e13/63954a6aa689c7e1740da40d_santa%20with%20deers_angle%201.webp' alt='' style={{width:"40%",marginBottom:"20px"}} />
                <TextLine>
                    <TextType2>The Evil Twins Have</TextType2>
                    <TextType2>Prepared Your Message!</TextType2>
                </TextLine>
                <Buttons>
                    <HeaderButton>POST A TWEET</HeaderButton>
                    <Link to={`/Card/${card}`} style={{textDecoration:"none"}}><HeaderButton>COPY LINK</HeaderButton></Link>
                    <HeaderButton onClick={()=>{section1.current.scrollIntoView({behavior:"smooth"})}}>NEW CARD</HeaderButton>
                </Buttons>
            </Section>
        </Container>
    )
}

export default MainPage