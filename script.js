function totalClick(click) {
    const totalClicks = document.getElementById('totalClicks');
    const sumValue = parseInt(totalClicks.innerText);
    console.log(sumValue + click);
    totalClicks.innerText = sumValue + click;


    if(sumValue < 0) {
        totalClicks.innerText = 0;
    }
 }
