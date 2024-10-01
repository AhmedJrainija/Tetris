function generate_stick() {
  z = 70;
  document.querySelector('.b10').classList.add('s');
  document.querySelector('.b30').classList.add('s');
  document.querySelector('.b50').classList.add('s');
  document.querySelector('.b70').classList.add('s');
  stop_moving = 0;
  side_stop = 0;
}

function move_stick () {
  move1 = setInterval(() => {
    if (z <= 580) {
      if (up === 1) {
        let stick_floor1 = document.querySelector(`.b${z+20}`).classList.contains('f');
        if(stick_floor1 === false) {
        stop_moving = 0;
        for (let i = z; i < z+20; i = i+20) {
          document.querySelector(`.b${i+20}`).classList.add('s');
          document.querySelector(`.b${i-60}`).classList.remove('s');
        }
        z = z+20;
      } else {
        stop_moving++;
        if (stop_moving >= 4) {
          side_stop = 1;
          clearInterval(move1);
          generate();
        }
      }
      } else if (up === 2) {
        let stick_floor12 = document.querySelector(`.b${z+20}`).classList.contains('f');
        let stick_floor22 = document.querySelector(`.b${z+21}`).classList.contains('f');
        let stick_floor32 = document.querySelector(`.b${z+22}`).classList.contains('f');
        let stick_floor42 = document.querySelector(`.b${z+23}`).classList.contains('f');
        if((stick_floor12 === false) && (stick_floor22 === false) && (stick_floor32 === false) && (stick_floor42 === false)) {
          stop_moving = 0;
          for (let i = z; i < z+20; i = i+20) {
            document.querySelector(`.b${i+20}`).classList.add('s');
            document.querySelector(`.b${i}`).classList.remove('s');

            document.querySelector(`.b${i+21}`).classList.add('s');
            document.querySelector(`.b${i+1}`).classList.remove('s');

            document.querySelector(`.b${i+22}`).classList.add('s');
            document.querySelector(`.b${i+2}`).classList.remove('s');

            document.querySelector(`.b${i+23}`).classList.add('s');
            document.querySelector(`.b${i+3}`).classList.remove('s');
          }
          z = z+20;
      } else {
        stop_moving++;
        if (stop_moving >= 4) {
          side_stop = 1;
          clearInterval(move1);
          generate();
        }
      }
    }
    } else {
      clearInterval(move1);
      generate();
    }
  }, speed);
}

