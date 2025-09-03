import "./MainBanner.css"
import TourForm from "../TourForm/TourForm";

function MainBanner() {
    return ( 
        <div className="main">
            <div className="container">
                <h1 className="main__title" data-heading-tag="H1">Насладись прогулкой в горах с командой единомышленников</h1>
                <TourForm />
            </div>
        </div>
    );
}

export default MainBanner;