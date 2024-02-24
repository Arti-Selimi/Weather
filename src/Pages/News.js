import Axios from "axios";

export const News = () => {

    const retrieveNews = async () => {
        const response = await Axios.get(`https://api.worldnewsapi.com/search-news?api-key=52f4819eaa8d4d12b2b98ed9a443f109&text=weather`);
        return response.data;
      };
      const handleNews = async (e) => {
        const news = await retrieveNews()
        console.log(news)
      }
      
    handleNews()
 
    return (
        <>
          <img onClick={handleNews} src="./workinprogress.png"/>
        </>
    )
}