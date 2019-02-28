var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [
            {
                id: 1,
                name: 'Xyz',
                salary: 100000
            },
            {
                id: 2,
                name: 'Abc'
                //,salary: 50000
            }
        ];
    }
    UserService.prototype.getUsers = function () {
        return this.users;
    };
    return UserService;
}());
var EmployServiceImpl = /** @class */ (function () {
    function EmployServiceImpl(users) {
        var _this = this;
        //id = 1
        //empId=1
        this.name = 'Test';
        // implemented method 
        this.getEmploy = function () {
            return _this.name;
        };
        this.getAllWithSalaryInRange = function (_from, _to) {
            //this.process()
            return _this.users.filter(function (u) { return u.salary > _from && u.salary < _to; });
        };
        this.process = function () {
        };
        this.users = users;
    }
    return EmployServiceImpl;
}());
// variable declaration
var usrObj;
// object creation
usrObj = new UserService();
var users = usrObj.getUsers();
console.log(users);
var emp = new EmployServiceImpl(users);
var emp1 = new EmployServiceImpl([]);
// emp.process()
emp.getAllWithSalaryInRange(45000, 60000)
    .forEach(function (u) { return console.log(JSON.stringify(u)); });
