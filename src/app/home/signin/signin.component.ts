import { AuthService } from '../../core/auth/auth.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService) {

    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const username = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService
            .authenticate(username, password)
            .subscribe(
                // () => this.router.navigateByUrl('user/' + username),
                () => {console.log('teste'); this.router.navigate(['user', username])},
                err => {
                    this.loginForm.reset();
                    // tslint:disable-next-line: no-unused-expression
                    if (this.platformDetectorService.isPlatformBrowser()) {
                        this.userNameInput.nativeElement.focus();
                    }
                    alert(err.error.message);
                }
            );
    }

}