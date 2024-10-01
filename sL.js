function generate_sL() {
  z = 30;
  document.querySelector('.b10').classList.add('s');
  document.querySelector('.b30').classList.add('s');
  document.querySelector('.b9').classList.add('s');
  document.querySelector('.b31').classList.add('s');
  stop_moving = 0;
  side_stop = 0;
}

function move_sL () {
  move7 = setInterval(() => {
    if (up === 1) {
      if (z <= 580) {
        let sL_floor1 = document.querySelector(`.b${z+20}`).classList.contains('f');
        let sL_floor2 = document.querySelector(`.b${z+21}`).classList.contains('f');
        let sL_floor3 = document.querySelector(`.b${z-1}`).classList.contains('f');
        if((sL_floor1 === false) && (sL_floor2 === false) && (sL_floor3 === false)) {
        stop_moving = 0;
        for (let i = z; i < z+20; i = i+20) {
          document.querySelector(`.b${i+20}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');

          document.querySelector(`.b${i+21}`).classList.add('s');
          document.querySelector(`.b${i+1}`).classList.remove('s');

          document.querySelector(`.b${i-1}`).classList.add('s');
          document.querySelector(`.b${i-21}`).classList.remove('s');
        }
        z = z+20;
        } else {
          stop_moving++;
          if (stop_moving >= 4) {
            side_stop = 1;
            clearInterval(move7);
            generate();
          }
        }
      }  else {
        clearInterval(move7);
        generate();
      }
    } else if (up === 2) {
      if ((z+21) <= 580) {
        let sL_floor12 = document.querySelector(`.b${z+40}`).classList.contains('f');
        let sL_floor22 = document.querySelector(`.b${z+21}`).classList.contains('f');
        if((sL_floor12 === false) && (sL_floor22 === false)) {
          stop_moving = 0;
          for (let i = z; i < z+20; i = i+20) {
            document.querySelector(`.b${i+40}`).classList.add('s');
            document.querySelector(`.b${i}`).classList.remove('s');

            document.querySelector(`.b${i+21}`).classList.add('s');
            document.querySelector(`.b${i-19}`).classList.remove('s');
          }
          z = z+20;
          } else {
            stop_moving++;
            if (stop_moving >= 4) {
              side_stop = 1;
              clearInterval(move7);
              generate();
            }
          }
      }  else {
        clearInterval(move7);
        generate();
      }
    }
  }, speed);
}

function move_sL_left () {
  if (up === 1) {
    if ((z-21)%20 !== 1) {
      let sL_sidel1 = document.querySelector(`.b${z-1}`).classList.contains('f');
      let sL_sidel2 = document.querySelector(`.b${z-22}`).classList.contains('f');
      if ((sL_sidel1 === false) && (sL_sidel2 === false)) {
        for(let i = z; i > z-1; i = i-1) {
          document.querySelector(`.b${i-1}`).classList.add('s');
          document.querySelector(`.b${i+1}`).classList.remove('s');
          document.querySelector(`.b${i+1}`).classList.remove('f');

          document.querySelector(`.b${i-22}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');
          document.querySelector(`.b${i-20}`).classList.remove('f');
        }
        z = z-1;
    }
    }
  } else if (up === 2) {
    if (z%20 !== 1) {
      let sL_sidel12 = document.querySelector(`.b${z-1}`).classList.contains('f');
      let sL_sidel22 = document.querySelector(`.b${z-20}`).classList.contains('f');
      let sL_sidel32 = document.querySelector(`.b${z+19}`).classList.contains('f');
      if ((sL_sidel12 === false) && (sL_sidel22 === false) && (sL_sidel32 === false)) {
        for(let i = z; i > z-1; i = i-1) {
          document.querySelector(`.b${i-1}`).classList.add('s');
          document.querySelector(`.b${i+1}`).classList.remove('s');
          document.querySelector(`.b${i+1}`).classList.remove('f');

          document.querySelector(`.b${i-20}`).classList.add('s');
          document.querySelector(`.b${i-19}`).classList.remove('s');
          document.querySelector(`.b${i-19}`).classList.remove('f');

          document.querySelector(`.b${i+19}`).classList.add('s');
          document.querySelector(`.b${i+20}`).classList.remove('s');
          document.querySelector(`.b${i+20}`).classList.remove('f');
        }
        z = z-1;
      }
    }
  }
}

function move_sL_right () {
  if (up === 1) {
    if ((z+1)%20 !== 0) {
      let sL_sider1 = document.querySelector(`.b${z+2}`).classList.contains('f');
      let sL_sider2 = document.querySelector(`.b${z-19}`).classList.contains('f');
      if ((sL_sider1 === false) && (sL_sider2 === false)) {
        for(let i = z; i < z+1; i = i+1) {
          document.querySelector(`.b${i+2}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');
          document.querySelector(`.b${i}`).classList.remove('f');

          document.querySelector(`.b${i-19}`).classList.add('s');
          document.querySelector(`.b${i-21}`).classList.remove('s');
          document.querySelector(`.b${i-21}`).classList.remove('f');
        }
        z = z+1;
      }
    }
  } else if (up === 2) {
    if ((z+1)%20 !== 0) {
      let sL_sider12 = document.querySelector(`.b${z+2}`).classList.contains('f');
      let sL_sider22 = document.querySelector(`.b${z-18}`).classList.contains('f');
      let sL_sider32 = document.querySelector(`.b${z+21}`).classList.contains('f');
      if ((sL_sider12 === false) && (sL_sider22 === false) && (sL_sider32 === false)) {
        for(let i = z; i < z+1; i = i+1) {
          document.querySelector(`.b${i+2}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');
          document.querySelector(`.b${i}`).classList.remove('f');

          document.querySelector(`.b${i-18}`).classList.add('s');
          document.querySelector(`.b${i-19}`).classList.remove('s');
          document.querySelector(`.b${i-19}`).classList.remove('f');

          document.querySelector(`.b${i+21}`).classList.add('s');
          document.querySelector(`.b${i+20}`).classList.remove('s');
          document.querySelector(`.b${i+20}`).classList.remove('f');
        }
        z = z+1;  
      }
    }    
  }
}

function flip_sL () {
    if ((up === 1)) {
    if ((z <= 580)) {
      let sL_flip1 = document.querySelector(`.b${z-19}`).classList.contains('f');
      let sL_flip2 = document.querySelector(`.b${z}`).classList.contains('f');
      let sL_flip3 = document.querySelector(`.b${z+1}`).classList.contains('f');
      let sL_flip4 = document.querySelector(`.b${z+20}`).classList.contains('f');
      if ((sL_flip1 === false) && (sL_flip2 === false) && (sL_flip3 === false) && (sL_flip4 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z+1}`).classList.remove('s');
        document.querySelector(`.b${z-20}`).classList.remove('s');
        document.querySelector(`.b${z-21}`).classList.remove('s');

        document.querySelector(`.b${z}`).classList.add('s');
        document.querySelector(`.b${z-19}`).classList.add('s');
        document.querySelector(`.b${z+1}`).classList.add('s');
        document.querySelector(`.b${z+20}`).classList.add('s');

        up = 2;
      }
    } else {
      let sL_flip13 = document.querySelector(`.b${z-20}`).classList.contains('f');
      let sL_flip23 = document.querySelector(`.b${z-39}`).classList.contains('f');
      let sL_flip33 = document.querySelector(`.b${z}`).classList.contains('f');
      let sL_flip43 = document.querySelector(`.b${z-19}`).classList.contains('f');
      if ((sL_flip13 === false) && (sL_flip23 === false) && (sL_flip33 === false) && (sL_flip43 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z+1}`).classList.remove('s');
        document.querySelector(`.b${z-20}`).classList.remove('s');
        document.querySelector(`.b${z-21}`).classList.remove('s');

        document.querySelector(`.b${z-20}`).classList.add('s');
        document.querySelector(`.b${z}`).classList.add('s');
        document.querySelector(`.b${z-19}`).classList.add('s');
        document.querySelector(`.b${z-39}`).classList.add('s');

        z = z-20;
        up = 2;
      }
    }
  } else if ((up === 2)) {
    if(z%20 !== 1) {
      let sL_flip12 = document.querySelector(`.b${z}`).classList.contains('f');
      let sL_flip22 = document.querySelector(`.b${z+1}`).classList.contains('f');
      let sL_flip32 = document.querySelector(`.b${z-21}`).classList.contains('f');
      let sL_flip42 = document.querySelector(`.b${z-20}`).classList.contains('f');
      if ((sL_flip12 === false) && (sL_flip22 === false) && (sL_flip32 === false) && (sL_flip42 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z+1}`).classList.remove('s');
        document.querySelector(`.b${z-19}`).classList.remove('s');
        document.querySelector(`.b${z+20}`).classList.remove('s');

        document.querySelector(`.b${z}`).classList.add('s');
        document.querySelector(`.b${z+1}`).classList.add('s');
        document.querySelector(`.b${z-21}`).classList.add('s');
        document.querySelector(`.b${z-20}`).classList.add('s');
        up = 1;
      }
    } else {
      let sL_flip14 = document.querySelector(`.b${z-20}`).classList.contains('f');
      let sL_flip24 = document.querySelector(`.b${z+1}`).classList.contains('f');
      let sL_flip34 = document.querySelector(`.b${z+2}`).classList.contains('f');
      let sL_flip44 = document.querySelector(`.b${z-19}`).classList.contains('f');
      if ((sL_flip14 === false) && (sL_flip24 === false) && (sL_flip34 === false) && (sL_flip44 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z+1}`).classList.remove('s');
        document.querySelector(`.b${z-19}`).classList.remove('s');
        document.querySelector(`.b${z+20}`).classList.remove('s');

        document.querySelector(`.b${z-20}`).classList.add('s');
        document.querySelector(`.b${z+1}`).classList.add('s');
        document.querySelector(`.b${z+2}`).classList.add('s');
        document.querySelector(`.b${z-19}`).classList.add('s');
        z =z+1;
        up = 1;
      }
    }
  }
}

function move_sL2 () {
  if (up === 1) {
    if (z <= 580) {
      let sL_floor1 = document.querySelector(`.b${z+20}`).classList.contains('f');
      let sL_floor2 = document.querySelector(`.b${z+21}`).classList.contains('f');
      let sL_floor3 = document.querySelector(`.b${z-1}`).classList.contains('f');
      if((sL_floor1 === false) && (sL_floor2 === false) && (sL_floor3 === false)) {
      stop_moving = 0;
      for (let i = z; i < z+20; i = i+20) {
        document.querySelector(`.b${i+20}`).classList.add('s');
        document.querySelector(`.b${i-20}`).classList.remove('s');

        document.querySelector(`.b${i+21}`).classList.add('s');
        document.querySelector(`.b${i+1}`).classList.remove('s');

        document.querySelector(`.b${i-1}`).classList.add('s');
        document.querySelector(`.b${i-21}`).classList.remove('s');
      }
      z = z+20;
      } else {
        down = 0;
        stop_moving++;
        if (stop_moving >= 4) {
          side_stop = 1;
          clearInterval(move7);
          generate();
        }
      }
    }  else {
      down = 0;
      clearInterval(move7);
      generate();
    }
  } else if (up === 2) {
    if ((z+21) <= 580) {
      let sL_floor12 = document.querySelector(`.b${z+40}`).classList.contains('f');
      let sL_floor22 = document.querySelector(`.b${z+21}`).classList.contains('f');
      if((sL_floor12 === false) && (sL_floor22 === false)) {
        stop_moving = 0;
        for (let i = z; i < z+20; i = i+20) {
          document.querySelector(`.b${i+40}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');

          document.querySelector(`.b${i+21}`).classList.add('s');
          document.querySelector(`.b${i-19}`).classList.remove('s');
        }
        z = z+20;
        } else {
          down = 0;
          stop_moving++;
          if (stop_moving >= 4) {
            side_stop = 1;
            clearInterval(move7);
            generate();
          }
        }
    }  else {
      down = 0;
      clearInterval(move7);
      generate();
    }
  }
}