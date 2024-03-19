import { Component, inject } from '@angular/core';
import { Post } from '../data/posts.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-lista-post',
  standalone: true,
  imports: [],
  templateUrl: './lista-post.component.html',
  styleUrl: './lista-post.component.css'
})
export class ListaPostComponent {
  postService = inject(PostService)
categoria: any;
categorias: string[]=[];
post: any;
arrPosts: Post[]=[]

}
