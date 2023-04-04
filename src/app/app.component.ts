import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog';
  blog = 'hello blog';
  getBlog() {
    return 'this is function';
  }
  getName(name: string, name1: string) {
    alert(name + ' ' + name1);
  }
  getClick(name: string) {
    console.log(name);
  }
  count = 0;
  getCount(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }
  value = 'peter';
  disable = false;
  show = true;
  color = 'green';
  arr = [
    {
      name: 'abu',
      email: 'abu@gmail.com',
      phone: 1234,
      socialMedia: ['facebook', 'google', 'youtube'],
    },
    {
      name: 'torab',
      email: 'torab@gmail.com',
      phone: 2222,
      socialMedia: ['yhoo', 'google', 'youtube'],
    },
    {
      name: 'khan',
      email: 'khan@gmail.com',
      phone: 3333,
      socialMedia: ['facebook', 'google', 'email'],
    },
    {
      name: 'md',
      email: 'md@gmail.com',
      phone: 4444,
      socialMedia: ['facebook', 'hello', 'youtube'],
    },
    {
      name: 'hello',
      email: 'hello@gmail.com',
      phone: 6666,
      socialMedia: ['hii', 'google', 'youtube'],
    },
  ];
  data: any = {};
  getData(data: any) {
    this.data = data;
    console.log(data);
  }

  toggle = true;
  Toggle() {
    this.toggle = !this.toggle;
  }

  // bootstrap code
  closeResult = '';

  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // todo list
  list: any[] = [];
  addList(item: string) {
    this.list.push({ id: this.list.length, name: item });
    console.log(this.list);
  }
  delete(id: Number) {
    console.log('-------', id);
    this.list = this.list.filter((item) => item.id !== id);
  }

  // parent to child
  pass = 10;
  pass1 = 11;

  // child to parent
  updateDate(data: string) {
    console.log(data);
  }
}
