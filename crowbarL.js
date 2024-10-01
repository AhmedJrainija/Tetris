function generate_crowbarL() {
  z = 50;
  document.querySelector('.b10').classList.add('s');
  document.querySelector('.b30').classList.add('s');
  document.querySelector('.b50').classList.add('s');
  document.querySelector('.b49').classList.add('s');
  stop_moving = 0;
  side_stop = 0;
}

function move_crowbarL () {
  move5 = setInterval(() => {
    if (up === 1) {
      if (z <= 580) {
        let cl_floor1 = document.querySelector(`.b${z+20}`).classList.contains('f');
        let cl_floor2 = document.querySelector(`.b${z+19}`).classList.contains('f');
        if ((cl_floor1 === false) && (cl_floor2 === false)) {
          stop_moving = 0;
        for (let i = z; i < z+20; i = i+20) {
          document.querySelector(`.b${i+20}`).classList.add('s');
          document.querySelector(`.b${i-40}`).classList.remove('s');

          document.querySelector(`.b${i+19}`).classList.add('s');
          document.querySelector(`.b${i-1}`).classList.remove('s');
        }
        z = z+20;
      } else {
        stop_moving++;
        if (stop_moving >= 4) {
          side_stop = 1;
          clearInterval(move5);
          generate();
        }
      }
      } else {
        clearInterval(move5);
        generate();
      }
    } else if (up === 2) {
        if ((z+20) <= 580) {
          let cl_floor12 = document.querySelector(`.b${z+40}`).classList.contains('f');
          let cl_floor22 = document.querySelector(`.b${z+19}`).classList.contains('f');
          let cl_floor32 = document.querySelector(`.b${z+18}`).classList.contains('f');
          if ((cl_floor12 === false) && (cl_floor22 === false) && (cl_floor32 === false)) {
            stop_moving = 0;
          for (let i = z; i < z+20; i = i+20) {
            document.querySelector(`.b${i+40}`).classList.add('s');
            document.querySelector(`.b${i}`).classList.remove('s');

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
            clearInterval(move5);
            generate();
          }
        }
        } else {
          clearInterval(move5);
          generate();
        }
    }  else if (up === 3) {
        if ((z+40) <= 580) {
          let cl_floor13 = document.querySelector(`.b${z+60}`).classList.contains('f');
          let cl_floor23 = document.querySelector(`.b${z+21}`).classList.contains('f');
          if ((cl_floor13 === false) && (cl_floor23 === false)) {
            stop_moving = 0;
          for (let i = z; i < z+20; i = i+20) {
            document.querySelector(`.b${i+60}`).classList.add('s');
            document.querySelector(`.b${i}`).classList.remove('s');

            document.querySelector(`.b${i+21}`).classList.add('s');
            document.querySelector(`.b${i+1}`).classList.remove('s');
          }
          z = z+20;
        } else {
          stop_moving++;
          if (stop_moving >= 4) {
            side_stop = 1;
            clearInterval(move5);
            generate();
          }
        }
        } else {
          clearInterval(move5);
          generate();
        }
    } else if (up === 4) {
        if (z <= 580) {
          let cl_floor14 = document.querySelector(`.b${z+20}`).classList.contains('f');
          let cl_floor24 = document.querySelector(`.b${z+21}`).classList.contains('f');
          let cl_floor34 = document.querySelector(`.b${z+22}`).classList.contains('f');
          if ((cl_floor14 === false) && (cl_floor24 === false) && (cl_floor34 === false)) {
            stop_moving = 0;
          for (let i = z; i < z+20; i = i+20) {
            document.querySelector(`.b${i+20}`).classList.add('s');
            document.querySelector(`.b${i-20}`).classList.remove('s');

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
            clearInterval(move5);
            generate();
          }
        }
        } else {
          clearInterval(move5);
          generate();
        }
    }
  }, speed);
}

