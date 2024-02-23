import Axios from "axios";

export const News = () => {

    const retrieveNews = async (cityParameter) => {
        const response = await Axios.get(`https://api.weather.gov/`);
        return response.data;
      };
      const handleNews = async (e) => {
        const news = await retrieveNews()
        console.log(news)
      }
 
    return (
        <>
            <img src="./workinprogress.png"/>
        </>
    )
}