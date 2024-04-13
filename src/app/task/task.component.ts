import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  public keyOfCar: string | number;
  objectKey: string[] ;
  carvalue: any;
  public cars: any[] = [
    {
    name: "car1",
    brand: "brand1",
    modal: "modal 1",
    price: 500000
   },
  {
    name: "car2",
    brand: "brand2",
    modal: "modal 2",
    price: 600000
  },
  {
    name: "car3",
    brand: "brand 3",
    modal: "modal 3",
    price: 700000
  },
  {
    name: "car4",
    brand: "brand2",
    modal: "modal 2",
    price: 800000
  },
  {
    name: "car5",
    brand: "brand2",
    modal: "modal 2",
    price: 900000
  },
 ]
 
 ngOnInit(){
  this.objectKey = Object.keys(this.cars[0]);
 }
  
getObjectKey(){
  let dropdownList = [];
   for(let car of this.cars){
      //console.log('carkey', car[inputKey])
      dropdownList.push(car[this.keyOfCar]);
      // if(this.keyOfCar == car){
      //    Object.values(car)
      // }
   }
   return dropdownList;
}
}
