export type loginFormResponse = {
	email: string;
	error: boolean;
	message: string;
};

export type RegisterFormData = {
	weakPassword: boolean;
	passwordsDontMatch: boolean;
	invalidEmail: boolean;
	emailInUse: boolean;
	error: boolean;
	message: string;
	email: string;
	password: string;
	confirmPassword: string;
};
