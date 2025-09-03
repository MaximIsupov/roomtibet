import "./TourForm.css"

function TourForm() {
    return ( 
        <form action="/" className="tour-form">
            <select name="location" id="tour-form__location"></select>
            <input type="date" name="date" id="tour-form__date"/>
            <select name="participants" id="tour-form__participants" ></select>
            <button>Найти программу</button>
        </form>
    );
}

export default TourForm;