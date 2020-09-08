import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
import { SlideImageComponent } from './Navigation/Effects/slide-image/slide-image.component';
import { ThemtaikhoanComponent } from './Admin/themtaikhoan/themtaikhoan.component';
import { DetailTaikhoanComponent } from './Admin/detail-taikhoan/detail-taikhoan.component';
import { ThemphongbanComponent } from './Admin/themphongban/themphongban.component';
import { DetailPhongbanComponent } from './Admin/detail-phongban/detail-phongban.component';
import { DanhsachNhanvienComponent } from './Nhanvien/danhsach-nhanvien/danhsach-nhanvien.component';
import { DanhsachPhongbanComponent } from './Nhanvien/danhsach-phongban/danhsach-phongban.component';
import { LuongcanhanComponent } from './Nhanvien/luongcanhan/luongcanhan.component';
import { ThongtinTaikhoanComponent } from './Nhanvien/thongtin-taikhoan/thongtin-taikhoan.component';
import { QuanliNhanvienComponent } from './Quanli/quanli-nhanvien/quanli-nhanvien.component';
import { QuanliPhongbanComponent } from './Quanli/quanli-phongban/quanli-phongban.component';
import { QuanliLuongComponent } from './Quanli/quanli-luong/quanli-luong.component';
import { ChitietNhanvienComponent } from './Quanli/chitiet-nhanvien/chitiet-nhanvien.component';
import { ChitietPhongbanComponent } from './Quanli/chitiet-phongban/chitiet-phongban.component';
import { ChitietLuongComponent } from './Quanli/chitiet-luong/chitiet-luong.component';
import { ChamcongComponent } from './Quanli/chamcong/chamcong.component';
import { NavigatorComponent } from './Navigation/navigator/navigator.component';
import { ProfilesComponent } from './Navigation/Effects/profiles/profiles.component';
import { QuanlichucvuComponent } from './Admin/quanlichucvu/quanlichucvu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BodyAdminComponent,
    BodyQuanliComponent,
    BodyNhanvienComponent,
    SlidebarAdminComponent,
    SlidebarNhanvienComponent,
    SlidebarQuanliComponent,
    HomeComponent,
    QuanliphongbanComponent,
    QuanlitaikhoanComponent,
    SlideImageComponent,
    ThemtaikhoanComponent,
    DetailTaikhoanComponent,
    ThemphongbanComponent,
    DetailPhongbanComponent,
    DanhsachNhanvienComponent,
    DanhsachPhongbanComponent,
    LuongcanhanComponent,
    ThongtinTaikhoanComponent,
    QuanliNhanvienComponent,
    QuanliPhongbanComponent,
    QuanliLuongComponent,
    ChitietNhanvienComponent,
    ChitietPhongbanComponent,
    ChitietLuongComponent,
    ChamcongComponent,
    NavigatorComponent,
    ProfilesComponent,
    QuanlichucvuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
