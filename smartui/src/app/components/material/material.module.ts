import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [CommonModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatDialogModule ],
  exports: [ MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatDialogModule ]
})
export class Material {}
