import { FormControl } from "@angular/forms";

export class CustomValidators {
	nameValidator(control: FormControl): { [key: string]: boolean } {
		const nameRegexp: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
		if (control.value && nameRegexp.test(control.value)) {
			return { invalidName: true };
		}

		return { invalidName: false }
	}
}

// Decided not to use CustomValidators from Angular but just custom-custom validators!
// Reason: Less flexible in publishing errors - which was the whole point of it