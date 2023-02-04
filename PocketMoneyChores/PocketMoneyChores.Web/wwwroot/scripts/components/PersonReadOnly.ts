import Person from "../models/person";

class PersonReadOnly {
    person: Person;

    constructor(params: { person: Person }) {
        this.person = params.person;
    }
}
export default { viewModel: PersonReadOnly };