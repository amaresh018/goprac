var up = document.getElementById('GFG_UP');
var down = document.getElementById('GFG_DOWN');
up.innerHTML = 'Click on the button to generate alpha-numeric string';
  up.style.color="white"
  up.style.marginLeft="350px"
down.style.marginLeft="300px"  

function randomStr(len, arr) {
    var ans = '';
    for (var i = len; i > 0; i--) {
        ans += arr[Math.floor(Math.random() * arr.length)];
    }
    return ans;
}

function GFG_Fun() {
    down.innerHTML = randomStr(56, '1234567890abcdefghijklmnopqrst');
}