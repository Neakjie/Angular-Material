import { Component, SimpleChanges } from '@angular/core';
import { MatSnackBar } from "@angular/material";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private snackBar:MatSnackBar){

  }
  openSnackBar(m,a){
    let snackRef=this.snackBar.open(m,a);
    snackRef.afterDismissed().subscribe(()=>{
      console.log("This SnackBar has been Dismissed");
      
    })
    snackRef.onAction().subscribe(()=>{
      console.log("This SnackBar has been triggered");
      
    })

  }
  title = 'AngularMaterialDesign';
  notifications:number=23;
  notification :number=0;
  showSpinner:boolean = false;
  opened:boolean=false;
  opened1:boolean=false;
  opened2:boolean=true;
  opened3:boolean=false;
  
  loadData(){
    this.showSpinner=true;
    setTimeout(() => {
      this.showSpinner=false;
    }, 5000);

  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.opened3);
  }
  openCustomeSnackBar(m){
this.snackBar.openFromComponent(CustomSnackBarComponent,{duration:2000})
  }
}

@Component({
  selector:'custome-snackbar',
  template:'<span style="color:blue">My SnackBar</span>'
})
export class CustomSnackBarComponent{

}