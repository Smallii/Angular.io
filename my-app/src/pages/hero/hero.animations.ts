import {trigger, state, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

export const heroTransition = trigger('heroTransition', [
	state('in', style({transform: 'translateX(0)'})),
	transition('* <=> *', [
		style({ transform: 'translateX(-100%)' }), animate(100)
	])
])
