const wage = prompt("Zadej mzdu na hodinu")
const hours = prompt("Zadej pocet hodin")
const days = prompt("Zadej pocet dni")

const wagePerHour = parseInt(wage);
const workedHoursPerDay =  parseInt(hours);
const workedDaysPerMonth =  parseInt(days);


const salary = (wage, hours, days) => {
    const monthlyWage = wage * hours * days;
    return monthlyWage;
};

const taxed = (amount, taxPercentage) => {
    const taxAmount = (taxPercentage / 100) * amount;
    const netAmount = amount - taxAmount;
    return netAmount;
};

const grossMonthlySalary = salary(wagePerHour, workedHoursPerDay, workedDaysPerMonth);


const taxPercentage = 15;
const netMonthlySalary = taxed(grossMonthlySalary, taxPercentage);

document.getElementById("grossSalary").innerText = `Hrubá měsíční mzda: ${grossMonthlySalary} Kč`;
document.getElementById("netSalary").innerText = `Zdaněná měsíční mzda (po 15% zdanění): ${netMonthlySalary} Kč`;
