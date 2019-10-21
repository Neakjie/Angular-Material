import { NgModule }from '@angular/core';
import { MatButtonModule, MatButtonToggleModule,MatIconModule,MatBadgeModule, MatProgressSpinnerModule, MatToolbarModule, MatSidenavModule, MatTooltipModule, MatSnackBarModule, MatMenuModule, MatListModule, MatDividerModule, MatGridListModule, MatExpansionModule } from "@angular/material";

const MaterialComponents = [MatButtonModule,MatButtonToggleModule,MatIconModule,MatBadgeModule,MatProgressSpinnerModule,MatToolbarModule,MatSidenavModule,MatTooltipModule,MatSnackBarModule,MatMenuModule,MatListModule,MatDividerModule,MatGridListModule,MatExpansionModule];

@NgModule( {

    imports: [MaterialComponents],
    exports: [MaterialComponents]
 
  }

) export class MaterialModule {}
