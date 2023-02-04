import Person from "../models/person";
import template from './PersonReadOnly.html';

class PersonReadOnly {
    person: Person;

    constructor(params: { person: Person }) {
        this.person = params.person;
    }
}
export default { viewModel: PersonReadOnly, template: template };