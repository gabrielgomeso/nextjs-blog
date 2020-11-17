import styled from 'styled-components';


export const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #6548A3;
    color: #F0EDF5;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    @media(min-width: 600px){
        padding: 10px;
        justify-content: flex-start;
    }
`;

export const ProfileImage = styled.img`
    width: 8rem;
    height: 8rem;
    border-radius: 50%;

    @media(min-width: 600px){
        width: 12rem;
        height: 12rem;
    }
`;

export const NameHeader = styled.h1`
    margin: 0;
    padding: 0;
`;

export const OptionsList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;

    color: #6C6C80;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 32px;

    a{
        text-decoration: none;
        color: #6C6C80;
    }

    @media(min-width: 600px){
        display: flex;
        flex-direction: row;
    }
`;

export const Option = styled.li`
    width: 200px;
    padding: 5px;
    margin: 5px;
    border: 1px solid #F0EDF5;
    border-radius: 16px;
    background-color: #FFFFFF;

    text-align: center;
`;