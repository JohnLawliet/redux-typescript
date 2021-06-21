import { useAppSelector } from "../hooks"
import { selectAnimePage } from "../pages/homepage/homePageSlice"
import { HotAnimeContainer, AnimeItemContainer, AnimeCover, AnimeTitle } from "./hotAnime.styles"


const HotAnime = () => {
    const animeList = useAppSelector(selectAnimePage)
    const isEmptyAnimePage = !animeList || !animeList.media || animeList.media.length ===0;
    if (isEmptyAnimePage) return <p>Loading...</p>
    
    return (
        <HotAnimeContainer>
        {
            animeList?.media?.map(anime => {
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
