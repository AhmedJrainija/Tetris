function generate_crowbarR() {
  z = 50;
  document.querySelector('.b10').classList.add('s');
  document.querySelector('.b30').classList.add('s');
  document.querySelector('.b50').classList.add('s');
  document.querySelector('.b51').classList.add('s');
  stop_moving = 0;
  side_stop = 0;
}

function move_crowbarR () {
  move4 = setInterval(() => {
    if (up === 1) {
      if (z <= 580) {
        let cr_floor1 = document.querySelector(`.b${z+20}`).classList.contains('f');
        let cr_floor2 = document.querySelector(`.b${z+21}`).classList.contains('f');
        if ((cr_floor1 === false) && (cr_floor2 === false)) {
          stop_moving = 0;
        for (let i = z; i < z+20; i = i+20) {
          document.querySelector(`.b${i+20}`).classList.add('s');
          document.querySelector(`.b${i-40}`).classList.remove('s');
          
          document.querySelector(`.b${i+21}`).classList.add('s');
          document.querySelector(`.b${i+1}`).classList.remove('s');
        }
        z = z+20;
      } else {
        stop_moving++;
        if (stop_moving >= 4) {
          side_stop = 1;
          clearInterval(move4);
          generate();
        }
      }
      } else {
        clearInterval(move4);
        generate();
      }
    } else if (up === 2) {
      if ((z+20) <= 580) {
        let cr_floor12 = document.querySelector(`.b${z+40}`).classList.contains('f');
        let cr_floor22 = document.querySelector(`.b${z+21}`).classList.contains('f');
        let cr_floor32 = document.querySelector(`.b${z+22}`).classList.contains('f');
        if ((cr_floor12 === false) && (cr_floor22 === false) && (cr_floor32 === false)) {
          stop_moving = 0;
        for (let i = z; i < z+20; i = i+20) {
          document.querySelector(`.b${i+40}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');

          document.querySelector(`.b${i+21}`).classList.add('s');
          document.querySelector(`.b${i+1}`).classList.remove('s');

          document.querySelector(`.b${i+22}`).classList.add('s');
          document.querySelector(`.b${i+2}`).classList.remove('s');
        }
        z = z+20;
      } else {
        stop_moving++;
        if (stop_moving >= 4) {
          side_stop = 1;
          clearInterval(move4);
          generate();
        }
      }
      } else {
        clearInterval(move4);
        generate();
      }
    }  else if (up === 3) {
      if ((z+40) <= 580) {
        let cr_floor13 = document.querySelector(`.b${z+60}`).classList.contains('f');
        let cr_floor23 = document.querySelector(`.b${z+19}`).classList.contains('f');
        if ((cr_floor13 === false) && (cr_floor23 === false)) {
          stop_moving = 0;
        for (let i = z; i < z+20; i = i+20) {
          document.querySelector(`.b${i+60}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');

          document.querySelector(`.b${i+19}`).classList.add('s');
          document.querySelector(`.b${i-1}`).classList.remove('s');
        }
        z = z+20;
      } else {
        stop_moving++;
        if (stop_moving >= 4) {
          side_stop = 1;
          clearInterval(move4);
          generate();
        }
      }
      } else {
        clearInterval(move4);
        generate();
      }
    } else if (up === 4) {
      if (z <= 580) {
        let cr_floor14 = document.querySelector(`.b${z+20}`).classList.contains('f');
        let cr_floor24 = document.querySelector(`.b${z+19}`).classList.contains('f');
        let cr_floor34 = document.querySelector(`.b${z+18}`).classList.contains('f');
        if ((cr_floor14 === false) && (cr_floor24 === false) && (cr_floor34 === false)) {
          stop_moving = 0;
        for (let i = z; i < z+20; i = i+20) {
          document.querySelector(`.b${i+20}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');

          document.querySelector(`.b${i+19}`).classList.add('s');
          document.querySelector(`.b${i-1}`).classList.remove('s');

          document.querySelector(`.b${i+18}`).classList.add('s');
          document.querySelector(`.b${i-2}`).classList.remove('s');
        }
        z = z+20;
      } else {
        stop_moving++;
        if (stop_moving >= 4) {
          side_stop = 1;
          clearInterval(move4);
          generate();
        }
      }
      } else {
        clearInterval(move4);
        generate();
      }
    }
  }, speed);
}

function move_crowbarR_left () {
  if (up === 1) {
    if (z%20 !== 1) {
      let cr_sidel1 = document.querySelector(`.b${z-1}`).classList.contains('f');
      let cr_sidel2 = document.querySelector(`.b${z-21}`).classList.contains('f');
      let cr_sidel3 = document.querySelector(`.b${z-41}`).classList.contains('f');
      if ((cr_sidel1 === false) && (cr_sidel2 === false) && (cr_sidel3 === false)) {
        for(let i = z; i > z-1; i = i-1) {
          document.querySelector(`.b${i-1}`).classList.add('s');
          document.querySelector(`.b${i+1}`).classList.remove('s');
          document.querySelector(`.b${i+1}`).classList.remove('f');

          document.querySelector(`.b${i-21}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');
          document.querySelector(`.b${i-20}`).classList.remove('f');

          document.querySelector(`.b${i-41}`).classList.add('s');
          document.querySelector(`.b${i-40}`).classList.remove('s');
          document.querySelector(`.b${i-40}`).classList.remove('f');
        }
        z = z-1;
      }
    }
  } else if (up === 2) {
    if (z%20 !== 1) {
      let cr_sidel12 = document.querySelector(`.b${z-1}`).classList.contains('f');
      let cr_sidel22 = document.querySelector(`.b${z+19}`).classList.contains('f');
      if ((cr_sidel12 === false) && (cr_sidel22 === false)) {
        for(let i = z; i > z-1; i = i-1) {
          document.querySelector(`.b${i-1}`).classList.add('s');
          document.querySelector(`.b${i+2}`).classList.remove('s');
          document.querySelector(`.b${i+2}`).classList.remove('f');

          document.querySelector(`.b${i+19}`).classList.add('s');
          document.querySelector(`.b${i+20}`).classList.remove('s');
          document.querySelector(`.b${i+20}`).classList.remove('f');
        }
        z = z-1;
      }
    }
  } else if (up === 3) {
    if ((z-1)%20 !== 1) {
      let cr_sidel13 = document.querySelector(`.b${z-2}`).classList.contains('f');
      let cr_sidel23 = document.querySelector(`.b${z+19}`).classList.contains('f');
      let cr_sidel33 = document.querySelector(`.b${z+39}`).classList.contains('f');
      if ((cr_sidel13 === false) && (cr_sidel23 === false) && (cr_sidel33 === false)) {
        for(let i = z; i > z-1; i = i-1) {
          document.querySelector(`.b${i-2}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');
          document.querySelector(`.b${i}`).classList.remove('f');

          document.querySelector(`.b${i+19}`).classList.add('s');
          document.querySelector(`.b${i+20}`).classList.remove('s');
          document.querySelector(`.b${i+20}`).classList.remove('f');

          document.querySelector(`.b${i+39}`).classList.add('s');
          document.querySelector(`.b${i+40}`).classList.remove('s');
          document.querySelector(`.b${i+40}`).classList.remove('f');
        }
        z = z-1;
      }
    }
  } else if (up === 4) {
    if ((z-2)%20 !== 1) {
      let cr_sidel14 = document.querySelector(`.b${z-3}`).classList.contains('f');
      if ((cr_sidel14 === false)) {
        for(let i = z; i > z-1; i = i-1) {
          document.querySelector(`.b${i-3}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');
          document.querySelector(`.b${i}`).classList.remove('f');

          document.querySelector(`.b${i-21}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');
          document.querySelector(`.b${i-20}`).classList.remove('f');
        }
        z = z-1;
      }
    }
  }
}

function move_crowbarR_right () {
  if (up === 1) {
    if ((z+1)%20 !== 0) {
      let cr_sider1 = document.querySelector(`.b${z+2}`).classList.contains('f');
      let cr_sider2 = document.querySelector(`.b${z-19}`).classList.contains('f');
      let cr_sider3 = document.querySelector(`.b${z-39}`).classList.contains('f');
      if ((cr_sider1 === false) && (cr_sider2 === false) && (cr_sider3 === false)) {
        for(let i = z; i < z+1; i = i+1) {
          document.querySelector(`.b${i+2}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');
          document.querySelector(`.b${i}`).classList.remove('f');

          document.querySelector(`.b${i-19}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');
          document.querySelector(`.b${i-20}`).classList.remove('f');

          document.querySelector(`.b${i-39}`).classList.add('s');
          document.querySelector(`.b${i-40}`).classList.remove('s');
          document.querySelector(`.b${i-40}`).classList.remove('f');
        }
        z = z+1;
      }
    }
  } else if (up === 2) {
    if ((z+2)%20 !== 0) {
      let cr_sider12 = document.querySelector(`.b${z+3}`).classList.contains('f');
      if ((cr_sider12 === false)) {
        for(let i = z; i < z+1; i = i+1) {
          document.querySelector(`.b${i+3}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');
          document.querySelector(`.b${i}`).classList.remove('f');

          document.querySelector(`.b${i+21}`).classList.add('s');
          document.querySelector(`.b${i+20}`).classList.remove('s');
          document.querySelector(`.b${i+20}`).classList.remove('f');
        }
        z = z+1;
      }
    }
  } else if (up === 3) {
    if (z%20 !== 0) {
      let cr_sider13 = document.querySelector(`.b${z+1}`).classList.contains('f');
      let cr_sider23 = document.querySelector(`.b${z+21}`).classList.contains('f');
      let cr_sider33 = document.querySelector(`.b${z+41}`).classList.contains('f');
      if ((cr_sider13 === false) && (cr_sider23 === false) && (cr_sider33 === false)) {
        for(let i = z; i < z+1; i = i+1) {
          document.querySelector(`.b${i+1}`).classList.add('s');
          document.querySelector(`.b${i-1}`).classList.remove('s');
          document.querySelector(`.b${i-1}`).classList.remove('f');

          document.querySelector(`.b${i+21}`).classList.add('s');
          document.querySelector(`.b${i+20}`).classList.remove('s');
          document.querySelector(`.b${i+20}`).classList.remove('f');

          document.querySelector(`.b${i+41}`).classList.add('s');
          document.querySelector(`.b${i+40}`).classList.remove('s');
          document.querySelector(`.b${i+40}`).classList.remove('f');
        }
        z = z+1;
      }
    }
  } else if (up === 4) {
    if (z%20 !== 0) {
      let cr_sider14 = document.querySelector(`.b${z+1}`).classList.contains('f');
      let cr_sider24 = document.querySelector(`.b${z-19}`).classList.contains('f');
      if ((cr_sider14 === false) && (cr_sider24 === false)) {
        for(let i = z; i < z+1; i = i+1) {
          document.querySelector(`.b${i+1}`).classList.add('s');
          document.querySelector(`.b${i-2}`).classList.remove('s');
          document.querySelector(`.b${i-2}`).classList.remove('f');

          document.querySelector(`.b${i-19}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');
          document.querySelector(`.b${i-20}`).classList.remove('f');
        }
        z = z+1;
      }
    }
  }
}

function flip_crowbarR () {
  if (up === 1) {
    if ((z+1)%20 !== 0) {
      let stick_cr1 = document.querySelector(`.b${z-40}`).classList.contains('f');
      let stick_cr2 = document.querySelector(`.b${z-20}`).classList.contains('f');
      let stick_cr3 = document.querySelector(`.b${z-39}`).classList.contains('f');
      let stick_cr4 = document.querySelector(`.b${z-38}`).classList.contains('f');
      if ((stick_cr1 === false) && (stick_cr2 === false) && (stick_cr3 === false) && (stick_cr4 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z-20}`).classList.remove('s');
        document.querySelector(`.b${z-40}`).classList.remove('s');
        document.querySelector(`.b${z+1}`).classList.remove('s');

        document.querySelector(`.b${z-40}`).classList.add('s');
        document.querySelector(`.b${z-20}`).classList.add('s');
        document.querySelector(`.b${z-39}`).classList.add('s');
        document.querySelector(`.b${z-38}`).classList.add('s');

        z = z-40;
        up = 2;
      }
    } else {
      let stick_cr12 = document.querySelector(`.b${z-41}`).classList.contains('f');
      let stick_cr22 = document.querySelector(`.b${z-21}`).classList.contains('f');
      let stick_cr32 = document.querySelector(`.b${z-40}`).classList.contains('f');
      let stick_cr42 = document.querySelector(`.b${z-39}`).classList.contains('f');
      if ((stick_cr12 === false) && (stick_cr22 === false) && (stick_cr32 === false) && (stick_cr42 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z-20}`).classList.remove('s');
        document.querySelector(`.b${z-40}`).classList.remove('s');
        document.querySelector(`.b${z+1}`).classList.remove('s');
    
        document.querySelector(`.b${z-41}`).classList.add('s');
        document.querySelector(`.b${z-21}`).classList.add('s');
        document.querySelector(`.b${z-40}`).classList.add('s');
        document.querySelector(`.b${z-39}`).classList.add('s');
    
        z = z-41;
        up = 2;
      }
    }
  } else if (up === 2) {
    if ((z+20) <= 580) {
      let stick_cr13 = document.querySelector(`.b${z+2}`).classList.contains('f');
      let stick_cr23 = document.querySelector(`.b${z+1}`).classList.contains('f');
      let stick_cr33 = document.querySelector(`.b${z+22}`).classList.contains('f');
      let stick_cr43 = document.querySelector(`.b${z+42}`).classList.contains('f');
      if ((stick_cr13 === false) && (stick_cr23 === false) && (stick_cr33 === false) && (stick_cr43 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z+20}`).classList.remove('s');
        document.querySelector(`.b${z+1}`).classList.remove('s');
        document.querySelector(`.b${z+2}`).classList.remove('s');

        document.querySelector(`.b${z+2}`).classList.add('s');
        document.querySelector(`.b${z+1}`).classList.add('s');
        document.querySelector(`.b${z+22}`).classList.add('s');
        document.querySelector(`.b${z+42}`).classList.add('s');
        z = z + 2;
        up = 3;
      }
    } else if ((z+20) > 580) {
      let stick_cr14 = document.querySelector(`.b${z+2}`).classList.contains('f');
      let stick_cr24 = document.querySelector(`.b${z+1}`).classList.contains('f');
      let stick_cr34 = document.querySelector(`.b${z+22}`).classList.contains('f');
      let stick_cr44 = document.querySelector(`.b${z+42}`).classList.contains('f');
      if ((stick_cr14 === false) && (stick_cr24 === false) && (stick_cr34 === false) && (stick_cr44 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z+20}`).classList.remove('s');
        document.querySelector(`.b${z+1}`).classList.remove('s');
        document.querySelector(`.b${z+2}`).classList.remove('s');

        document.querySelector(`.b${z-18}`).classList.add('s');
        document.querySelector(`.b${z-19}`).classList.add('s');
        document.querySelector(`.b${z+2}`).classList.add('s');
        document.querySelector(`.b${z+22}`).classList.add('s');
        z = z -18;
        up = 3;
      }
    }
  } else if (up === 3) {
    if ((z-1)%20 !== 1) {
      let stick_cr15 = document.querySelector(`.b${z+20}`).classList.contains('f');
      let stick_cr25 = document.querySelector(`.b${z+40}`).classList.contains('f');
      let stick_cr35 = document.querySelector(`.b${z+39}`).classList.contains('f');
      let stick_cr45 = document.querySelector(`.b${z+38}`).classList.contains('f');
      if ((stick_cr15 === false) && (stick_cr25 === false) && (stick_cr35 === false) && (stick_cr45 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z-1}`).classList.remove('s');
        document.querySelector(`.b${z+20}`).classList.remove('s');
        document.querySelector(`.b${z+40}`).classList.remove('s');

        document.querySelector(`.b${z+20}`).classList.add('s');
        document.querySelector(`.b${z+40}`).classList.add('s');
        document.querySelector(`.b${z+39}`).classList.add('s');
        document.querySelector(`.b${z+38}`).classList.add('s');
        z = z + 40;
        up = 4;
      }
    } else {
      let stick_cr16 = document.querySelector(`.b${z+21}`).classList.contains('f');
      let stick_cr26 = document.querySelector(`.b${z+41}`).classList.contains('f');
      let stick_cr36 = document.querySelector(`.b${z+40}`).classList.contains('f');
      let stick_cr46 = document.querySelector(`.b${z+39}`).classList.contains('f');
      if ((stick_cr16 === false) && (stick_cr26 === false) && (stick_cr36 === false) && (stick_cr46 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z-1}`).classList.remove('s');
        document.querySelector(`.b${z+20}`).classList.remove('s');
        document.querySelector(`.b${z+40}`).classList.remove('s');
    
        document.querySelector(`.b${z+21}`).classList.add('s');
        document.querySelector(`.b${z+41}`).classList.add('s');
        document.querySelector(`.b${z+40}`).classList.add('s');
        document.querySelector(`.b${z+39}`).classList.add('s');
        z = z + 41;
        up = 4;
      }
    }
  } else if (up === 4) {
    let stick_cr17 = document.querySelector(`.b${z-1}`).classList.contains('f');
    let stick_cr27 = document.querySelector(`.b${z-2}`).classList.contains('f');
    let stick_cr37 = document.querySelector(`.b${z-22}`).classList.contains('f');
    let stick_cr47 = document.querySelector(`.b${z-42}`).classList.contains('f');
    if ((stick_cr17 === false) && (stick_cr27 === false) && (stick_cr37 === false) && (stick_cr47 === false)) {
      document.querySelector(`.b${z}`).classList.remove('s');
      document.querySelector(`.b${z-20}`).classList.remove('s');
      document.querySelector(`.b${z-1}`).classList.remove('s');
      document.querySelector(`.b${z-2}`).classList.remove('s');

      document.querySelector(`.b${z-1}`).classList.add('s');
      document.querySelector(`.b${z-2}`).classList.add('s');
      document.querySelector(`.b${z-22}`).classList.add('s');
      document.querySelector(`.b${z-42}`).classList.add('s');
      z = z -2;
      up = 1;
    }
  }
}

function move_crowbarR2 () {
  if (up === 1) {
    if (z <= 580) {
      let cr_floor1 = document.querySelector(`.b${z+20}`).classList.contains('f');
      let cr_floor2 = document.querySelector(`.b${z+21}`).classList.contains('f');
      if ((cr_floor1 === false) && (cr_floor2 === false)) {
        stop_moving = 0;
      for (let i = z; i < z+20; i = i+20) {
        document.querySelector(`.b${i+20}`).classList.add('s');
        document.querySelector(`.b${i-40}`).classList.remove('s');
        
        document.querySelector(`.b${i+21}`).classList.add('s');
        document.querySelector(`.b${i+1}`).classList.remove('s');
      }
      z = z+20;
    } else {
      down = 0;
      stop_moving++;
      if (stop_moving >= 4) {
        side_stop = 1;
        clearInterval(move4);
        generate();
      }
    }
    } else {
      down = 0;
      clearInterval(move4);
      generate();
    }
  } else if (up === 2) {
    if ((z+20) <= 580) {
      let cr_floor12 = document.querySelector(`.b${z+40}`).classList.contains('f');
      let cr_floor22 = document.querySelector(`.b${z+21}`).classList.contains('f');
      let cr_floor32 = document.querySelector(`.b${z+22}`).classList.contains('f');
      if ((cr_floor12 === false) && (cr_floor22 === false) && (cr_floor32 === false)) {
        stop_moving = 0;
      for (let i = z; i < z+20; i = i+20) {
        document.querySelector(`.b${i+40}`).classList.add('s');
        document.querySelector(`.b${i}`).classList.remove('s');

        document.querySelector(`.b${i+21}`).classList.add('s');
        document.querySelector(`.b${i+1}`).classList.remove('s');

        document.querySelector(`.b${i+22}`).classList.add('s');
        document.querySelector(`.b${i+2}`).classList.remove('s');
      }
      z = z+20;
    } else {
      down = 0;
      stop_moving++;
      if (stop_moving >= 4) {
        side_stop = 1;
        clearInterval(move4);
        generate();
      }
    }
    } else {
      down = 0;
      clearInterval(move4);
      generate();
    }
  }  else if (up === 3) {
    if ((z+40) <= 580) {
      let cr_floor13 = document.querySelector(`.b${z+60}`).classList.contains('f');
      let cr_floor23 = document.querySelector(`.b${z+19}`).classList.contains('f');
      if ((cr_floor13 === false) && (cr_floor23 === false)) {
        stop_moving = 0;
      for (let i = z; i < z+20; i = i+20) {
        document.querySelector(`.b${i+60}`).classList.add('s');
        document.querySelector(`.b${i}`).classList.remove('s');

        document.querySelector(`.b${i+19}`).classList.add('s');
        document.querySelector(`.b${i-1}`).classList.remove('s');
      }
      z = z+20;
    } else {
      down = 0;
      stop_moving++;
      if (stop_moving >= 4) {
        side_stop = 1;
        clearInterval(move4);
        generate();
      }
    }
    } else {
      down = 0;
      clearInterval(move4);
      generate();
    }
  } else if (up === 4) {
    if (z <= 580) {
      let cr_floor14 = document.querySelector(`.b${z+20}`).classList.contains('f');
      let cr_floor24 = document.querySelector(`.b${z+19}`).classList.contains('f');
      let cr_floor34 = document.querySelector(`.b${z+18}`).classList.contains('f');
      if ((cr_floor14 === false) && (cr_floor24 === false) && (cr_floor34 === false)) {
        stop_moving = 0;
      for (let i = z; i < z+20; i = i+20) {
        document.querySelector(`.b${i+20}`).classList.add('s');
        document.querySelector(`.b${i-20}`).classList.remove('s');

        document.querySelector(`.b${i+19}`).classList.add('s');
        document.querySelector(`.b${i-1}`).classList.remove('s');

        document.querySelector(`.b${i+18}`).classList.add('s');
        document.querySelector(`.b${i-2}`).classList.remove('s');
      }
      z = z+20;
    } else {
      down = 0;
      stop_moving++;
      if (stop_moving >= 4) {
        side_stop = 1;
        clearInterval(move4);
        generate();
      }
    }
    } else {
      down = 0;
      clearInterval(move4);
      generate();
    }
  }
}
