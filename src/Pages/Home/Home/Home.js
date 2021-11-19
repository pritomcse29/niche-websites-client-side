import React from "react";
import AllReview from "../../AllReview/AllReview";
import Footer from "../../Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";


import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>

            <Services></Services>

            <h2 className="text-center" style={{ marginTop: '50', borderBottom: '1px solid black' }}>Review:</h2>
            <AllReview />
            <Footer></Footer>
        </div>
    );
};

export default Home;

// import React from "react";

// const Home = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default Home;