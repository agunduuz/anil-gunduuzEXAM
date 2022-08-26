import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './components/business/business.component';
import { DescriptionComponent } from './components/description/description.component';
import { ProductsComponent } from './components/products/products.component';
import { SectionsComponent } from './components/sections/sections.component';

const routes: Routes = [
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "sections",
    component: SectionsComponent
  },
  {
    path: "business",
    component: BusinessComponent
  },
  {
    path: "description",
    component: DescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
