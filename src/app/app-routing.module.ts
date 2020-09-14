import { ThemphongbanComponent } from './Admin/themphongban/themphongban.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './Navigation/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BodyAdminComponent } from './Navigation/Effects/body-admin/body-admin.component';
import { BodyQuanliComponent } from './Navigation/Effects/body-quanli/body-quanli.component';
import { BodyNhanvienComponent } from './Navigation/Effects/body-nhanvien/body-nhanvien.component';
import { SlidebarAdminComponent } from './Navigation/Effects/slidebar-admin/slidebar-admin.component';
import { SlidebarNhanvienComponent } from './Navigation/Effects/slidebar-nhanvien/slidebar-nhanvien.component';
import { SlidebarQuanliComponent } from './Navigation/Effects/slidebar-quanli/slidebar-quanli.component';
import { HomeComponent } from './Navigation/home/home.component';
import { QuanliphongbanComponent } from './Admin/quanliphongban/quanliphongban.component';
import { QuanlitaikhoanComponent } from './Admin/quanlitaikhoan/quanlitaikhoan.component';
import { ThemtaikhoanComponent } from './Admin/themtaikhoan/themtaikhoan.component';
import { DetailTaikhoanComponent } from './Admin/detail-taikhoan/detail-taikhoan.component';
import { DetailPhongbanComponent } from './Admin/detail-phongban/detail-phongban.component';

//Nhan viên
import { DanhsachNhanvienComponent } from './Nhanvien/danhsach-nhanvien/danhsach-nhanvien.component';
import { DanhsachPhongbanComponent } from './Nhanvien/danhsach-phongban/danhsach-phongban.component';
import { LuongcanhanComponent } from './Nhanvien/luongcanhan/luongcanhan.component';
import { ThongtinTaikhoanComponent } from './Nhanvien/thongtin-taikhoan/thongtin-taikhoan.component';
//Quản lí
import { QuanliNhanvienComponent } from './Quanli/quanli-nhanvien/quanli-nhanvien.component';
import { QuanliPhongbanComponent } from './Quanli/quanli-phongban/quanli-phongban.component';
import { QuanliLuongComponent } from './Quanli/quanli-luong/quanli-luong.component';
import { ChitietNhanvienComponent } from './Quanli/chitiet-nhanvien/chitiet-nhanvien.component';
import { ChitietPhongbanComponent } from './Quanli/chitiet-phongban/chitiet-phongban.component';
import { ChitietLuongComponent } from './Quanli/chitiet-luong/chitiet-luong.component';
import { ChamcongComponent } from './Quanli/chamcong/chamcong.component';
import { NavigatorComponent } from './Navigation/navigator/navigator.component';
import { ProfilesComponent } from './Navigation/Effects/profiles/profiles.component';

const routes: Routes = [
  { path: '', redirectTo: 'navigator', pathMatch: 'full' },
  { path: 'navigator', component: NavigatorComponent },
  { path: 'admin/login', component: LoginComponent },
  { path: 'nhanvien/login', component: LoginComponent },
  { path: 'quanli/login', component: LoginComponent },
  {
    path: 'admin', component: BodyAdminComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'taikhoan/:phongbanid', component: QuanlitaikhoanComponent},
      { path: 'phongban', component: QuanliphongbanComponent },
      { path: 'them', component: ThemphongbanComponent },
      { path: 'addtk', component: ThemtaikhoanComponent },
      { path: 'profile/id', component: ProfilesComponent },
      { path: 'addpb', component: ThemphongbanComponent },
      { path: 'phongban/id', component: DetailPhongbanComponent },
      { path: 'profile', component: ProfilesComponent },
    ]
  },

  {
    path: 'nhanvien', component: BodyNhanvienComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'nhanvien', component: DanhsachNhanvienComponent },
      { path: 'phongban', component: DanhsachPhongbanComponent },
      { path: 'luong', component: QuanliLuongComponent },
      { path: 'nhanvien/id', component: ChitietNhanvienComponent },
      { path: 'phongban/id', component: ChitietPhongbanComponent },
      { path: 'luong/id', component: ChitietLuongComponent },
      { path: 'info', component: ThongtinTaikhoanComponent },
      { path: 'profile', component: ProfilesComponent },
    ]
  },

  {
    path: 'quanli', component: BodyQuanliComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'nhanvien', component: QuanliNhanvienComponent },
      { path: 'phongban', component: QuanliPhongbanComponent },
      { path: 'luong', component: QuanliLuongComponent },
      { path: 'nhanvien/id', component: ChitietNhanvienComponent },
      { path: 'phongban/id', component: ChitietPhongbanComponent },
      { path: 'luong/id', component: ChitietLuongComponent },
      { path: 'chamcong', component: ChamcongComponent },
      { path: 'profile', component: ProfilesComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
