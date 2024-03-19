import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../service/user-service.service';
import { matchpassword } from './matchpassword.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  title = "ONGC Dummy";
  signUpForm: FormGroup;
  Category: any;
  categoryReceived: any;
  subCategory: any;
  subCat: any;
  subCategoryReceived: any;
  showPassword: boolean;
  jsondata: any = {
    catid: null
  }

  constructor(private userService: UserServiceService) {
    this.signUpForm = new FormGroup({
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      mobileN: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      organization: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      subcategory: new FormControl(''),
      pass1: new FormControl('', [Validators.required]),
      pass2: new FormControl('', [Validators.required]),
      show: new FormControl(''),
      policy: new FormControl('',[Validators.required])
    },
    {
      validators:matchpassword
    }
    );

    this.showPassword = false;
    this.userService.category().subscribe(data => {
      this.Category = data;
      // console.log(this.Category);
      this.categoryReceived = this.Category.data;
      // console.log(this.categoryReceived);
    });


  }

  signUp() {
    if (this.signUpForm.valid){
      const filterData = this.signUpForm.value;
      console.log("Form Submitted")
    }else{
      alert("Form Invalid")
    };
    this.showPassword = false;
    this.signUpForm.reset()
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
    // console.log('showPassword:', this.showPassword);
  }

  clickMethod(id: number) {
    this.jsondata.catid = id;
    this.subCat = id;
    if (this.jsondata.catid === 3) {
      this.userService.SubCat(this.jsondata).subscribe(data => {
        this.subCategory = data;
        this.subCategoryReceived = this.subCategory.data
        console.log(this.subCategory);
      });
    }
  }

  get fname() {
    return this.signUpForm.get('fname')
  }
  get lname() {
    return this.signUpForm.get('lname')
  }
  get mobileN() {
    return this.signUpForm.get('mobileN')
  }
  get email() {
    return this.signUpForm.get('email')
  }
  get organization() {
    return this.signUpForm.get('organization')
  }
  get show() {
    return this.signUpForm.get('show')
  }
  get policy() {
    return this.signUpForm.get('policy')
  }
  get pass1() {
    return this.signUpForm.get('pass1')
  }
  get pass2() {
    return this.signUpForm.get('pass2')
  }
}



// CategChange()
// {
//   let jsondata :any={
//     catid:3
//   }
//   this.userService.mUsers(jsondata).subscribe(data => {
//     this.anotherUrl = data;
//     console.log(this.anotherUrl);
//     // this.newUser = this.users.data;
//     // console.log(this.anotherUrl);
//   });
// }


//   this.userService.users().subscribe(data => {
//     this.users = data;
//     console.log(this.users);
//     this.newUser = this.users.data;
//     console.log(this.newUser);
//   });