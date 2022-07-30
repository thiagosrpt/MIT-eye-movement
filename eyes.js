const balls = document.getElementsByClassName('ball');
const light_balls = document.getElementsByClassName('light_ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }

  const light_x = (event.clientX * 100) / window.innerWidth + '%';
  const light_y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < 2; i++) {
    light_balls[i].style.left = light_y;
    light_balls[i].style.top = light_x;
    light_balls[i].transform = 'translate(-' + light_y + ',-' + light_x + ')';
  }


};