function move_stick_left () {
  if (up === 1) {
    if (z%20 !== 1) {
      let stick_sidel1 = document.querySelector(`.b${z-1}`).classList.contains('f');
      let stick_sidel2 = document.querySelector(`.b${z-21}`).classList.contains('f');
      let stick_sidel3 = document.querySelector(`.b${z-41}`).classList.contains('f');
      let stick_sidel4 = document.querySelector(`.b${z-61}`).classList.contains('f');
      if ((stick_sidel1 === false) && (stick_sidel2 === false) && (stick_sidel3 === false) && (stick_sidel4 === false)) {
        for(let i = z; i > z-1; i = i-1) {
          document.querySelector(`.b${i-1}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');
          document.querySelector(`.b${i}`).classList.remove('f');

          document.querySelector(`.b${i-21}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');
          document.querySelector(`.b${i-20}`).classList.remove('f');

          document.querySelector(`.b${i-41}`).classList.add('s');
          document.querySelector(`.b${i-40}`).classList.remove('s');
          document.querySelector(`.b${i-40}`).classList.remove('f');

          document.querySelector(`.b${i-61}`).classList.add('s');
          document.querySelector(`.b${i-60}`).classList.remove('s');
          document.querySelector(`.b${i-60}`).classList.remove('f');
        }
        z = z-1;
    }
    }
  } else if (up === 2) {
    if (z%20 !== 1) {
      let stick_sidel12 = document.querySelector(`.b${z-1}`).classList.contains('f');
      if (stick_sidel12 === false) {
        for(let i = z; i > z-1; i = i-1) {
          document.querySelector(`.b${i-1}`).classList.add('s');
          document.querySelector(`.b${i+3}`).classList.remove('s');
          document.querySelector(`.b${i+3}`).classList.remove('f');
        }
        z = z-1;
      }
    }
  }
}

function move_stick_right () {
  if (up === 1) {
    if (z%20 !== 0) {
      let stick_sider1 = document.querySelector(`.b${z+1}`).classList.contains('f');
      let stick_sider2 = document.querySelector(`.b${z-19}`).classList.contains('f');
      let stick_sider3 = document.querySelector(`.b${z-39}`).classList.contains('f');
      let stick_sider4 = document.querySelector(`.b${z-59}`).classList.contains('f');
      if ((stick_sider1 === false) && (stick_sider2 === false) && (stick_sider3 === false) && (stick_sider4 === false)) {
        for(let i = z; i < z+1; i = i+1) {
          document.querySelector(`.b${i+1}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');
          document.querySelector(`.b${i}`).classList.remove('f');

          document.querySelector(`.b${i-19}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');
          document.querySelector(`.b${i-20}`).classList.remove('f');

          document.querySelector(`.b${i-39}`).classList.add('s');
          document.querySelector(`.b${i-40}`).classList.remove('s');
          document.querySelector(`.b${i-40}`).classList.remove('f');

          document.querySelector(`.b${i-59}`).classList.add('s');
          document.querySelector(`.b${i-60}`).classList.remove('s');
          document.querySelector(`.b${i-60}`).classList.remove('f');
        }
        z = z+1;
      }
    }
  } else if (up === 2) {
    if ((z+3)%20 !== 0) {
      let stick_sider12 = document.querySelector(`.b${z+4}`).classList.contains('f');
      if (stick_sider12 === false) {
        for(let i = z; i < z+1; i = i+1) {
          document.querySelector(`.b${i+4}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');
          document.querySelector(`.b${i}`).classList.remove('f');
        }
        z = z+1;  
      }
    }    
  }
}

function flip_stick () {
  if ((up === 1)) {
    if ((z%20 !== 1) && (z%20 !== 2) && (z%20 !== 0)) {
      let stick_flip1 = document.querySelector(`.b${z-22}`).classList.contains('f');
      let stick_flip2 = document.querySelector(`.b${z-21}`).classList.contains('f');
      let stick_flip3 = document.querySelector(`.b${z-20}`).classList.contains('f');
      let stick_flip4 = document.querySelector(`.b${z-19}`).classList.contains('f');
      if ((stick_flip1 === false) && (stick_flip2 === false) && (stick_flip3 === false) && (stick_flip4 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z-20}`).classList.remove('s');
        document.querySelector(`.b${z-40}`).classList.remove('s');
        document.querySelector(`.b${z-60}`).classList.remove('s');

        document.querySelector(`.b${z-22}`).classList.add('s');
        document.querySelector(`.b${z-21}`).classList.add('s');
        document.querySelector(`.b${z-20}`).classList.add('s');
        document.querySelector(`.b${z-19}`).classList.add('s');

        z = z-22;
        up = 2;
      }
    } else if (z%20 === 2) {
      let stick_flip12 = document.querySelector(`.b${z-21}`).classList.contains('f');
      let stick_flip22 = document.querySelector(`.b${z-20}`).classList.contains('f');
      let stick_flip32 = document.querySelector(`.b${z-19}`).classList.contains('f');
      let stick_flip42 = document.querySelector(`.b${z-18}`).classList.contains('f');
      if ((stick_flip12 === false) && (stick_flip22 === false) && (stick_flip32 === false) && (stick_flip42 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z-20}`).classList.remove('s');
        document.querySelector(`.b${z-40}`).classList.remove('s');
        document.querySelector(`.b${z-60}`).classList.remove('s');
    
        document.querySelector(`.b${z-21}`).classList.add('s');
        document.querySelector(`.b${z-20}`).classList.add('s');
        document.querySelector(`.b${z-19}`).classList.add('s');
        document.querySelector(`.b${z-18}`).classList.add('s');
    
        z = z-21;
        up = 2;
      }
    } else if (z%20 === 1) {
      let stick_flip13 = document.querySelector(`.b${z-20}`).classList.contains('f');
      let stick_flip23 = document.querySelector(`.b${z-19}`).classList.contains('f');
      let stick_flip33 = document.querySelector(`.b${z-18}`).classList.contains('f');
      let stick_flip43 = document.querySelector(`.b${z-17}`).classList.contains('f');
      if ((stick_flip13 === false) && (stick_flip23 === false) && (stick_flip33 === false) && (stick_flip43 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z-20}`).classList.remove('s');
        document.querySelector(`.b${z-40}`).classList.remove('s');
        document.querySelector(`.b${z-60}`).classList.remove('s');
    
        document.querySelector(`.b${z-20}`).classList.add('s');
        document.querySelector(`.b${z-19}`).classList.add('s');
        document.querySelector(`.b${z-18}`).classList.add('s');
        document.querySelector(`.b${z-17}`).classList.add('s');
    
        z = z-20;
        up = 2;
      }
    } else if (z%20 === 0) {
      let stick_flip14 = document.querySelector(`.b${z-23}`).classList.contains('f');
      let stick_flip24 = document.querySelector(`.b${z-22}`).classList.contains('f');
      let stick_flip34 = document.querySelector(`.b${z-21}`).classList.contains('f');
      let stick_flip44 = document.querySelector(`.b${z-20}`).classList.contains('f');
      if ((stick_flip14 === false) && (stick_flip24 === false) && (stick_flip34 === false) && (stick_flip44 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z-20}`).classList.remove('s');
        document.querySelector(`.b${z-40}`).classList.remove('s');
        document.querySelector(`.b${z-60}`).classList.remove('s');
    
        document.querySelector(`.b${z-23}`).classList.add('s');
        document.querySelector(`.b${z-22}`).classList.add('s');
        document.querySelector(`.b${z-21}`).classList.add('s');
        document.querySelector(`.b${z-20}`).classList.add('s');
    
        z = z-23;
        up = 2;
      }
    } 
  } else if ((up === 2)) {
    if (z <= 560) {
      let stick_flip15 = document.querySelector(`.b${z-18}`).classList.contains('f');
      let stick_flip25 = document.querySelector(`.b${z+2}`).classList.contains('f');
      let stick_flip35 = document.querySelector(`.b${z+22}`).classList.contains('f');
      let stick_flip45 = document.querySelector(`.b${z+42}`).classList.contains('f');
      if ((stick_flip15 === false) && (stick_flip25 === false) && (stick_flip35 === false) && (stick_flip45 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z+1}`).classList.remove('s');
        document.querySelector(`.b${z+2}`).classList.remove('s');
        document.querySelector(`.b${z+3}`).classList.remove('s');

        document.querySelector(`.b${z-18}`).classList.add('s');
        document.querySelector(`.b${z+2}`).classList.add('s');
        document.querySelector(`.b${z+22}`).classList.add('s');
        document.querySelector(`.b${z+42}`).classList.add('s');
        z = z + 42;
        up = 1;
      }
    } else if ((z > 560) && (z <= 580)) {
      let stick_flip16 = document.querySelector(`.b${z+22}`).classList.contains('f');
      let stick_flip26 = document.querySelector(`.b${z+2}`).classList.contains('f');
      let stick_flip36 = document.querySelector(`.b${z-18}`).classList.contains('f');
      let stick_flip46 = document.querySelector(`.b${z-38}`).classList.contains('f');
      if ((stick_flip16 === false) && (stick_flip26 === false) && (stick_flip36 === false) && (stick_flip46 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z+1}`).classList.remove('s');
        document.querySelector(`.b${z+2}`).classList.remove('s');
        document.querySelector(`.b${z+3}`).classList.remove('s');

        document.querySelector(`.b${z+22}`).classList.add('s');
        document.querySelector(`.b${z+2}`).classList.add('s');
        document.querySelector(`.b${z-18}`).classList.add('s');
        document.querySelector(`.b${z-38}`).classList.add('s');
        z = z + 22;
        up = 1;
      }
    } else {
      let stick_flip17 = document.querySelector(`.b${z+2}`).classList.contains('f');
      let stick_flip27 = document.querySelector(`.b${z-18}`).classList.contains('f');
      let stick_flip37 = document.querySelector(`.b${z-38}`).classList.contains('f');
      let stick_flip47 = document.querySelector(`.b${z-58}`).classList.contains('f');
      if ((stick_flip17 === false) && (stick_flip27 === false) && (stick_flip37 === false) && (stick_flip47 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z+1}`).classList.remove('s');
        document.querySelector(`.b${z+2}`).classList.remove('s');
        document.querySelector(`.b${z+3}`).classList.remove('s');

        document.querySelector(`.b${z+2}`).classList.add('s');
        document.querySelector(`.b${z-18}`).classList.add('s');
        document.querySelector(`.b${z-38}`).classList.add('s');
        document.querySelector(`.b${z-58}`).classList.add('s');
        z = z + 2;
        up = 1;
      }
    }
  }
}

