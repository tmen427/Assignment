import { ChangeDetectorRef, Component, DestroyRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserInformation } from '../../app/models/User';
import { UserService } from '../../app/services/user-service';
import { Observable, mergeMap, switchMap } from 'rxjs';
import { inject } from '@angular/core';
import { AsyncPipe, DatePipe, SlicePipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-management-component',
  imports: [ReactiveFormsModule, AsyncPipe, DatePipe, SlicePipe],
  templateUrl: './user-management-component.html',
  styleUrl: './user-management-component.css',
})
export class UserManagementComponent {
  userService = inject(UserService);
  destroyRef = inject(DestroyRef);

  Users!: UserInformation;
  users$: Observable<any[]> = this.userService.users$;

  page: number = 1;
  itemsPerPage: number = 10;
  maximumPagination: number = 0;

  constructor() {}

  UserInformationForm = new FormGroup({
    id: new FormControl(0, { nonNullable: true }),
    createdAt: new FormControl<Date>(new Date(), { nonNullable: true }),
    lastOnline: new FormControl<Date>(new Date(), { nonNullable: true }),
    firstName: new FormControl('', { nonNullable: true }),
    lastName: new FormControl('', { nonNullable: true }),
    username: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });

  ngOnInit(): void {
    this.userService
      .getUsers()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (value) => {
          this.maximumPagination = value.length;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  onSubmit() {
    const { id } = this.UserInformationForm.value;

    const values = this.UserInformationForm.value;
    console.log(values);

    this.userService
      .updateUser(id!, this.UserInformationForm.value)
      //re-update the async pipe, so that the data is refreshed in the table without refreshing the page
      .pipe(switchMap(() => this.userService.getUsers()))
      .subscribe({
        next: (_) => {},
        error: (error) => {
          console.error(error);
        },
      });
  }

  isCurrentMonthAndYear(value: Date): boolean {
    const date = new Date(value);
    const now = new Date();
    return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
  }

  Warning() {
    alert('Nothing Yet!');
  }

  loadModal(userinfo: UserInformation) {
    this.UserInformationForm.reset();
    console.log(this.UserInformationForm.value);

    // this.UserInformationForm.patchValue({
    //   id: userinfo.id,
    //   createdAt: userinfo.createdAt,
    //   lastOnline: userinfo.lastOnline,
    //   firstName: userinfo.firstName,
    //   lastName: userinfo.lastName,
    //   username: userinfo.username,
    //   password: userinfo.password,
    // });
  }
}
