//.html
<div class="container">
  <div>
    <h1>Analyze A Word</h1>
  </div>
</div>
<div>
  <input type="text" #textInput ngModel (input)="textAnalyze(textInput)" />
</div>
<div *ngIf="textInput.value.length !== 0">
  <h3>Results</h3>
  <div>
    Number Of Characters :{{ textInput.value.length }}
    <h5>Vowels</h5>
    <div *ngFor="let vowel of vowels">{{ vowel.letter }}-{{ vowel.count }}</div>
  </div>
</div>



//.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'service';
  vowels = [
    { letter: 'a', count: 0 },
    { letter: 'e', count: 0 },
    { letter: 'i', count: 0 },
    { letter: 'o', count: 0 },
    { letter: 'u', count: 0 },
  ];
  textAnalyze(word: any) {
    let a = 0,
      e = 0,
      i = 0,
      o = 0,
      u = 0;
    console.log(word);
    for (let letter of word.value) {
      if (letter === 'a') a++;
      if (letter === 'e') e++;
      if (letter === 'i') i++;
      if (letter === 'o') o++;
      if (letter === 'u') u++;
    }
    this.vowels = [
      { letter: 'a', count: a },
      { letter: 'e', count: e },
      { letter: 'i', count: i },
      { letter: 'o', count: o },
      { letter: 'u', count: u },
    ];
  }
}
