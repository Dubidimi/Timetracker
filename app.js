function showDaily() {
    document.getElementById('daily').style.display = 'block'
    document.getElementById('weekly').style.display = 'none'
    document.getElementById('monthly').style.display = 'none'
    document.getElementById('daily_btn').style.color = 'white'
    document.getElementById('weekly_btn').style.color = '#7779b4'
    document.getElementById('monthly_btn').style.color = '#7779b4'
}
function showWeekly() {
    document.getElementById('daily').style.display = 'none'
    document.getElementById('weekly').style.display = 'block'
    document.getElementById('monthly').style.display = 'none'
    document.getElementById('daily_btn').style.color = '#7779b4'
    document.getElementById('weekly_btn').style.color = 'white'
    document.getElementById('monthly_btn').style.color = '#7779b4'
}
function showMonthly() {
    document.getElementById('daily').style.display = 'none'
    document.getElementById('weekly').style.display = 'none'
    document.getElementById('monthly').style.display = 'block'
    document.getElementById('daily_btn').style.color = '#7779b4'
    document.getElementById('weekly_btn').style.color = '#7779b4'
    document.getElementById('monthly_btn').style.color = 'white'
}