import { trigger, state, animate, style, transition } from '@angular/animations';


export function fallIn() {
  return trigger('fallIn', [
    transition(':enter', [
      style({ opacity: '0', transform: 'translateY(40px)' }),
      animate('.4s .2s ease-in-out', style({ opacity: '1', transform: 'translateY(0)' }))
    ]),
    transition(':leave', [
      style({ opacity: '1', transform: 'translateX(0)' }),
      animate('.3s ease-in-out', style({ opacity: '0', transform: 'translateX(-200px)' }))
    ])
  ]);
}
// FROM TOP
export function fromTop() {
  return trigger('fromTop', [
    state('*', style({ position: 'absolute', width: '100%' })),
    transition(':enter', [
      style({ opacity: '0', transform: 'translateY(-100%)' }), // from 100% Y,
      animate('1s ease-in-out', style({ opacity: '1', transform: 'translateY(0%)' })) // last position 0 Y
    ]),
    transition(':leave', [
      style({ opacity: '0.5', transform: 'translateY(0%)' }), // from where
      animate('1s ease-in-out', style({ opacity: '0.2', transform: 'translateY(-100%)' }))
    ])]);
}
export function moveInLeft() {
  return trigger('moveInLeft', [
    transition(':enter', [
      style({ opacity: '0', transform: 'translateX(-100px)' }),
      animate('.6s .2s ease-in-out', style({ opacity: '1', transform: 'translateX(0)' }))
    ])
  ]);
}
// FROM LEFT
export function fromLeft() {
  return trigger('fromLeft', [
    state('*', style({ position: 'absolute', width: '100%' })),
    transition(':enter', [
      style({ opacity: '0', transform: 'translateX(-100%)' }),
      animate('1s ease-in-out', style({ opacity: '1', transform: 'translateX(0)' }))
    ]),
    transition(':leave', [
      style({ opacity: '0.5', transform: 'translateX(0)' }),
      animate('1s ease-in-out', style({ opacity: '0.2', transform: 'translateX(-100%)' }))
    ])]);
}

// FROM RIGHT
export function fromRight() {
  return trigger('fromRight', [
    state('*', style({ position: 'absolute', width: '100%' })),
    transition(':enter', [
      style({ opacity: '0', transform: 'translateX(100%)' }),
      animate('1s ease-in-out', style({ opacity: '1', transform: 'translateX(0)' }))
    ]),
    transition(':leave', [
      style({ opacity: '0.5', transform: 'translateX(0)' }),
      animate('1s ease-in-out', style({ opacity: '0.2', transform: 'translateX(100%)' }))
    ])]);
}


// FROM BOTTOM
export function fromBottom() {
  return trigger('fromBottom', [
    state('*', style({ position: 'absolute', width: '100%' })),
    transition(':enter', [
      style({ opacity: '0', transform: 'translateY(100%)' }), // from 100% Y,
      animate('1s ease-in-out', style({ opacity: '1', transform: 'translateY(0%)' })) // last position 0 Y
    ]),
    transition(':leave', [
      style({ opacity: '0.5', transform: 'translateY(0%)' }), // from where
      animate('1s ease-in-out', style({ opacity: '0.2', transform: 'translateY(100%)' }))
    ])]);
}

