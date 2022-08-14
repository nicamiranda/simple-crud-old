import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "blog",
    loadChildren: () => import("./blog/blog.module").then(m => m.BlogModule)
  },
  {
    path: "book",
    loadChildren: () => import("./book/book.module").then(m => m.BookModule)
  },
  {
    path: "profile",
    loadChildren: () => import("./user/user.module").then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
