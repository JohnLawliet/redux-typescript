import styled from "styled-components"

export const HotAnimeContainer = styled.div`
max-width: 1280px;
height:100%;
width:100%;
display:flex;
justify-content: space-evenly;
flex-wrap:wrap;
`

export const AnimeCover = styled.div`
width:auto;
height:15em;
>img{
    width:auto;
    height:100%;
}
`

export const AnimeTitle = styled.h6`
font-size:16px;
color:black;
font-weight:500;
margin-top: 8px;;
`

export const AnimeItemContainer = styled.div`
width:14em;
height:18em;
display:flex;
flex-direction: column;
align-items: center;
`