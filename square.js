function generate_square() {
  z = 30;
  document.querySelector('.b10').classList.add('s');
  document.querySelector('.b11').classList.add('s');
  document.querySelector('.b30').classList.add('s');
  document.querySelector('.b31').classList.add('s');
  stop_moving = 0;
  side_stop = 0;
}

function move_square () {
  move2 = setInterval(()=> {
    if (z <= 580) {
      let square_floor1 = document.querySelector(`.b${z+20}`).classList.contains('f');
      let square_floor2 = document.querySelector(`.b${z+21}`).classList.contains('f');
      if ((square_floor1 === false) && (square_floor2 === false)) {
        stop_moving = 0;
        for (let i = z; i < z+20; i = i+20) {
          document.querySelector(`.b${i+20}`).classList.add('s');
          document.querySelector(`.b${i-20}`).classList.remove('s');
      
          document.querySelector(`.b${i+21}`).classList.add('s');
          document.querySelector(`.b${i-19}`).classList.remove('s');
          }
          z = z+20;
      } else {
        stop_moving++;
        if (stop_moving >= 4) {
          side_stop = 1;
          clearInterval(move2);
          generate();
        }
      }
    } else {
      clearInterval(move2);
      generate();
    }
  },speed)
}

function move_square_left () {
  if (z%20 !== 1) {
    let square_side1 = document.querySelector(`.b${z-1}`).classList.contains('f');
    let square_side2 = document.querySelector(`.b${z-21}`).classList.contains('f');
    if ((square_side1 === false) && (square_side2 === false)) {
      for(let i = z; i > z-1; i = i-1) {
        document.querySelector(`.b${i-1}`).classList.add('s');
        document.querySelector(`.b${i+1}`).classList.remove('s');
        document.querySelector(`.b${i+1}`).classList.remove('f');
    
        document.querySelector(`.b${i-21}`).classList.add('s');
        document.querySelector(`.b${i-19}`).classList.remove('s');
        document.querySelector(`.b${i-19}`).classList.remove('f');
      }
      z = z-1;
    }
  }
}

function move_square_right () {
  if ((z+1)%20 !== 0) {
    let square_side1 = document.querySelector(`.b${z+2}`).classList.contains('f');
    let square_side2 = document.querySelector(`.b${z-18}`).classList.contains('f');
    if ((square_side1 === false) && (square_side2 === false)) {
      for(let i = z; i < z+1; i = i+1) {
        document.querySelector(`.b${i+2}`).classList.add('s');
        document.querySelector(`.b${i}`).classList.remove('s');
        document.querySelector(`.b${i}`).classList.remove('f');

        document.querySelector(`.b${i-18}`).classList.add('s');
        document.querySelector(`.b${i-20}`).classList.remove('s');
        document.querySelector(`.b${i-20}`).classList.remove('f');
      }
      z = z+1;
    }
  }
}

function move_square2 () {
  if (z <= 580) {
    let square_floor1 = document.querySelector(`.b${z+20}`).classList.contains('f');
    let square_floor2 = document.querySelector(`.b${z+21}`).classList.contains('f');
    if ((square_floor1 === false) && (square_floor2 === false)) {
      stop_moving = 0;
      for (let i = z; i < z+20; i = i+20) {
        document.querySelector(`.b${i+20}`).classList.add('s');
        document.querySelector(`.b${i-20}`).classList.remove('s');
    
        document.querySelector(`.b${i+21}`).classList.add('s');
        document.querySelector(`.b${i-19}`).classList.remove('s');
        }
        z = z+20;
    } else {
      down = 0;
      stop_moving++;
      if (stop_moving >= 4) {
        side_stop = 1;
        clearInterval(move2);
        generate();
      }
    }
  } else {
    down = 0;
    clearInterval(move2);
    generate();
  }
}
