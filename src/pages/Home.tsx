import FeedPage from "../components/feedcard";
import FeedPage2 from "../components/feedcard2";
import Header from "../components/header";
import { ReputationCarousel } from "../components/profile";
import SlashCard from "../components/slashcard";
import { TopVouchesMarquee } from "../components/topvou";

const Home = () => {
  return (
    <div className=" bg-gray-50">
      {/* Header */}
      <Header />
      <TopVouchesMarquee/>
      <ReputationCarousel/>
   <FeedPage/>
   <SlashCard/>
   <FeedPage2/>



    </div>
  );
};

export default Home;
