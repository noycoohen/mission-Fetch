export class GatherInformation {
    firstName;
    lastName;
    totalSalary;
    pensionMoney;
    educationFund;
    constructor() {
        this.firstName = document.getElementById('firstName').value;
        this.lastName = document.getElementById('lastName').value;
        this.totalSalary = document.getElementById('totalSalary').value;
        this.pensionMoney = document.getElementById('pensionMoney').value;
        this.educationFund = document.getElementById('educationFund').value;
    }
}