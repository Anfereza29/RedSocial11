import {Component, inject} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { Post, PostDialogComponent } from '../post-dialog/post-dialog.component';
import { Database, onValue, ref } from '@angular/fire/database';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    NgFor,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly dialog = inject(MatDialog);
  postsList: Array<Post> = [];
  
  constructor(
    public database: Database,
    ) {
      this.getPosts()
  }

  getPosts() {
    const postList = ref(this.database, 'posts');
    onValue(postList, (snapshot) => {
      const data = snapshot.val();
      this.postsList = data;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      maxWidth: '100vw',
      width: '90%'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
