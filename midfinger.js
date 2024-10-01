function generate_midfinger() {
  z = 30;
  document.querySelector('.b10').classList.add('s');
  document.querySelector('.b30').classList.add('s');
  document.querySelector('.b29').classList.add('s');
  document.querySelector('.b31').classList.add('s');
  stop_moving = 0;
  side_stop = 0;
}

function move_midfinger () {
  move3 = setInterval(() => {
    if (up === 1) {
      if (z <= 580) {
        let mf_floor1 = document.querySelector(`.b${z+20}`).classList.contains('f');
        let mf_floor3 = document.querySelector(`.b${z+19}`).classList.contains('f');
        let mf_floor2 = document.querySelector(`.b${z+21}`).classList.contains('f');
        if ((mf_floor1 === false) && (mf_floor2 === false) && (mf_floor3 === false)) {
          stop_moving = 0;
        for (let i = z; i < z+20; i = i+20) {
          document.querySelector(`.b${i+20}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');

          document.querySelector(`.b${i+19}`).classList.add('s');
          document.querySelector(`.b${i-1}`).classList.remove('s');

          document.querySelector(`.b${i+21}`).classList.add('s');
          document.querySelector(`.b${i+1}`).classList.remove('s');
        }
        z = z+20;
      }  else {
        stop_moving++;
        if (stop_moving >= 4) {
          side_stop = 1;
          clearInterval(move3);
          generate();
        }
      }
      } else {
        clearInterval(move3);
        generate();
      }
    } else if (up === 2) {
      if ((z+20) <= 580) {
        let mf_floor12 = document.querySelector(`.b${z+40}`).classList.contains('f');
        let mf_floor22 = document.querySelector(`.b${z+21}`).classList.contains('f');
        if ((mf_floor12 === false) && (mf_floor22 === false)) {
          stop_moving = 0;
        for (let i = z; i < z+20; i = i+20) {
          document.querySelector(`.b${i+40}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');

          document.querySelector(`.b${i+21}`).classList.add('s');
          document.querySelector(`.b${i+1}`).classList.remove('s');
        }
        z = z+20;
      } else {
        stop_moving++;
        if (stop_moving >= 4) {
          side_stop = 1;
          clearInterval(move3);
          generate();
        }
      }
      } else {
        clearInterval(move3);
        generate();
      }
    }  else if (up === 3) {
        if ((z+20) <= 580) {
          let mf_floor13 = document.querySelector(`.b${z+40}`).classList.contains('f');
          let mf_floor33 = document.querySelector(`.b${z+19}`).classList.contains('f');
          let mf_floor23 = document.querySelector(`.b${z+21}`).classList.contains('f');
          if ((mf_floor13 === false) && (mf_floor23 === false) && (mf_floor33 === false)) {
            stop_moving = 0;
          for (let i = z; i < z+20; i = i+20) {
            document.querySelector(`.b${i+40}`).classList.add('s');
            document.querySelector(`.b${i}`).classList.remove('s');

            document.querySelector(`.b${i+21}`).classList.add('s');
            document.querySelector(`.b${i+1}`).classList.remove('s');

            document.querySelector(`.b${i+19}`).classList.add('s');
            document.querySelector(`.b${i-1}`).classList.remove('s');
          }
          z = z+20;
        } else {
          stop_moving++;
          if (stop_moving >= 4) {
            side_stop = 1;
            clearInterval(move3);
            generate();
          }
        }
        } else {
          clearInterval(move3);
          generate();
        }
    } else if (up === 4) {
      if ((z+20) <= 580) {
        let mf_floor14 = document.querySelector(`.b${z+40}`).classList.contains('f');
        let mf_floor24 = document.querySelector(`.b${z+19}`).classList.contains('f');
        if ((mf_floor14 === false) && (mf_floor24 === false)) {
          stop_moving = 0;
        for (let i = z; i < z+20; i = i+20) {
          document.querySelector(`.b${i+40}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');

          document.querySelector(`.b${i+19}`).classList.add('s');
          document.querySelector(`.b${i-1}`).classList.remove('s');
        }
        z = z+20;
      } else {
        stop_moving++;
        if (stop_moving >= 4) {
          side_stop = 1;
          clearInterval(move3);
          generate();
        }
      }
      } else {
        clearInterval(move3);
        generate();
      }
    }
  }, speed);
}

function flip_midfinger () {
  if (up === 1) {
    if (z <= 580) {
      let stick_mf1 = document.querySelector(`.b${z+19}`).classList.contains('f');
      let stick_mf2 = document.querySelector(`.b${z-1}`).classList.contains('f');
      let stick_mf3 = document.querySelector(`.b${z-21}`).classList.contains('f');
      let stick_mf4 = document.querySelector(`.b${z}`).classList.contains('f');
      if ((stick_mf1 === false) && (stick_mf2 === false) && (stick_mf3 === false) && (stick_mf4 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z+1}`).classList.remove('s');
        document.querySelector(`.b${z-1}`).classList.remove('s');
        document.querySelector(`.b${z-20}`).classList.remove('s');

        document.querySelector(`.b${z+19}`).classList.add('s');
        document.querySelector(`.b${z-1}`).classList.add('s');
        document.querySelector(`.b${z-21}`).classList.add('s');
        document.querySelector(`.b${z}`).classList.add('s');

        z = z-1;
        up = 2;
      }
    } else {
      let stick_mf12 = document.querySelector(`.b${z-20}`).classList.contains('f');
      let stick_mf22 = document.querySelector(`.b${z-1}`).classList.contains('f');
      let stick_mf32 = document.querySelector(`.b${z-21}`).classList.contains('f');
      let stick_mf42 = document.querySelector(`.b${z-41}`).classList.contains('f');
      if ((stick_mf12 === false) && (stick_mf22 === false) && (stick_mf32 === false) && (stick_mf42 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z+1}`).classList.remove('s');
        document.querySelector(`.b${z-1}`).classList.remove('s');
        document.querySelector(`.b${z-20}`).classList.remove('s');

        document.querySelector(`.b${z-20}`).classList.add('s');
        document.querySelector(`.b${z-1}`).classList.add('s');
        document.querySelector(`.b${z-21}`).classList.add('s');
        document.querySelector(`.b${z-41}`).classList.add('s');

        z = z-21;
        up = 2;
      }
    }
  } else if (up === 2) {
    if ((z+1)%20 !== 0) {
    let stick_mf13 = document.querySelector(`.b${z+1}`).classList.contains('f');
    let stick_mf23 = document.querySelector(`.b${z-20}`).classList.contains('f');
    let stick_mf33 = document.querySelector(`.b${z-18}`).classList.contains('f');
    let stick_mf43 = document.querySelector(`.b${z-19}`).classList.contains('f');
    if ((stick_mf13 === false) && (stick_mf23 === false) && (stick_mf33 === false) && (stick_mf43 === false)) {
      document.querySelector(`.b${z}`).classList.remove('s');
      document.querySelector(`.b${z+20}`).classList.remove('s');
      document.querySelector(`.b${z-20}`).classList.remove('s');
      document.querySelector(`.b${z+1}`).classList.remove('s');

      document.querySelector(`.b${z+1}`).classList.add('s');
      document.querySelector(`.b${z-20}`).classList.add('s');
      document.querySelector(`.b${z-18}`).classList.add('s');
      document.querySelector(`.b${z-19}`).classList.add('s');
      z = z - 19;
      up = 3;
    }
    } else {
      let stick_mf14 = document.querySelector(`.b${z}`).classList.contains('f');
      let stick_mf24 = document.querySelector(`.b${z-20}`).classList.contains('f');
      let stick_mf34 = document.querySelector(`.b${z-21}`).classList.contains('f');
      let stick_mf44 = document.querySelector(`.b${z-19}`).classList.contains('f');
      if ((stick_mf14 === false) && (stick_mf24 === false) && (stick_mf34 === false) && (stick_mf44 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z+20}`).classList.remove('s');
        document.querySelector(`.b${z-20}`).classList.remove('s');
        document.querySelector(`.b${z+1}`).classList.remove('s');
    
        document.querySelector(`.b${z}`).classList.add('s');
        document.querySelector(`.b${z-20}`).classList.add('s');
        document.querySelector(`.b${z-21}`).classList.add('s');
        document.querySelector(`.b${z-19}`).classList.add('s');
        z = z - 20;
        up = 3;
      }
    }
  } else if (up === 3) {
    if ((z+20) <= 580) {
      let stick_mf15 = document.querySelector(`.b${z+20}`).classList.contains('f');
      let stick_mf25 = document.querySelector(`.b${z+1}`).classList.contains('f');
      let stick_mf35 = document.querySelector(`.b${z+21}`).classList.contains('f');
      let stick_mf45 = document.querySelector(`.b${z+41}`).classList.contains('f');
      if ((stick_mf15 === false) && (stick_mf25 === false) && (stick_mf35 === false) && (stick_mf45 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z+1}`).classList.remove('s');
        document.querySelector(`.b${z-1}`).classList.remove('s');
        document.querySelector(`.b${z+20}`).classList.remove('s');

        document.querySelector(`.b${z+20}`).classList.add('s');
        document.querySelector(`.b${z+1}`).classList.add('s');
        document.querySelector(`.b${z+21}`).classList.add('s');
        document.querySelector(`.b${z+41}`).classList.add('s');
        z = z + 21;
        up = 4;
      }
    } else if ((z+20) > 580) {
      let stick_mf16 = document.querySelector(`.b${z}`).classList.contains('f');
      let stick_mf26 = document.querySelector(`.b${z+1}`).classList.contains('f');
      let stick_mf36 = document.querySelector(`.b${z+21}`).classList.contains('f');
      let stick_mf46 = document.querySelector(`.b${z-19}`).classList.contains('f');
      if ((stick_mf16 === false) && (stick_mf26 === false) && (stick_mf36 === false) && (stick_mf46 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z+1}`).classList.remove('s');
        document.querySelector(`.b${z-1}`).classList.remove('s');
        document.querySelector(`.b${z+20}`).classList.remove('s');
    
        document.querySelector(`.b${z}`).classList.add('s');
        document.querySelector(`.b${z+1}`).classList.add('s');
        document.querySelector(`.b${z+21}`).classList.add('s');
        document.querySelector(`.b${z-19}`).classList.add('s');
        z = z + 1;
        up = 4;
      }
    }
  } else if (up === 4) {
    if ((z-1)%20 !== 1) {
      let stick_mf17 = document.querySelector(`.b${z}`).classList.contains('f');
      let stick_mf27 = document.querySelector(`.b${z-1}`).classList.contains('f');
      let stick_mf37 = document.querySelector(`.b${z-2}`).classList.contains('f');
      let stick_mf47 = document.querySelector(`.b${z-21}`).classList.contains('f');
      if ((stick_mf17 === false) && (stick_mf27 === false) && (stick_mf37 === false) && (stick_mf47 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z-20}`).classList.remove('s');
        document.querySelector(`.b${z+20}`).classList.remove('s');
        document.querySelector(`.b${z-1}`).classList.remove('s');

        document.querySelector(`.b${z}`).classList.add('s');
        document.querySelector(`.b${z-1}`).classList.add('s');
        document.querySelector(`.b${z-2}`).classList.add('s');
        document.querySelector(`.b${z-21}`).classList.add('s');
        z = z -1;
        up = 1;
      }
    } else {
      let stick_mf18 = document.querySelector(`.b${z}`).classList.contains('f');
      let stick_mf28 = document.querySelector(`.b${z-1}`).classList.contains('f');
      let stick_mf38 = document.querySelector(`.b${z-2}`).classList.contains('f');
      let stick_mf48 = document.querySelector(`.b${z-21}`).classList.contains('f');
      if ((stick_mf18 === false) && (stick_mf28 === false) && (stick_mf38 === false) && (stick_mf48 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z-20}`).classList.remove('s');
        document.querySelector(`.b${z+20}`).classList.remove('s');
        document.querySelector(`.b${z-1}`).classList.remove('s');

        document.querySelector(`.b${z}`).classList.add('s');
        document.querySelector(`.b${z-1}`).classList.add('s');
        document.querySelector(`.b${z+1}`).classList.add('s');
        document.querySelector(`.b${z-20}`).classList.add('s');
        z = z;
        up = 1;
      }
    }
  }
}

function move_midfinger_left () {
  if (up === 1) {
    if ((z-1) % 20 !== 1) {
      let mf_sidel1 = document.querySelector(`.b${z-2}`).classList.contains('f');
      let mf_sidel2 = document.querySelector(`.b${z-21}`).classList.contains('f');
      if ((mf_sidel1 === false) && (mf_sidel2 === false)) {
        for(let i = z; i > z-1; i = i-1) {
          document.querySelector(`.b${i-2}`).classList.add('s');
          document.querySelector(`.b${i+1}`).classList.remove('s');
          document.querySelector(`.b${i+1}`).classList.remove('f');

          document.querySelector(`.b${i-21}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');
          document.querySelector(`.b${i-20}`).classList.remove('f');
        }
        z = z-1;
      }
    }
  } else if (up === 2) {
    if (z % 20 !== 1) {
      let mf_sidel12 = document.querySelector(`.b${z-1}`).classList.contains('f');
      let mf_sidel22 = document.querySelector(`.b${z+19}`).classList.contains('f');
      let mf_sidel32 = document.querySelector(`.b${z-21}`).classList.contains('f');
      if ((mf_sidel12 === false) && (mf_sidel22 === false) && (mf_sidel32 === false)) {
        for(let i = z; i > z-1; i = i-1) {
          document.querySelector(`.b${i-1}`).classList.add('s');
          document.querySelector(`.b${i+1}`).classList.remove('s');
          document.querySelector(`.b${i+1}`).classList.remove('f');

          document.querySelector(`.b${i-21}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');
          document.querySelector(`.b${i-20}`).classList.remove('f');

          document.querySelector(`.b${i+19}`).classList.add('s');
          document.querySelector(`.b${i+20}`).classList.remove('s');
          document.querySelector(`.b${i+20}`).classList.remove('f');
        }
        z = z-1;
      }
    }
  } else if (up === 3) {
    if ((z-1) % 20 !== 1) {
      let mf_sidel13 = document.querySelector(`.b${z-2}`).classList.contains('f');
      let mf_sidel23 = document.querySelector(`.b${z+19}`).classList.contains('f');
      if ((mf_sidel13 === false) && (mf_sidel23 === false)) {
        for(let i = z; i > z-1; i = i-1) {
          document.querySelector(`.b${i-2}`).classList.add('s');
          document.querySelector(`.b${i+1}`).classList.remove('s');
          document.querySelector(`.b${i+1}`).classList.remove('f');

          document.querySelector(`.b${i+19}`).classList.add('s');
          document.querySelector(`.b${i+20}`).classList.remove('s');
          document.querySelector(`.b${i+20}`).classList.remove('f');
        }
        z = z-1;
      }
    }
  } else if (up === 4) {
    if ((z-1) % 20 !== 1) {
      let mf_sidel14 = document.querySelector(`.b${z-2}`).classList.contains('f');
      let mf_sidel24 = document.querySelector(`.b${z+19}`).classList.contains('f');
      let mf_sidel34 = document.querySelector(`.b${z-21}`).classList.contains('f');
      if ((mf_sidel14 === false) && (mf_sidel24 === false) && (mf_sidel34 === false)) {
        for(let i = z; i > z-1; i = i-1) {
          document.querySelector(`.b${i-2}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');
          document.querySelector(`.b${i}`).classList.remove('f');

          document.querySelector(`.b${i-21}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');
          document.querySelector(`.b${i-20}`).classList.remove('f');

          document.querySelector(`.b${i+19}`).classList.add('s');
          document.querySelector(`.b${i+20}`).classList.remove('s');
          document.querySelector(`.b${i+20}`).classList.remove('f');
        }
        z = z-1;
      }
    }
  }
}

function move_midfinger_right () {
  if (up === 1) {
    if ((z+1) % 20 !== 0) {
      let mf_sider1 = document.querySelector(`.b${z+2}`).classList.contains('f');
      let mf_sider2 = document.querySelector(`.b${z-19}`).classList.contains('f');
      if ((mf_sider1 === false) && (mf_sider2 === false)) {
        for(let i = z; i < z+1; i = i+1) {
          document.querySelector(`.b${i+2}`).classList.add('s');
          document.querySelector(`.b${i-1}`).classList.remove('s');
          document.querySelector(`.b${i-1}`).classList.remove('f');

          document.querySelector(`.b${i-19}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');
          document.querySelector(`.b${i-20}`).classList.remove('f');
        }
        z = z+1;
      }
    }
  } else if (up === 2) {
    if ((z+1) % 20 !== 0) {
      let mf_sider12 = document.querySelector(`.b${z+2}`).classList.contains('f');
      let mf_sider22 = document.querySelector(`.b${z-19}`).classList.contains('f');
      let mf_sider32 = document.querySelector(`.b${z+21}`).classList.contains('f');
      if ((mf_sider12 === false) && (mf_sider22 === false) && (mf_sider32 === false)) {
        for(let i = z; i < z+1; i = i+1) {
          document.querySelector(`.b${i+2}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');
          document.querySelector(`.b${i}`).classList.remove('f');

          document.querySelector(`.b${i-19}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');
          document.querySelector(`.b${i-20}`).classList.remove('f');

          document.querySelector(`.b${i+21}`).classList.add('s');
          document.querySelector(`.b${i+20}`).classList.remove('s');
          document.querySelector(`.b${i+20}`).classList.remove('f');
        }
        z = z+1;
      }
    }
  } else if (up === 3) {
    if ((z+1) % 20 !== 0) {
      let mf_sider13 = document.querySelector(`.b${z+2}`).classList.contains('f');
      let mf_sider23 = document.querySelector(`.b${z+21}`).classList.contains('f');
      if ((mf_sider13 === false) && (mf_sider23 === false)) {
        for(let i = z; i < z+1; i = i+1) {
          document.querySelector(`.b${i+2}`).classList.add('s');
          document.querySelector(`.b${i-1}`).classList.remove('s');
          document.querySelector(`.b${i-1}`).classList.remove('f');

          document.querySelector(`.b${i+21}`).classList.add('s');
          document.querySelector(`.b${i+20}`).classList.remove('s');
          document.querySelector(`.b${i+20}`).classList.remove('f');
        }
        z = z+1;
      }
    }
  } else if (up === 4) {
    if (z % 20 !== 0) {
      let mf_sider14 = document.querySelector(`.b${z+1}`).classList.contains('f');
      let mf_sider24 = document.querySelector(`.b${z-19}`).classList.contains('f');
      let mf_sider34 = document.querySelector(`.b${z+21}`).classList.contains('f');
      if ((mf_sider14 === false) && (mf_sider24 === false) && (mf_sider34 === false)) {
        for(let i = z; i < z+1; i = i+1) {
          document.querySelector(`.b${i+1}`).classList.add('s');
          document.querySelector(`.b${i-1}`).classList.remove('s');
          document.querySelector(`.b${i-1}`).classList.remove('f');

          document.querySelector(`.b${i+21}`).classList.add('s');
          document.querySelector(`.b${i+20}`).classList.remove('s');
          document.querySelector(`.b${i+20}`).classList.remove('f');

          document.querySelector(`.b${i-19}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');
          document.querySelector(`.b${i-20}`).classList.remove('f');
        }
        z = z+1;
      }
    }
  }
}

function move_midfinger2 () {
  if (up === 1) {
    if (z <= 580) {
      let mf_floor1 = document.querySelector(`.b${z+20}`).classList.contains('f');
      let mf_floor3 = document.querySelector(`.b${z+19}`).classList.contains('f');
      let mf_floor2 = document.querySelector(`.b${z+21}`).classList.contains('f');
      if ((mf_floor1 === false) && (mf_floor2 === false) && (mf_floor3 === false)) {
        stop_moving = 0;
      for (let i = z; i < z+20; i = i+20) {
        document.querySelector(`.b${i+20}`).classList.add('s');
        document.querySelector(`.b${i-20}`).classList.remove('s');

        document.querySelector(`.b${i+19}`).classList.add('s');
        document.querySelector(`.b${i-1}`).classList.remove('s');

        document.querySelector(`.b${i+21}`).classList.add('s');
        document.querySelector(`.b${i+1}`).classList.remove('s');
      }
      z = z+20;
    }  else {
      down = 0;
      stop_moving++;
      if (stop_moving >= 4) {
        side_stop = 1;
        clearInterval(move3);
        generate();
      }
    }
    } else {
      down = 0;
      clearInterval(move3);
      generate();
    }
  } else if (up === 2) {
    if ((z+20) <= 580) {
      let mf_floor12 = document.querySelector(`.b${z+40}`).classList.contains('f');
      let mf_floor22 = document.querySelector(`.b${z+21}`).classList.contains('f');
      if ((mf_floor12 === false) && (mf_floor22 === false)) {
        stop_moving = 0;
      for (let i = z; i < z+20; i = i+20) {
        document.querySelector(`.b${i+40}`).classList.add('s');
        document.querySelector(`.b${i-20}`).classList.remove('s');

        document.querySelector(`.b${i+21}`).classList.add('s');
        document.querySelector(`.b${i+1}`).classList.remove('s');
      }
      z = z+20;
    } else {
      down = 0;
      stop_moving++;
      if (stop_moving >= 4) {
        side_stop = 1;
        clearInterval(move3);
        generate();
      }
    }
    } else {
      down = 0;
      clearInterval(move3);
      generate();
    }
  }  else if (up === 3) {
      if ((z+20) <= 580) {
        let mf_floor13 = document.querySelector(`.b${z+40}`).classList.contains('f');
        let mf_floor33 = document.querySelector(`.b${z+19}`).classList.contains('f');
        let mf_floor23 = document.querySelector(`.b${z+21}`).classList.contains('f');
        if ((mf_floor13 === false) && (mf_floor23 === false) && (mf_floor33 === false)) {
          stop_moving = 0;
        for (let i = z; i < z+20; i = i+20) {
          document.querySelector(`.b${i+40}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');

          document.querySelector(`.b${i+21}`).classList.add('s');
          document.querySelector(`.b${i+1}`).classList.remove('s');

          document.querySelector(`.b${i+19}`).classList.add('s');
          document.querySelector(`.b${i-1}`).classList.remove('s');
        }
        z = z+20;
      } else {
        down = 0;
        stop_moving++;
        if (stop_moving >= 4) {
          side_stop = 1;
          clearInterval(move3);
          generate();
        }
      }
      } else {
        down = 0;
        clearInterval(move3);
        generate();
      }
  } else if (up === 4) {
    if ((z+20) <= 580) {
      let mf_floor14 = document.querySelector(`.b${z+40}`).classList.contains('f');
      let mf_floor24 = document.querySelector(`.b${z+19}`).classList.contains('f');
      if ((mf_floor14 === false) && (mf_floor24 === false)) {
        stop_moving = 0;
      for (let i = z; i < z+20; i = i+20) {
        document.querySelector(`.b${i+40}`).classList.add('s');
        document.querySelector(`.b${i-20}`).classList.remove('s');

        document.querySelector(`.b${i+19}`).classList.add('s');
        document.querySelector(`.b${i-1}`).classList.remove('s');
      }
      z = z+20;
    } else {
      down = 0;
      stop_moving++;
      if (stop_moving >= 4) {
        side_stop = 1;
        clearInterval(move3);
        generate();
      }
    }
    } else {
      down = 0;
      clearInterval(move3);
      generate();
    }
  }
}