function move_stick2 () {
  if (z <= 580) {
    if (up === 1) {
      let stick_floor1 = document.querySelector(`.b${z+20}`).classList.contains('f');
      if(stick_floor1 === false) {
      stop_moving = 0;
      for (let i = z; i < z+20; i = i+20) {
        document.querySelector(`.b${i+20}`).classList.add('s');
        document.querySelector(`.b${i-60}`).classList.remove('s');
      }
      z = z+20;
    } else {
      down = 0;
      stop_moving++;
      if (stop_moving >= 4) {
        side_stop = 1;
        clearInterval(move1);
        generate();
      }
    }
    } else if (up === 2) {
      let stick_floor12 = document.querySelector(`.b${z+20}`).classList.contains('f');
      let stick_floor22 = document.querySelector(`.b${z+21}`).classList.contains('f');
      let stick_floor32 = document.querySelector(`.b${z+22}`).classList.contains('f');
      let stick_floor42 = document.querySelector(`.b${z+23}`).classList.contains('f');
      if((stick_floor12 === false) && (stick_floor22 === false) && (stick_floor32 === false) && (stick_floor42 === false)) {
        stop_moving = 0;
        for (let i = z; i < z+20; i = i+20) {
          document.querySelector(`.b${i+20}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');

          document.querySelector(`.b${i+21}`).classList.add('s');
          document.querySelector(`.b${i+1}`).classList.remove('s');

          document.querySelector(`.b${i+22}`).classList.add('s');
          document.querySelector(`.b${i+2}`).classList.remove('s');

          document.querySelector(`.b${i+23}`).classList.add('s');
          document.querySelector(`.b${i+3}`).classList.remove('s');
        }
        z = z+20;
    } else {
      down = 0;
      stop_moving++;
      if (stop_moving >= 4) {
        side_stop = 1;
        clearInterval(move1);
        generate();
      }
    }
  }
  } else {
    down = 0;
    clearInterval(move1);
    generate();
  }
}
