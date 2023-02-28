import * as ko from 'knockout';
import * as jquery from 'jquery';

class MyPageViewModel {

    public first = ko.observable("Hello");
    public second = ko.observable("World!");

    public third: KnockoutComputed<string> = ko.pureComputed(
        () => this.first() + " " + this.second());
    
    public save() {
        
        let formData = ko.toJSON({ First: this.first, Second: this.second });

        jquery.ajax({
            type: 'POST',
            url: '/api/SampleData/SaveIt/',
            data: formData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: () => { alert("worked!"); },
            error: function () { alert('Error'); }
        });  

    }
}

export default { viewModel: MyPageViewModel, template: require('./my-page.html') };