function flip_crowbarL () {
  if (up === 1) {
    if ((z-1)%20 !== 1) {
      let stick_cl1 = document.querySelector(`.b${z-40}`).classList.contains('f');
      let stick_cl2 = document.querySelector(`.b${z-20}`).classList.contains('f');
      let stick_cl3 = document.querySelector(`.b${z-41}`).classList.contains('f');
      let stick_cl4 = document.querySelector(`.b${z-42}`).classList.contains('f');
      if ((stick_cl1 === false) && (stick_cl2 === false) && (stick_cl3 === false) && (stick_cl4 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z-20}`).classList.remove('s');
        document.querySelector(`.b${z-40}`).classList.remove('s');
        document.querySelector(`.b${z-1}`).classList.remove('s');

        document.querySelector(`.b${z-40}`).classList.add('s');
        document.querySelector(`.b${z-20}`).classList.add('s');
        document.querySelector(`.b${z-41}`).classList.add('s');
        document.querySelector(`.b${z-42}`).classList.add('s');

        z = z-40;
        up = 2;
      }
    } else {
      let stick_cl12 = document.querySelector(`.b${z-39}`).classList.contains('f');
      let stick_cl22 = document.querySelector(`.b${z-19}`).classList.contains('f');
      let stick_cl32 = document.querySelector(`.b${z-40}`).classList.contains('f');
      let stick_cl42 = document.querySelector(`.b${z-41}`).classList.contains('f');
      if ((stick_cl12 === false) && (stick_cl22 === false) && (stick_cl32 === false) && (stick_cl42 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z-20}`).classList.remove('s');
        document.querySelector(`.b${z-40}`).classList.remove('s');
        document.querySelector(`.b${z-1}`).classList.remove('s');

        document.querySelector(`.b${z-39}`).classList.add('s');
        document.querySelector(`.b${z-19}`).classList.add('s');
        document.querySelector(`.b${z-40}`).classList.add('s');
        document.querySelector(`.b${z-41}`).classList.add('s');

        z = z-39;
        up = 2;
      }
    }
  } else if (up === 2) {
    if ((z+20) <= 580) {
      let stick_cl13 = document.querySelector(`.b${z-2}`).classList.contains('f');
      let stick_cl23 = document.querySelector(`.b${z-1}`).classList.contains('f');
      let stick_cl33 = document.querySelector(`.b${z+18}`).classList.contains('f');
      let stick_cl43 = document.querySelector(`.b${z+38}`).classList.contains('f');
      if ((stick_cl13 === false) && (stick_cl23 === false) && (stick_cl33 === false) && (stick_cl43 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z+20}`).classList.remove('s');
        document.querySelector(`.b${z-1}`).classList.remove('s');
        document.querySelector(`.b${z-2}`).classList.remove('s');

        document.querySelector(`.b${z-2}`).classList.add('s');
        document.querySelector(`.b${z-1}`).classList.add('s');
        document.querySelector(`.b${z+18}`).classList.add('s');
        document.querySelector(`.b${z+38}`).classList.add('s');
        z = z - 2;
        up = 3;
      }
    } else if ((z+20) > 580) {
      let stick_cl14 = document.querySelector(`.b${z-22}`).classList.contains('f');
      let stick_cl24 = document.querySelector(`.b${z-21}`).classList.contains('f');
      let stick_cl34 = document.querySelector(`.b${z-2}`).classList.contains('f');
      let stick_cl44 = document.querySelector(`.b${z+18}`).classList.contains('f');
      if ((stick_cl14 === false) && (stick_cl24 === false) && (stick_cl34 === false) && (stick_cl44 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z+20}`).classList.remove('s');
        document.querySelector(`.b${z-1}`).classList.remove('s');
        document.querySelector(`.b${z-2}`).classList.remove('s');

        document.querySelector(`.b${z-22}`).classList.add('s');
        document.querySelector(`.b${z-21}`).classList.add('s');
        document.querySelector(`.b${z-2}`).classList.add('s');
        document.querySelector(`.b${z+18}`).classList.add('s');
        z = z - 22;
        up = 3;
      }
    }
  } else if (up === 3) {
    if ((z+1)%20 !== 0) {
      let stick_cl15 = document.querySelector(`.b${z+20}`).classList.contains('f');
      let stick_cl25 = document.querySelector(`.b${z+40}`).classList.contains('f');
      let stick_cl35 = document.querySelector(`.b${z+41}`).classList.contains('f');
      let stick_cl45 = document.querySelector(`.b${z+42}`).classList.contains('f');
      if ((stick_cl15 === false) && (stick_cl25 === false) && (stick_cl35 === false) && (stick_cl45 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z+1}`).classList.remove('s');
        document.querySelector(`.b${z+20}`).classList.remove('s');
        document.querySelector(`.b${z+40}`).classList.remove('s');

        document.querySelector(`.b${z+20}`).classList.add('s');
        document.querySelector(`.b${z+40}`).classList.add('s');
        document.querySelector(`.b${z+41}`).classList.add('s');
        document.querySelector(`.b${z+42}`).classList.add('s');
        z = z + 40;
        up = 4;
      }
    } else {
      let stick_cl16 = document.querySelector(`.b${z+19}`).classList.contains('f');
      let stick_cl26 = document.querySelector(`.b${z+39}`).classList.contains('f');
      let stick_cl36 = document.querySelector(`.b${z+40}`).classList.contains('f');
      let stick_cl46 = document.querySelector(`.b${z+41}`).classList.contains('f');
      if ((stick_cl16 === false) && (stick_cl26 === false) && (stick_cl36 === false) && (stick_cl46 === false)) {
        document.querySelector(`.b${z}`).classList.remove('s');
        document.querySelector(`.b${z+1}`).classList.remove('s');
        document.querySelector(`.b${z+20}`).classList.remove('s');
        document.querySelector(`.b${z+40}`).classList.remove('s');

        document.querySelector(`.b${z+19}`).classList.add('s');
        document.querySelector(`.b${z+39}`).classList.add('s');
        document.querySelector(`.b${z+40}`).classList.add('s');
        document.querySelector(`.b${z+41}`).classList.add('s');
        z = z + 39;
        up = 4;
      }
    }
  } else if (up === 4) {
    let stick_cl17 = document.querySelector(`.b${z+1}`).classList.contains('f');
    let stick_cl27 = document.querySelector(`.b${z+2}`).classList.contains('f');
    let stick_cl37 = document.querySelector(`.b${z-18}`).classList.contains('f');
    let stick_cl47 = document.querySelector(`.b${z-38}`).classList.contains('f');
    if ((stick_cl17 === false) && (stick_cl27 === false) && (stick_cl37 === false) && (stick_cl47 === false)) {
      document.querySelector(`.b${z}`).classList.remove('s');
      document.querySelector(`.b${z-20}`).classList.remove('s');
      document.querySelector(`.b${z+1}`).classList.remove('s');
      document.querySelector(`.b${z+2}`).classList.remove('s');

      document.querySelector(`.b${z+1}`).classList.add('s');
      document.querySelector(`.b${z+2}`).classList.add('s');
      document.querySelector(`.b${z-18}`).classList.add('s');
      document.querySelector(`.b${z-38}`).classList.add('s');
      z = z + 2;
      up = 1;
    }
  }
}

function move_crowbarL_left () {
  if (up === 1) {
    if ((z-1) % 20 !== 1) {
      let cl_sidel1 = document.querySelector(`.b${z-2}`).classList.contains('f');
      let cl_sidel2 = document.querySelector(`.b${z-21}`).classList.contains('f');
      let cl_sidel3 = document.querySelector(`.b${z-41}`).classList.contains('f');
      if ((cl_sidel1 === false) && (cl_sidel2 === false) && (cl_sidel3 === false)) {
        for(let i = z; i > z-1; i = i-1) {
          document.querySelector(`.b${i-2}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');
          document.querySelector(`.b${i}`).classList.remove('f');

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
    if ((z-2) % 20 !== 1) {
      let cl_sidel23 = document.querySelector(`.b${z-3}`).classList.contains('f');
      if ((cl_sidel23 === false)) {
        for(let i = z; i > z-1; i = i-1) {
          document.querySelector(`.b${i-3}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');
          document.querySelector(`.b${i}`).classList.remove('f');

          document.querySelector(`.b${i+19}`).classList.add('s');
          document.querySelector(`.b${i+20}`).classList.remove('s');
          document.querySelector(`.b${i+20}`).classList.remove('f');
        }
        z = z-1;
      }
    }
  } else if (up === 3) {
    if (z % 20 !== 1) {
      let cl_sidel13 = document.querySelector(`.b${z-1}`).classList.contains('f');
      let cl_sidel23 = document.querySelector(`.b${z+19}`).classList.contains('f');
      let cl_sidel33 = document.querySelector(`.b${z+39}`).classList.contains('f');
      if ((cl_sidel13 === false) && (cl_sidel23 === false) && (cl_sidel33 === false)) {
        for(let i = z; i > z-1; i = i-1) {
          document.querySelector(`.b${i-1}`).classList.add('s');
          document.querySelector(`.b${i+1}`).classList.remove('s');
          document.querySelector(`.b${i+1}`).classList.remove('f');

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
    if (z % 20 !== 1) {
      let cl_sidel14 = document.querySelector(`.b${z-1}`).classList.contains('f');
      let cl_sidel24 = document.querySelector(`.b${z-21}`).classList.contains('f');
      if ((cl_sidel14 === false) && (cl_sidel24 === false)) {
        for(let i = z; i > z-1; i = i-1) {
          document.querySelector(`.b${i-1}`).classList.add('s');
          document.querySelector(`.b${i+2}`).classList.remove('s');
          document.querySelector(`.b${i+2}`).classList.remove('f');

          document.querySelector(`.b${i-21}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');
          document.querySelector(`.b${i-20}`).classList.remove('f');
        }
        z = z-1;
      }
    }
  }
}

function move_crowbarL_right () {
  if (up === 1) {
    if (z%20 !== 0) {
      let cl_sider1 = document.querySelector(`.b${z+1}`).classList.contains('f');
      let cl_sider2 = document.querySelector(`.b${z-19}`).classList.contains('f');
      let cl_sider3 = document.querySelector(`.b${z-39}`).classList.contains('f');
      if ((cl_sider1 === false) && (cl_sider2 === false) && (cl_sider3 === false)) {
        for(let i = z; i < z+1; i = i+1) {
          document.querySelector(`.b${i+1}`).classList.add('s');
          document.querySelector(`.b${i-1}`).classList.remove('s');
          document.querySelector(`.b${i-1}`).classList.remove('f');

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
    if (z%20 !== 0) {
      let cl_sider12 = document.querySelector(`.b${z+1}`).classList.contains('f');
      let cl_sider22 = document.querySelector(`.b${z+21}`).classList.contains('f');
      if ((cl_sider12 === false) && (cl_sider22 === false)) {
        for(let i = z; i < z+1; i = i+1) {
          document.querySelector(`.b${i+1}`).classList.add('s');
          document.querySelector(`.b${i-2}`).classList.remove('s');
          document.querySelector(`.b${i-2}`).classList.remove('f');

          document.querySelector(`.b${i+21}`).classList.add('s');
          document.querySelector(`.b${i+20}`).classList.remove('s');
          document.querySelector(`.b${i+20}`).classList.remove('f');
        }
        z = z+1;
      }
    }
  } else if (up === 3) {
    if ((z+1)%20 !== 0) {
      let cl_sider13 = document.querySelector(`.b${z+2}`).classList.contains('f');
      let cl_sider23 = document.querySelector(`.b${z+21}`).classList.contains('f');
      let cl_sider33 = document.querySelector(`.b${z+41}`).classList.contains('f');
      if ((cl_sider13 === false) && (cl_sider23 === false) && (cl_sider33 === false)) {
        for(let i = z; i < z+1; i = i+1) {
          document.querySelector(`.b${i+2}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');
          document.querySelector(`.b${i}`).classList.remove('f');

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
    if ((z+2)%20 !== 0) {
      let cl_sider14 = document.querySelector(`.b${z+3}`).classList.contains('f');
      if ((cl_sider14 === false)) {
        for(let i = z; i < z+1; i = i+1) {
          document.querySelector(`.b${i+3}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');
          document.querySelector(`.b${i}`).classList.remove('f');

          document.querySelector(`.b${i-19}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');
          document.querySelector(`.b${i-20}`).classList.remove('f');
        }
        z = z+1;
      }
    }
  }
}

function move_crowbarL2 () {
  if (up === 1) {
    if (z <= 580) {
      let cl_floor1 = document.querySelector(`.b${z+20}`).classList.contains('f');
      let cl_floor2 = document.querySelector(`.b${z+19}`).classList.contains('f');
      if ((cl_floor1 === false) && (cl_floor2 === false)) {
        stop_moving = 0;
      for (let i = z; i < z+20; i = i+20) {
        document.querySelector(`.b${i+20}`).classList.add('s');
        document.querySelector(`.b${i-40}`).classList.remove('s');

        document.querySelector(`.b${i+19}`).classList.add('s');
        document.querySelector(`.b${i-1}`).classList.remove('s');
      }
      z = z+20;
    } else {
      down = 0;
      stop_moving++;
      if (stop_moving >= 4) {
        side_stop = 1;
        clearInterval(move5);
        generate();
      }
    }
    } else {
      down = 0;
      clearInterval(move5);
      generate();
    }
  } else if (up === 2) {
      if ((z+20) <= 580) {
        let cl_floor12 = document.querySelector(`.b${z+40}`).classList.contains('f');
        let cl_floor22 = document.querySelector(`.b${z+19}`).classList.contains('f');
        let cl_floor32 = document.querySelector(`.b${z+18}`).classList.contains('f');
        if ((cl_floor12 === false) && (cl_floor22 === false) && (cl_floor32 === false)) {
          stop_moving = 0;
        for (let i = z; i < z+20; i = i+20) {
          document.querySelector(`.b${i+40}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');

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
          clearInterval(move5);
          generate();
        }
      }
      } else {
        down = 0;
        clearInterval(move5);
        generate();
      }
  }  else if (up === 3) {
      if ((z+40) <= 580) {
        let cl_floor13 = document.querySelector(`.b${z+60}`).classList.contains('f');
        let cl_floor23 = document.querySelector(`.b${z+21}`).classList.contains('f');
        if ((cl_floor13 === false) && (cl_floor23 === false)) {
          stop_moving = 0;
        for (let i = z; i < z+20; i = i+20) {
          document.querySelector(`.b${i+60}`).classList.add('s');
          document.querySelector(`.b${i}`).classList.remove('s');

          document.querySelector(`.b${i+21}`).classList.add('s');
          document.querySelector(`.b${i+1}`).classList.remove('s');
        }
        z = z+20;
      } else {
        down = 0;
        stop_moving++;
        if (stop_moving >= 4) {
          side_stop = 1;
          clearInterval(move5);
          generate();
        }
      }
      } else {
        down = 0;
        clearInterval(move5);
        generate();
      }
  } else if (up === 4) {
      if (z <= 580) {
        let cl_floor14 = document.querySelector(`.b${z+20}`).classList.contains('f');
        let cl_floor24 = document.querySelector(`.b${z+21}`).classList.contains('f');
        let cl_floor34 = document.querySelector(`.b${z+22}`).classList.contains('f');
        if ((cl_floor14 === false) && (cl_floor24 === false) && (cl_floor34 === false)) {
          stop_moving = 0;
        for (let i = z; i < z+20; i = i+20) {
          document.querySelector(`.b${i+20}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');

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
          clearInterval(move5);
          generate();
        }
      }
      } else {
        down = 0;
        clearInterval(move5);
        generate();
      }
  }
}