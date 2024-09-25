import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialogRef,
  MatDialogModule
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Database, onValue, ref, update } from '@angular/fire/database';

export interface Post {
  name: string;
  message: string;
}

@Component({
  selector: 'app-post-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule],
  templateUrl: './post-dialog.component.html',
  styleUrl: './post-dialog.component.scss'
})
export class PostDialogComponent {
  readonly dialogRef = inject(MatDialogRef<PostDialogComponent>);
  name: string = '';
  message: string = '';
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
      console.log('postList', this.postsList);
    });
  }

  cancel() {
    this.dialogRef.close();
  }

  createPost() {
    if (this.name && this.message) {
      this.postsList.push({
        name: this.name,
        message: this.message
      });
      var updates = {
        '/posts': this.postsList
      };
      update(ref(this.database), updates);
      this.dialogRef.close();
    }
  }
}
