import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../data/posts.interface';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  postsServices = inject(PostService)
  router = inject(Router)
  formulario: FormGroup = new FormGroup({
    titulo: new FormControl(null, Validators.required), 
    texto: new FormControl(null, Validators.required),
    autor: new FormControl(null, Validators.required),
    imagen: new FormControl(null, Validators.required),
    categoria: new FormControl(null, Validators.required)
  });
// arrPosts: Post[]=this.postsServices.getAll();
  //categoria: string[]=this.postsServices.getByCategories()
Error: any;
categoria:  string | undefined;
  listError(controlName: string, errorName: string) {
    return this.formulario.get(controlName)!.hasError(errorName) &&
      this.formulario.get(controlName)!.touched;
  }
onSubmit(){
  this.postsServices.createPost(this.formulario.value);
  this.router.navigateByUrl('/posts')
}
 

}

