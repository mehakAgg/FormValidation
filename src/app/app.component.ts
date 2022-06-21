import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 topics=['< 1,00,000','1,00,000-3,00,000','3,00,000-5,00,000','5,00,000-10,00,000','> 10,00,000'];
 topicHasError=true;
 userModel=new User('Mehak','aggarwalmehak179@gmail.com',9878873130,'default','morning',true);
 validateTopic(value:any)
 {
  if(value === 'default')
  {
    this.topicHasError=true;
  }
  else{
    this.topicHasError=false;
  }
 }
 onSubmit(){
  console.log(this.userModel);
 }
}
