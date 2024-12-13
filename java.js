const form = document.getElementById('cpi');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let totalGradePoints = 0;
    let totalCredits = 0;
    const resultDiv = document.getElementById('result');



    const grades = document.querySelectorAll('.grade');
    const credits = document.querySelectorAll('.credit');

    grades.forEach((gade, index) => {
        const grade = parseInt(gade.value);
        const credit = parseInt(credits[index].value);
        totalGradePoints += grade * credit;
        totalCredits += credit;
        // console.log(gade);
    });

    const cpi = totalGradePoints / totalCredits;
    console.log(cpi);
    resultDiv.textContent = `Your CPI is: ${cpi.toFixed(2)}`;
});