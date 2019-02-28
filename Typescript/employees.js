var Services = /** @class */ (function () {
    function Services() {
        var _this = this;
        this.etype = "Employee";
        this.getUserId = function () {
            return _this.etype;
        };
        this.users = [
            {
                id: 1,
                name: 'Xyz',
                salary: 1000
            },
            {
                id: 2,
                name: 'Abc',
                salary: 2000
            }
        ];
    }
    Services.prototype.getUsers = function () {
        return this.users;
    };
    return Services;
}());
var Business = /** @class */ (function () {
    function Business() {
        var _this = this;
        this.etype = "Employer";
        this.getUserId = function () {
            return _this.etype;
        };
        this.users = [
            {
                id: 100,
                name: 'Sam'
            },
            {
                id: 2324,
                name: 'Sia'
            }
        ];
    }
    Business.prototype.getUsers = function () {
        return this.users;
    };
    return Business;
}());
var emp = new Services();
var emp1 = new Business();
//console.log('the Service Users',emp.getUsers(),'the User type',emp.getUserId())
//console.log('the Business Users',emp1.getUsers(),'the User type',emp1.getUserId())
var identify = function (x) {
    if (x == emp) {
        console.log('the Service Users', emp.getUsers(), 'the User type', emp.getUserId());
    }
    else {
        console.log('the Business Users', emp1.getUsers(), 'the User type', emp1.getUserId());
    }
};
identify(emp1);
var ident = function (y) {
    for (var i = 0; i < emp.users.length; i++) {
        if (emp.users[i].name == name) {
            console.log('Service employee');
        }
        else {
            console.log('self-employes');
        }
    }
};
