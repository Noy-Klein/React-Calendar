import { observable, action } from "mobx";
import Axios from 'axios';

class CalendarStore {
    @observable nothing = 1;
}

const Store = new CalendarStore();

export default Store;