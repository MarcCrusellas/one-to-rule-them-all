import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar-left',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss']
})
export class NavbarLeftComponent implements OnInit {
  items: NavItem[]= [];
  constructor(
    // public authQuery: AuthQuery,
    // private _drawerService: NzDrawerService,
    // private _modalService: NzModalService
  ) {}

  ngOnInit(): void {
    this.items = [
      new NavItem('search', 'Search issues', this.openSearchDrawler.bind(this)),
      new NavItem('plus', 'Create issue', this.openCreateIssueModal.bind(this))
    ];
  }

  openCreateIssueModal() {
    // this._modalService.create({
    //   nzContent: AddIssueModalComponent,
    //   nzClosable: false,
    //   nzFooter: null,
    //   nzWidth: 700
    // });
  }

  openSearchDrawler() {
    // this._drawerService.create({
    //   nzContent: SearchDrawerComponent,
    //   nzTitle: null,
    //   nzPlacement: 'left',
    //   nzClosable: false,
    //   nzWidth: 500
    // });
  }
}

class NavItem {
  constructor(public icon: string, public tooltip: string, public handler: Handler) {}
}

type Handler = () => void;
