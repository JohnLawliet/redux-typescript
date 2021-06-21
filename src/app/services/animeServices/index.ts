import { client } from "../../graphql";
import { GET_ANIME_PAGE } from "./queries";
import { GetAnimePage } from "./__generated__/GetAnimePage";

// NOTE not using useQuery here. Below is the method to query from apollo non hook way
class AnimeServices{
    async getAnimePage(page: Number, perPage = 30) : Promise<GetAnimePage["Page"]> {
        try{
            const response = await client.query({
                query: GET_ANIME_PAGE,
                variables: { page, perPage }
            })
            if (!response || !response.data){
                throw new Error("Could not get anime list")
            }

            return response.data.Page
        }
        catch(e){
            throw e
        }
    }
}

export default new AnimeServices()