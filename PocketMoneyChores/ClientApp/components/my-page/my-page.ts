import * as ko from 'knockout';

class MyPageViewModel {

    public first = ko.observable("Hello,");
    public second = ko.observable("World!");

    public third: KnockoutComputed<string> = ko.pureComputed(
        () => this.first() + " " + this.second());

    public setToSomethingElse() {
        this.first("TEsting");
        this.second("1,2 ,3");
    }
}

export default { viewModel: MyPageViewModel, template: require('./my-page.html') };