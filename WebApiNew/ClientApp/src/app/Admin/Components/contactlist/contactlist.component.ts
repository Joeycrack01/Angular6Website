
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ContactUs } from '../../../Model/ContactUsModel';
import { ContactUsService } from '../../../Services/contact-us-service.service';
import { DBOperation } from '../../shared/DBOperation';
import { Global } from '../../shared/Global';


@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {
  contacts: ContactUs[];
  contact: ContactUs;
  loadingState: boolean;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;

  // set columns that will need to show in listing table
  displayedColumns = ['name', 'email', 'DateContacted', 'action'];
  // setting up datasource for material table
  dataSource = new MatTableDataSource<ContactUs>();

  constructor(public snackBar: MatSnackBar, private _contactService: ContactUsService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadingState = true;
    this.loadContacts();
  }
  //openDialog(): void {
  //  const dialogRef = this.dialog.open(ContactformComponent, {
  //    width: '500px',
  //    data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, contact: this.contact }
  //  });

  //  dialogRef.afterClosed().subscribe(result => {
  //    console.log('The dialog was closed');
  //    if (result === 'success') {
  //      this.loadingState = true;
  //      this.loadContacts();
  //      switch (this.dbops) {
  //        case DBOperation.create:
  //          this.showMessage('Data successfully added.');
  //          break;
  //        case DBOperation.update:
  //          this.showMessage('Data successfully updated.');
  //          break;
  //        case DBOperation.delete:
  //          this.showMessage('Data successfully deleted.');
  //          break;
  //      }
  //    } else if (result === 'error') {
  //      this.showMessage('There is some issue in saving records, please contact to system administrator!');
  //    } else {
  //      // this.showMessage('Please try again, something went wrong');
  //    }
  //  });
  //}

  loadContacts(): void {
    this._contactService.getAllContact()
      .subscribe(contacts => {
        this.loadingState = false;
        this.dataSource.data = contacts;
      });
  }

  //getGender(gender: number): string {
  //  return Global.genders.filter(ele => ele.id === gender).map(ele => ele.name)[0];
  //}

  //addContact() {
  //  this.dbops = DBOperation.create;
  //  this.modalTitle = 'Add New Contact';
  //  this.modalBtnTitle = 'Add';
  //  this.openDialog();
  //}
  //editContact(id: number) {
  //  this.dbops = DBOperation.update;
  //  this.modalTitle = 'Edit Contact';
  //  this.modalBtnTitle = 'Update';
  //  this.contact = this.dataSource.data.filter(x => x.ID === id)[0];
  //  this.openDialog();
  //}
  //deleteContact(id: number) {
  //  this.dbops = DBOperation.delete;
  //  this.modalTitle = 'Confirm to Delete ?';
  //  this.modalBtnTitle = 'Delete';
  //  this.contact = this.dataSource.data.filter(x => x.ID === id)[0];
  //  this.openDialog();
  //}
  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
}
