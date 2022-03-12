import Header from "./header";
import Slider from "./slider";
import FeatureItem from "../../commonComponents/featureItem/index"
import FeatureData from "../../constants/feature";
export function LandingPage() {
    return (
        <div> 
            
            {/* <Header/>
            <Slider/> */}
            {
                FeatureData.map((item) =><FeatureItem data={item}/>)
            }
            {/* <FeatureItem/>
            <FeatureItem/> */}
            
        </div>
    );
}

// export default LandingPage;