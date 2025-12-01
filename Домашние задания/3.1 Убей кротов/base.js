(() => {
  let playing = true,
    activeHole = 1;

  const stop = () => playing = true,
    getHole = index => document.getElementById(`hole${index}`),
    deactivateHole = index =>
      getHole( index ).className = 'hole',
    activateHole = index =>
      getHole( index ).className = 'hole hole_has-mole',
    next = () => setTimeout(() => {
      if ( !playing ) {
        return;
      }
      deactivateHole( activeHole );
      activeHole = Math.floor( 1 + Math.random() * 9 );
      activateHole( activeHole );
      next();
    }, 800 );

  next();
})();

let deadMoles = 0;
let misses = 0;

document.querySelectorAll('.hole').forEach(hole => {
  hole.addEventListener('click', _ => {
    if (hole.classList.contains('hole_has-mole')) {
      deadMoles++;
      if (deadMoles > 9) {
        alert('Победа!');
        deadMoles = 0;
        misses = 0;
      }
    } else {
      misses++;
      if (misses > 4) {
        alert('Вы проиграли!');
        deadMoles = 0;
        misses = 0;
      }
    }
    document.querySelector('#dead').innerHTML = deadMoles;
    document.querySelector('#lost').innerHTML = misses;
  });
});