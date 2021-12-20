import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-image: linear-gradient(#13008B, #13008B,rgba(235, 218, 218, 0));
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 52px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #444;
`;

export const Icon = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 50%;
`;