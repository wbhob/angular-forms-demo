import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = [
    'Really Smart',
    'Super Flexible',
    'Weather Changer',
    'Invisibility',
    'Wealth'
  ];

  model = new Hero(42, 'Batman', 'Wealth', 'Bruce Wayne');

  submitted = false;

  onSubmit() { this.submitted = true; console.log('Submitted') }

  get diagnostic() { return JSON.stringify(this.model); }

  constructor() {
  }

  ngOnInit() {
  }

  newHero() {
    this.model = new Hero(42, '', '', '');
  }

}
