import { styled } from "styled-components";


interface ThumbnailData {
    thumbnail: {
        path: string;
        extension: string;
    }
}

export const MainTitle = styled.h1 `
    color: #e1e1e1
`

export const StyledHomeContainer = styled.main `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
`

export const HeroList = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const urlImg = (props: ThumbnailData) => `
    ${props.thumbnail.path}.${props.thumbnail.extension}
`

export const HeroCard = styled.div `
    background: #e1e1e1;
    height: 450px;
    width: 300px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);


    h3, p {
        padding: 5px;
        text-align: justify;
        font-weight: bold;
        text-align: center;
    }


    div#img {
        height: 400px;
        width: 100%;
        background: url(${urlImg}) no-repeat center;
        background-size: cover;
        transition: all 1s;
    }

    &:hover {
      div#img {
        height: 100px;
      }  
    }

`

export const RequestButton = styled.div `
    background: #e1e1e1;
    height: 50px;
    cursor: pointer;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    margin: 20px auto;
    padding: 0 50px;
    border-radius: 8px;
    transition: all 0.8s;
    font-weight: bold;

    &:hover {
        background: #19EAD0
    }
`

export const InputContainer = styled.div `
    background: #1e1e1e;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`