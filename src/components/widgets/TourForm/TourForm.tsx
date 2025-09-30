import "./TourForm.css"
import CustomSelect from "../CustomSelect/CustomSelect";
import DateIntervalSelect from "../DateIntervalSelect/DateIntervalSelect";
import { locationOptions, participantsOptions } from "./consts"


function TourForm() {
    return ( 
        <form action="/" className="tour-form">
            <input type="text" name="location" className="hidden" id="tour-form__location" />
            <input type="text" name="date" className="hidden" id="tour-form__date" />
            <CustomSelect 
                className="tour-form__location custom-select" 
                placeholder="Локация для тура" 
                hint="Выберите из списка"
                id="tour-form__location"
                options={locationOptions}
            />
            <DateIntervalSelect />
            <CustomSelect 
                className="tour-form__location custom-select" 
                placeholder="Участники" 
                hint="Минимум 4 человека"
                id="tour-form__participants"
                options={participantsOptions}
            />
            <button>Найти программу</button>
        </form>
    );
}

export default TourForm;