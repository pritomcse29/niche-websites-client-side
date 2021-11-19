import React from "react";
import AddReview from "../AddReview/AddReview";
import Footer from "../Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Review = () => {
    return (
        <div>
            <Navigation></Navigation>
            <h2>please add your Review:</h2>
            <AddReview />

            <Footer></Footer>

        </div>
    );
};

export default Review;
// import React from "react";

// const Home = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default Home;