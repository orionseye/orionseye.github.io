(function($) {

const section = document.querySelector('#ani_quad')

let offset = '-=200'
let base = 104

  tl = anime.timeline({
    duration: 800,
	autoplay: true,
    loop: true
  })

  tl.add({ targets: '#ani_quad div:nth-child(1)', translateY: -base })
    .add(
      {
        targets: '#ani_quad div:nth-child(2)',
        translateY: -base,
        translateX: base
      },
      offset
    )
    .add({ targets: '#ani_quad div:nth-child(3)', translateX: base }, offset)
    .add(
      {
        targets: '#ani_quad div:nth-child(4)',
        translateY: base,
        translateX: base
      },
      offset
    )
    .add({ targets: '#ani_quad div:nth-child(5)', translateY: base }, offset)
    .add(
      {
        targets: '#ani_quad div:nth-child(6)',
        translateY: base,
        translateX: -base
      },
      offset
    )
    .add({ targets: '#ani_quad div:nth-child(7)', translateX: -base }, offset)
    .add(
      {
        targets: '#ani_quad div:nth-child(8)',
        translateY: -base,
        translateX: -base
      },
      offset
    )
    .add({
      targets: '#ani_quad div',
      rotate: 90,
      easing: 'linear',
      duration: 400
    })
    .add({
      targets: '#ani_quad div',
      translateY: 0,
      translateX: 0,
      delay: anime.stagger(base, { direction: 'reverse' })
    })
    .add({ targets: section, rotate: 90 })
	
})(jQuery);