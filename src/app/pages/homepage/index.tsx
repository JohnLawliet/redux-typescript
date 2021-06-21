import { Dispatch } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useAppDispatch } from '../../hooks'
import animeServices from '../../services/animeServices'
import { GetAnimePage } from '../../services/animeServices/__generated__/GetAnimePage'
import { setAnimePage } from './homePageSlice'
import {HomeContainer} from './index.styles'
import HotAnime from '../../components/hotAnime'

interface IHomePageProps {}


// actionDispatch is a list of all actions that are used in this file
// it takes in the typescript dispatch i.e useAppDispatch through props and dispatches the action 
const actionDispatch = (dispatch: Dispatch) => ({
    setAnimePage: (page: GetAnimePage["Page"]) => dispatch(setAnimePage(page))
})

const HomePage = (props: IHomePageProps) => {
    const {setAnimePage} = actionDispatch(useAppDispatch())

    const fetchAnimePage = async () => {
        const animePage = await animeServices.getAnimePage(5).catch(e => console.log(e))
        if (animePage) setAnimePage(animePage)
    }

    useEffect(() => {
        fetchAnimePage()
    }, [fetchAnimePage])

    return (
        <HomeContainer>
            <h1>Hot Anime</h1>
            <HotAnime />
        </HomeContainer>
    )
}

export default HomePage
