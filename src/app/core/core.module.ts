import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { CoreRoutingModule } from './core-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ApiService } from './services/api.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackService } from './services/snack.service';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    AngularFirestoreModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatSnackBarModule,
  ],
  providers: [ApiService, SnackService],
  exports: [LayoutComponent],
})
export class CoreModule {}
