import { Injectable } from '@angular/core';
import { Post } from '../components/data/posts.interface';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  createPost(value: any) {
    throw new Error('Method not implemented.');
  }
newPost(post: Post){
  const fecha = new Date();
  const nuevaFecha= fecha.getDate()
  //post.fecha =nuevaFecha;

}
  getAll(){}

  getByCategories(){}


}
