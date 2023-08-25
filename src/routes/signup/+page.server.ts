import type { ActionFailure, Actions, Redirect, RequestEvent } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma';
import type { RegisterFormData } from '$lib/types/form';
import { registerUser } from '$lib/authService';

export const load: PageServerLoad = async () => {};

export const actions: Actions = {
	signup: async ({
		request
	}: RequestEvent): Promise<RegisterFormData | ActionFailure<RegisterFormData> | Redirect> => {
		const { MODE } = import.meta.env;
		const signupFormData = await request.formData();
		const email = signupFormData.get('email')?.toString() ?? '';
		const password = signupFormData.get('password')?.toString() ?? '';
		const confirmPassword = signupFormData.get('confirm-password')?.toString() ?? '';

		let signupResponse = {
			emailInUse: false,
			invalidEmail: false,
			passwordsDontMatch: false,
			weakPassword: false,
			error: false,
			message: '',
			email,
			password: '',
			confirmPassword: ''
		};

		if (password !== confirmPassword) {
			signupResponse.passwordsDontMatch = true;
			signupResponse.error = true;
			signupResponse.message = 'Passwords do not match';
			return fail(400, signupResponse satisfies RegisterFormData);
		}

		if (password.length < 16 && MODE !== 'development') {
			signupResponse.weakPassword = true;
			signupResponse.error = true;
			signupResponse.message = 'Password must be at least 16 characters long';
			return fail(400, signupResponse satisfies RegisterFormData);
		}

		const validEmailRegex = new RegExp(
			"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]" +
				'{0,253}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]' +
				'{0,253}[a-zA-Z0-9])?)*$'
		);

		if (!validEmailRegex.test(email) || email.length > 254 || email.length < 5) {
			signupResponse.invalidEmail = true;
			signupResponse.error = true;
			signupResponse.message = 'Invalid email';
			return fail(400, signupResponse);
		}

		try {
			const emails = await prisma.user.findMany({
				where: {
					email
				}
			});
			if (emails.length > 0) {
				signupResponse.emailInUse = true;
				signupResponse.error = true;
				signupResponse.message = 'Email is already associated with an account';
				return fail(400, signupResponse satisfies RegisterFormData);
			}
		} catch (error) {
			signupResponse.error = true;
			signupResponse.message = 'Error confirming email. Please try again shortly';
			return fail(500, signupResponse satisfies RegisterFormData);
		}

		const registrationResult = await registerUser(signupResponse);
		if (registrationResult === 'success') {
			throw redirect(302, '/welcome');
		} else {
			signupResponse.error = true;
			signupResponse.message = 'Error registering user. Please try again shortly';
			return fail(503, signupResponse satisfies RegisterFormData);
		}
	}
};
