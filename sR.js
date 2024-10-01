function generate_sR() {
  z = 30;
  document.querySelector('.b10').classList.add('s');
  document.querySelector('.b30').classList.add('s');
  document.querySelector('.b11').classList.add('s');
  document.querySelector('.b29').classList.add('s');
  stop_moving = 0;
  side_stop = 0;
}

function move_sR () {
  move6 = setInterval(() => {
  if (up === 1) {
    if (z <= 580) {
      let sR_floor1 = document.querySelector(`.b${z+20}`).classList.contains('f');
      let sR_floor2 = document.querySelector(`.b${z+19}`).classList.contains('f');
      let sR_floor3 = document.querySelector(`.b${z+1}`).classList.contains('f');
      if((sR_floor1 === false) && (sR_floor2 === false) && (sR_floor3 === false)) {
      stop_moving = 0;
      for (let i = z; i < z+20; i = i+20) {
        document.querySelector(`.b${i+20}`).classList.add('s');
        document.querySelector(`.b${i-20}`).classList.remove('s');

        document.querySelector(`.b${i+19}`).classList.add('s');
        document.querySelector(`.b${i-1}`).classList.remove('s');

        document.querySelector(`.b${i+1}`).classList.add('s');
        document.querySelector(`.b${i-19}`).classList.remove('s');
      }
      z = z+20;
      } else {
        stop_moving++;
        if (stop_moving >= 4) {
          side_stop = 1;
          clearInterval(move6);
          generate();
        }
      }
    }  else {
      clearInterval(move6);
      generate();
    }
  } else if (up === 2) {
    if ((z+21) <= 580) {
      let sR_floor12 = document.querySelector(`.b${z+41}`).classList.contains('f');
      let sR_floor22 = document.querySelector(`.b${z+20}`).classList.contains('f');
      if((sR_floor12 === false) && (sR_floor22 === false)) {
        stop_moving = 0;
        for (let i = z; i < z+20; i = i+20) {
          document.querySelector(`.b${i+41}`).classList.add('s');
          document.querySelector(`.b${i+1}`).classList.remove('s');

          document.querySelector(`.b${i+20}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');
        }
        z = z+20;
        } else {
          stop_moving++;
          if (stop_moving >= 4) {
            side_stop = 1;
            clearInterval(move6);
            generate();
          }
        }
    }  else {
      clearInterval(move6);
      generate();
    }
  }
  }, speed);
}

function move_sR_left () {
  if (up === 1) {
    if ((z-1)%20 !== 1) {
      let sR_sidel1 = document.querySelector(`.b${z-2}`).classList.contains('f');
      let sR_sidel2 = document.querySelector(`.b${z-21}`).classList.contains('f');
      if ((sR_sidel1 === false) && (sR_sidel2 === false)) {
        for(let i = z; i > z-1; i = i-1) {
          document.querySelector(`.b${i-2}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');
          document.querySelector(`.b${i}`).classList.remove('f');

          document.querySelector(`.b${i-21}`).classList.add('s');
          document.querySelector(`.b${i-19}`).classList.remove('s');
          document.querySelector(`.b${i-19}`).classList.remove('f');
        }
        z = z-1;
    }
    }
  } else if (up === 2) {
    if (z%20 !== 1) {
      let sR_sidel12 = document.querySelector(`.b${z-1}`).classList.contains('f');
      let sR_sidel22 = document.querySelector(`.b${z-21}`).classList.contains('f');
      let sR_sidel32 = document.querySelector(`.b${z+20}`).classList.contains('f');
      if ((sR_sidel12 === false) && (sR_sidel22 === false) && (sR_sidel32 === false)) {
        for(let i = z; i > z-1; i = i-1) {
          document.querySelector(`.b${i-1}`).classList.add('s');
          document.querySelector(`.b${i+1}`).classList.remove('s');
          document.querySelector(`.b${i+1}`).classList.remove('f');

          document.querySelector(`.b${i-21}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');
          document.querySelector(`.b${i-20}`).classList.remove('f');

          document.querySelector(`.b${i+20}`).classList.add('s');
          document.querySelector(`.b${i+21}`).classList.remove('s');
          document.querySelector(`.b${i+21}`).classList.remove('f');
        }
        z = z-1;
      }
    }
  }
}

function move_sR_right () {
  if (up === 1) {
    if ((z-19)%20 !== 0) {
      let sR_sider1 = document.querySelector(`.b${z+1}`).classList.contains('f');
      let sR_sider2 = document.querySelector(`.b${z-18}`).classList.contains('f');
      if ((sR_sider1 === false) && (sR_sider2 === false)) {
        for(let i = z; i < z+1; i = i+1) {
          document.querySelector(`.b${i+1}`).classList.add('s');
          document.querySelector(`.b${i-1}`).classList.remove('s');
          document.querySelector(`.b${i-1}`).classList.remove('f');

          document.querySelector(`.b${i-18}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');
          document.querySelector(`.b${i-20}`).classList.remove('f');
        }
        z = z+1;
      }
    }
  } else if (up === 2) {
    if ((z+1)%20 !== 0) {
      let sR_sider12 = document.querySelector(`.b${z+2}`).classList.contains('f');
      let sR_sider22 = document.querySelector(`.b${z-19}`).classList.contains('f');
      let sR_sider32 = document.querySelector(`.b${z+22}`).classList.contains('f');
      if ((sR_sider12 === false) && (sR_sider22 === false) && (sR_sider32 === false)) {
        for(let i = z; i < z+1; i = i+1) {
          document.querySelector(`.b${i+2}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');
          document.querySelector(`.b${i}`).classList.remove('f');

          document.querySelector(`.b${i-19}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');
          document.querySelector(`.b${i-20}`).classList.remove('f');

          document.querySelector(`.b${i+22}`).classList.add('s');
          document.querySelector(`.b${i+21}`).classList.remove('s');
          document.querySelector(`.b${i+21}`).classList.remove('f');
        }
        z = z+1;  
      }
    }    
  }
}

function flip_sR () {
  if ((up === 1)) {
    if ((z <= 580)) {
      let sR_flip1 = document.querySelector(`.b${z-20}`).classList.contains('f');
      let sR_flip2 = document.querySelector(`.b${z}`).classList.contains('f');
      let sR_flip3 = document.querySelector(`.b${z+1}`).classList.contains('f');
      let sR_flip4 = document.querySelector(`.b${z+21}`).classList.contains('f');
      if ((sR_flip1 === false) && (sR_flip2 === false) && (sR_flip3 === false) && (sR_flip4 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z-1}`).classList.remove('s');
        document.querySelector(`.b${z-20}`).classList.remove('s');
        document.querySelector(`.b${z-19}`).classList.remove('s');

        document.querySelector(`.b${z-20}`).classList.add('s');
        document.querySelector(`.b${z}`).classList.add('s');
        document.querySelector(`.b${z+1}`).classList.add('s');
        document.querySelector(`.b${z+21}`).classList.add('s');

        up = 2;
      }
    } else {
      let sR_flip13 = document.querySelector(`.b${z-20}`).classList.contains('f');
      let sR_flip23 = document.querySelector(`.b${z-19}`).classList.contains('f');
      let sR_flip33 = document.querySelector(`.b${z+1}`).classList.contains('f');
      let sR_flip43 = document.querySelector(`.b${z-40}`).classList.contains('f');
      if ((sR_flip13 === false) && (sR_flip23 === false) && (sR_flip33 === false) && (sR_flip43 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z-1}`).classList.remove('s');
        document.querySelector(`.b${z-20}`).classList.remove('s');
        document.querySelector(`.b${z-19}`).classList.remove('s');

        document.querySelector(`.b${z-20}`).classList.add('s');
        document.querySelector(`.b${z-19}`).classList.add('s');
        document.querySelector(`.b${z+1}`).classList.add('s');
        document.querySelector(`.b${z-40}`).classList.add('s');

        z = z-20;
        up = 2;
      }
    }
  } else if ((up === 2)) {
    if(z%20 !== 1) {
      let sR_flip12 = document.querySelector(`.b${z}`).classList.contains('f');
      let sR_flip22 = document.querySelector(`.b${z-1}`).classList.contains('f');
      let sR_flip32 = document.querySelector(`.b${z-20}`).classList.contains('f');
      let sR_flip42 = document.querySelector(`.b${z-19}`).classList.contains('f');
      if ((sR_flip12 === false) && (sR_flip22 === false) && (sR_flip32 === false) && (sR_flip42 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z+1}`).classList.remove('s');
        document.querySelector(`.b${z+21}`).classList.remove('s');
        document.querySelector(`.b${z-20}`).classList.remove('s');

        document.querySelector(`.b${z}`).classList.add('s');
        document.querySelector(`.b${z-1}`).classList.add('s');
        document.querySelector(`.b${z-20}`).classList.add('s');
        document.querySelector(`.b${z-19}`).classList.add('s');
        up = 1;
      }
    } else {
      let sR_flip14 = document.querySelector(`.b${z-18}`).classList.contains('f');
      let sR_flip24 = document.querySelector(`.b${z}`).classList.contains('f');
      let sR_flip34 = document.querySelector(`.b${z+1}`).classList.contains('f');
      let sR_flip44 = document.querySelector(`.b${z-19}`).classList.contains('f');
      if ((sR_flip14 === false) && (sR_flip24 === false) && (sR_flip34 === false) && (sR_flip44 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z+1}`).classList.remove('s');
        document.querySelector(`.b${z+21}`).classList.remove('s');
        document.querySelector(`.b${z-20}`).classList.remove('s');

        document.querySelector(`.b${z-19}`).classList.add('s');
        document.querySelector(`.b${z}`).classList.add('s');
        document.querySelector(`.b${z+1}`).classList.add('s');
        document.querySelector(`.b${z-18}`).classList.add('s');
        z =z +1;
        up = 1;
      }
    }
  }
}

function move_sR2 () {
  if (up === 1) {
    if (z <= 580) {
      let sR_floor1 = document.querySelector(`.b${z+20}`).classList.contains('f');
      let sR_floor2 = document.querySelector(`.b${z+19}`).classList.contains('f');
      let sR_floor3 = document.querySelector(`.b${z+1}`).classList.contains('f');
      if((sR_floor1 === false) && (sR_floor2 === false) && (sR_floor3 === false)) {
      stop_moving = 0;
      for (let i = z; i < z+20; i = i+20) {
        document.querySelector(`.b${i+20}`).classList.add('s');
        document.querySelector(`.b${i-20}`).classList.remove('s');

        document.querySelector(`.b${i+19}`).classList.add('s');
        document.querySelector(`.b${i-1}`).classList.remove('s');

        document.querySelector(`.b${i+1}`).classList.add('s');
        document.querySelector(`.b${i-19}`).classList.remove('s');
      }
      z = z+20;
      } else {
        down = 0;
        stop_moving++;
        if (stop_moving >= 4) {
          side_stop = 1;
          clearInterval(move6);
          generate();
        }
      }
    }  else {
      down = 0;
      clearInterval(move6);
      generate();
    }
  } else if (up === 2) {
    if ((z+21) <= 580) {
      let sR_floor12 = document.querySelector(`.b${z+41}`).classList.contains('f');
      let sR_floor22 = document.querySelector(`.b${z+20}`).classList.contains('f');
      if((sR_floor12 === false) && (sR_floor22 === false)) {
        stop_moving = 0;
        for (let i = z; i < z+20; i = i+20) {
          document.querySelector(`.b${i+41}`).classList.add('s');
          document.querySelector(`.b${i+1}`).classList.remove('s');

          document.querySelector(`.b${i+20}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');
        }
        z = z+20;
        } else {
          down = 0;
          stop_moving++;
          if (stop_moving >= 4) {
            side_stop = 1;
            clearInterval(move6);
            generate();
          }
        }
    }  else {
      down = 0;
      clearInterval(move6);
      generate();
    }
  }
}