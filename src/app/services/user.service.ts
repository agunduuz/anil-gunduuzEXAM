import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  products = [
    { id:101, name:'Ayakkabı', category: 'İç çamaşırı', 
      price: 0.00, 
      description: 'In this course you will learn the fundamentals of JavaScript. This course is purely designed for beginners and teaches you all the concepts of javascript step by step'
    },
    { id:102, name:'Polo', category: 'Toka',
      price: 129.00, 
      description: 'In this course you will learn the fundamentals of Angular framework. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step'
    },
    { id:103, name:'Bershka', category: 'Ayakkabı', 
      price: 0.00, 
      description: 'In this course you will learn the fundamentals of React. This course is purely designed for beginners and teaches you all the basic concepts of React step by step'
    },
    { id:104, name:'Vintage', category: 'Ayakkabı', 
      price: 145.50, 
      description: 'In this course you will learn all the concepts of Angular from basic to advance. This course will start teaching you from basics of Angular and as you progress, you will learn all the advance concepts.'
    }
  ]
  constructor() { }
}
