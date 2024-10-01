document.body.addEventListener('keydown', (event)=> {
  if (event.key === 'ArrowLeft') {
    if (side_stop === 0) {
    if (x === 1) {
      move_square_left();
    } else if (x === 2) {
      move_midfinger_left();
    } else if (x === 3) {
      move_stick_left();
    } else if (x === 4) {
      move_crowbarR_left();
    } else if (x === 5) {
      move_crowbarL_left();
    } else if (x === 6) {
      move_sR_left();
    } else if (x === 7) {
      move_sL_left();
    }
  }
  } else if (event.key === 'ArrowRight') {
    if (side_stop === 0) {
      if (x === 1) {
        move_square_right();
      } else if (x === 2) {
        move_midfinger_right();
      } else if (x === 3) {
        move_stick_right();
      } else if (x === 4) {
        move_crowbarR_right();
      } else if (x === 5) {
        move_crowbarL_right();
      } else if (x === 6) {
        move_sR_right();
      } else if (x === 7) {
        move_sL_right();
      }
    }
  } else if (event.key === 'ArrowUp') {
    if (up_click === 1) {
      if (x === 2) {
        flip_midfinger();
      } else if (x === 3) {
        flip_stick();
      } else if (x === 4) {
        flip_crowbarR();
      } else if (x === 5) {
        flip_crowbarL();
      } else if (x === 6) {
        flip_sR();
      } else if (x === 7) {
        flip_sL();
      }
        up_click = 0;
    }
  } else if (event.key === ' ') {
    if (space_clk === 0) {
      event.preventDefault();
      generate();
      down = 1;
      stop_dbt = 1;
      space_clk = 1;
      document.querySelector('.box2').classList.add('box2_off');
    }
  }  else if (event.key === 'ArrowDown') {
    if (down === 1) {
      if (z <= 580) {
        if (x === 1) {
          move_square2();
        } else if (x === 2) {
          move_midfinger2();
        } else if (x === 3) {
          move_stick2(); 
        } else if (x === 4) {
          move_crowbarR2();
        } else if (x === 5) {
          move_crowbarL2();
        } else if (x === 6) {
          move_sR2();
        } else if (x === 7) {
          move_sL2();
        }
      } else {
        down = 0;
      }
    }
  } else if (event.key === 'r') {
      clearInterval(move1);
      clearInterval(move2);
      clearInterval(move3);
      clearInterval(move4);
      clearInterval(move4);
      clearInterval(move5);
      clearInterval(move6);
      clearInterval(move7);
      down = 0;
      stop_dbt = 0;
      gen = 0;
      side_stop = 1;
      clear();
  }
})

document.body.addEventListener('keyup', (event)=> {
  if (event.key === 'ArrowUp') {
    up_click = 1;
  } else if (event.key === 'ArrowDown') {
    if (stop_dbt === 1) {
      down = 1;
    }
  }
})