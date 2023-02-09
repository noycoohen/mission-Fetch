export class CalculateSalary {
    formInformation;
    constructor(formInformationObject) {
        this.formInformation = formInformationObject;
    }
    calculateAndPrint() {
        this.calculateTaxes();
        this.calculateDeductions();
        document.getElementById('screen').innerText = `
            First name: ${this.formInformation.firstName},
            Last name: ${this.formInformation.lastName},
            Pension percentage: ${this.formInformation.pensionMoney},
            Education fund percentage: ${this.formInformation.educationFund},
            Net salary: ${this.formInformation.totalSalary},
        `;
    }
    calculateTaxes() {
        if (this.formInformation.totalSalary >= 58191) {
            this.formInformation.totalSalary = this.formInformation.totalSalary * 0.50;
        } else if (this.formInformation.totalSalary >= 45181) {
            this.formInformation.totalSalary = this.formInformation.totalSalary * 0.53;
        } else if (this.formInformation.totalSalary >= 21711) {
            this.formInformation.totalSalary = this.formInformation.totalSalary * 0.65;
        }  else if (this.formInformation.totalSalary >= 15621) {
            this.formInformation.totalSalary = this.formInformation.totalSalary * 0.69;
        } else if (this.formInformation.totalSalary >= 9731) {
            this.formInformation.totalSalary = this.formInformation.totalSalary * 0.80;
        } else if (this.formInformation.totalSalary >= 6791) {
            this.formInformation.totalSalary = this.formInformation.totalSalary * 0.86;
        } else {
            this.formInformation.totalSalary = this.formInformation.totalSalary * 0.9;
        }
    }
    calculateDeductions() {
        this.formInformation.totalSalary = this.formInformation.totalSalary * this.formInformation.pensionMoney;
        this.formInformation.totalSalary = this.formInformation.totalSalary * this.formInformation.educationFund;
    }
}