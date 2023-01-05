import React from 'react';
import styled from '@emotion/styled';
import {BsArrowUp} from 'react-icons/bs';

const BottomFloat = styled.div`
    position: fixed;
    bottom: 0;
    width: 95%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-family: 'Pangolin', cursive;
    color: white;
`;
const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
`;
const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    border: 1px solid white;
    border-radius: 50%;
        img{
        width: 24px;
        height: 24px;
        }
`;
const Donate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    border: 1px solid white;
    border-radius: 50px;
    color: white;
`;
const ToTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    border:1px solid white;
    border-radius: 50%;
    color:white;
    font-size: 25px;
`;

const facebook = 'https://assets.website-files.com/63954148546a8e750c6f5e13/63954d6ee4a413ba491cdf06_facebook-icon.svg';
const twitter = "https://assets.website-files.com/63954148546a8e750c6f5e13/63954d6ec7969e20c5bc11d2_twitter-icon.svg";
function FloatBar() {
    return (
        <BottomFloat>
            <Icons>
                <p>SHARE</p>
                <Icon>
                    <img src={facebook} alt=''/>
                </Icon>
                <Icon>
                    <img src={twitter} alt=''/>
                </Icon>
            </Icons>
            <ToTop onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}><BsArrowUp/></ToTop>
            <Donate>Donate to Feeding America</Donate>
        </BottomFloat>
    )
}

export default FloatBar