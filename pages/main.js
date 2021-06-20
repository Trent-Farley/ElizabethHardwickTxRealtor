import MainInfo from "./components/main_info";
import Listings from "./components/current_listings";
export default function Main(){
    return(
        <main className="container">
        <MainInfo />
        <h4 className="text-center">
          Listings
        </h4>
        <Listings/>
  
        </main>
    );
}