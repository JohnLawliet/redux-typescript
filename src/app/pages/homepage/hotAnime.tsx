import styled from "styled-components"
import { useAppSelector } from "../../hooks"
import { selectAnimePage } from "./homePageSlice"

const HotAnimeContainer = styled.div`
    max-width: 1280px;
    height:100%;
    width:100%;
    display:flex;
    justify-content: space-evenly;
    flex-wrap:wrap;
`

const AnimeCover = styled.div`
    width:auto;
    height:15em;
    >img{
        width:auto;
        height:100%;
    }
`

const AnimeTitle = styled.h6`
    font-size:16px;
    color:black;
    font-weight:500;
    margin-top: 8px;;
`

const AnimeItemContainer = styled.div`
    width:14em;
    height:18em;
    display:flex;
    flex-direction: column;
    align-items: center;
`

const HotAnime = () => {
    const something = useAppSelector(selectAnimePage)
    const isEmptyAnimePage = !something || !something.media || something.media.length ===0;
    if (isEmptyAnimePage) return <p>Loading...</p>
    console.log("something : ", something)
    
    return (
        <HotAnimeContainer>
        {
            something?.media?.map(anime => {
                console.log("anime : ",anime)

                return(
                    <AnimeItemContainer>
                        <AnimeCover>
                            <img src={anime?.coverImage?.extraLarge || ""} />
                        </AnimeCover>
                        <AnimeTitle>{anime?.title?.english}</AnimeTitle>
                    </AnimeItemContainer>    
                )
            }
            )
        }
        </HotAnimeContainer>
    )
}

export default HotAnime
