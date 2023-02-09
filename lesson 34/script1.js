import { CalculateSalary } from "./calculateSalary.js";
import { GatherInformation } from "./gatherInformation.js";

let btn = document.getElementById('btn').addEventListener('click',()=>{
    let gatherFormInformation = new GatherInformation();
    let calculateSalaryNew = new CalculateSalary(gatherFormInformation);
    calculateSalaryNew.calculateAndPrint();
});