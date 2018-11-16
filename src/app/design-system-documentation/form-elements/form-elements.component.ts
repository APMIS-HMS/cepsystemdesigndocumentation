import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent implements OnInit {

  ishtml = true;
  ists = false;
  iscss = false;

  ishtml2 = true;
  ists2 = false;
  iscss2 = false;

  ishtml3 = true;
  ists3 = false;
  iscss3 = false;

  ishtml4 = true;
  ists4 = false;
  iscss4 = false;

  ishtml5 = true;
  ists5 = false;
  iscss5 = false;

  inputfields2 = `
  <input class="input-invalid" type="text" placeholder="Enter some text">

  <input class="input-valid" type="text" placeholder="Enter some text">

  <div class="form-group">
    <input class="input-invalid" type="text" placeholder="Enter some text">
    <div class="notification input-error">You have a big buggy bug here!!!</div>
  </div>
  `;

  inputfields1 = `
  <input type="text" placeholder="Enter some text">

  <input type="text" placeholder="Enter some text" disabled>

  <input type="text" value="Read only value" readonly>
  `;

  inputfields3 = `
  <div class="search-wrap">
    <input type="search" placeholder="Type your search">
  </div>

  <input type="password">
  
  <textarea></textarea>
  `;

  inputfields4 = `
  <div class="checkbox">
    <input type="checkbox" id="item1" name="item1" value="">
    <label for="item1">Option</label>
  </div>
  <div class="checkbox">
    <input disabled type="checkbox" id="item2" name="item2" value="">
    <label for="item2">Option2</label>
  </div>
  <div class="checkbox">
    <input type="checkbox" id="item3" name="item3" value="">
    <label for="item3">Option3</label>
  </div>
  `;

  inputfield5 = `
  <div class="radio">
    <input type="radio" id="radio1" name="radio" value="">
    <label for="radio1">Option</label>
  </div>
  <div class="radio">
    <input disabled type="radio" id="radio2" name="radio" value="">
    <label for="radio2">Option2</label>
  </div>
  <div class="radio">
    <input type="radio" id="radio3" name="radio" value="">
    <label for="radio3">Option3</label>
  </div>
  `;

  constructor() { }

  ngOnInit() {
  }

  htmltab(){
    this.ishtml = true;
    this.iscss = false;
    this.ists = false;
  }
  csstab(){
    this.ishtml = false;
    this.iscss = true;
    this.ists = false;
  }
  tstab(){
    this.ishtml = false;
    this.iscss = false;
    this.ists = true;
  }

  htmltab2(){
    this.ishtml2 = true;
    this.iscss2 = false;
    this.ists2 = false;
  }
  csstab2(){
    this.ishtml2 = false;
    this.iscss2 = true;
    this.ists2 = false;
  }
  tstab2(){
    this.ishtml2 = false;
    this.iscss2 = false;
    this.ists2 = true;
  }

  htmltab3(){
    this.ishtml3 = true;
    this.iscss3 = false;
    this.ists3 = false;
  }
  csstab3(){
    this.ishtml3 = false;
    this.iscss3 = true;
    this.ists3 = false;
  }
  tstab3(){
    this.ishtml3 = false;
    this.iscss3 = false;
    this.ists3 = true;
  }

  htmltab4(){
    this.ishtml4 = true;
    this.iscss4 = false;
    this.ists4 = false;
  }
  csstab4(){
    this.ishtml4 = false;
    this.iscss4 = true;
    this.ists4 = false;
  }
  tstab4(){
    this.ishtml4 = false;
    this.iscss4 = false;
    this.ists4 = true;
  }

  htmltab5(){
    this.ishtml5 = true;
    this.iscss5 = false;
    this.ists5 = false;
  }
  csstab5(){
    this.ishtml5 = false;
    this.iscss5 = true;
    this.ists5 = false;
  }
  tstab5(){
    this.ishtml5 = false;
    this.iscss5 = false;
    this.ists5 = true;
  }

}
