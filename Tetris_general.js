function generate () {
  floor();
  if (gen === 1) {
    line_complete();
    //setTimeout(() => {
      pick();
    
      //setTimeout(()=>{
        if (x === 1) {
          move_square();
        } else if (x === 2) {
          move_midfinger();
        } else if (x === 3) {
          move_stick(); 
        } else if (x === 4) {
          move_crowbarR();
        } else if (x === 5) {
          move_crowbarL();
        } else if (x === 6) {
          move_sR();
        } else if (x === 7) {
          move_sL();
        }
      ////},100)
   // }, 200);
  }
}

function pick () {
  let u = Math.random();
  let v = Math.round((u*6)+1);
  up = 1;
  if (v!==0) {
    if (v === 1) {
    generate_square();
    x = 1;
  } else if (v === 2) {
    generate_midfinger();
    x = 2;
  } else if (v === 3) {
    generate_stick();
    x = 3;
  } else if (v === 4) {
    generate_crowbarR();
    x = 4;
  } else if (v === 5) {
    generate_crowbarL();
    x = 5;
  } else if (v === 6) {
    generate_sR();
    x = 6;
  } else if (v === 7) {
    generate_sL();
    x = 7;
  }
  }
}

function floor () {
  for (let i =1; i < 601 ; i++) {
    let check = document.querySelector(`.b${i}`).classList.contains('s');
    if (check === true) {
      document.querySelector(`.b${i}`).classList.remove('s');
      document.querySelector(`.b${i}`).classList.add('f');
    }
  }
  game_over();
}

function line_complete () {
  for (let j = 0; j <= 580 ; j= j+20) {
    block = 0;
    for(let i = j+1; i <= j+20; i++) {
      let block_check = document.querySelector(`.b${i}`).classList.contains('f');
      if (block_check === true) {
        block++;
      }
      if (block === 20) {
        score++;
        score_count();
        clear_line(j);
        drop_line (j);
      }
    }
  }
}

function clear_line (p) {
  for (let i = p+1; i <= p+20; i++) {
    document.querySelector(`.b${i}`).classList.remove('f');
  }
}

function drop_line (p) {
  for (let i = p; i >= 1; i = i -1) {
    let drop = document.querySelector(`.b${i}`).classList.contains('f');
    if ((drop === true)) {
      document.querySelector(`.b${i}`).classList.remove('f');
      document.querySelector(`.b${i+20}`).classList.add('f');
    }
  }
}

function game_over () {
  for (let i = 1; i <= 20; i++) {
    let top = document.querySelector(`.b${i}`).classList.contains('f');
    if (top === true) {
      down = 0;
      stop_dbt = 0;
      gen = 0;
      side_stop = 1;
      clear();
    }
   }
}

function clear () {
  let j = 600;
  let fill = setInterval(() => {
    if (j >= 1) {
      for (let i = j; i >= j -19; i = i-1) {
        let block = document.querySelector(`.b${i}`).classList.contains('f');
        if (block === false) {
          document.querySelector(`.b${i}`).classList.add('f');
        }
      }
      j = j -20;
    } else {
      clearInterval(fill);
      let k = 1;
      let remove = setInterval(() => {
        if (k <= 600) {
          for (let i = k; i <= k + 19; i = i+1) {
            let block = document.querySelector(`.b${i}`).classList.contains('f');
            if (block === true) {
              document.querySelector(`.b${i}`).classList.remove('f');
              document.querySelector(`.b${i}`).classList.remove('s');
            }
          }
          k = k + 20;
        } else {
          clearInterval(remove);
          highest_score();
          score = 0;
          score_count();
          document.querySelector('.box2').classList.remove('box2_off');
          gen = 1;
          space_clk = 0;
        }
      }, 50);
    }
  }, 50);
}

function score_count () {
  document.querySelector('.score').innerHTML = `SCORE: ${score}`;
}

function highest_score () {
  if (hs <= score) {
    hs = score;
  }
  hscore.innerHTML = `HIGHEST SCORE : ${hs}`;
  localStorage.setItem('highest score tetris', JSON.stringify(hs));
}

