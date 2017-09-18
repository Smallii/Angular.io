import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
	transition('* <=> *', [
		/* 1 */
		query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
		/* 2 */
		group([
			query(':enter', [style({ transform: 'translate(100%)' }), animate('0.5s ease-in', style({ opacity: 0.5,transform: 'translate(0%)' }))], {optional: true}), 
			query(':leave', [style({ transform: 'translate(0%)' }), animate('0.5s ease-out', style({ opacity: 0.5,transform: 'translate(-100%)' }))], {optional: true})
		])
	])
])

//import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';
//
//// Component transition animations
//export const routerTransition: AnimationEntryMetadata =
//trigger('routerTransition', [
//  state('*',
//    style({
//      opacity: 1,
//      transform: 'translateX(0)'
//    })
//  ),
//  transition(':enter', [
//    style({
//      opacity: 0,
//      transform: 'translateX(-100%)'
//    }),
//    animate('0.2s ease-in')
//  ]),
//  transition(':leave', [
//    animate('0.5s ease-out', style({
//      opacity: 0,
//      transform: 'translateY(100%)'
//    }))
//  ])
//]);