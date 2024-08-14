import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { debounceTime } from "rxjs";

function mustContainQuesitonMark(control: AbstractControl) {
  if (control.value.includes("?")) {
    return null;
  }
  return { mustContainQuesitonMark: true };
}

let initialEmailValue = "";
const savedForm = window.localStorage.getItem("saved-login-form");

if (savedForm) {
  const { email } = JSON.parse(savedForm);
  initialEmailValue = email;
}

@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  form = new FormGroup({
    email: new FormControl(initialEmailValue, [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      mustContainQuesitonMark,
    ]),
  });

  get emailIsInvalid() {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.invalid &&
      this.form.controls.email.invalid
    );
  }

  get passwordIsInvalid() {
    return (
      this.form.controls.password.touched &&
      this.form.controls.password.invalid &&
      this.form.controls.password.invalid
    );
  }

  ngOnInit() {
    const subscription = this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe({
        next: (value) => {
          window.localStorage.setItem(
            "saved-login-form",
            JSON.stringify({ email: value.email })
          );
        },
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
