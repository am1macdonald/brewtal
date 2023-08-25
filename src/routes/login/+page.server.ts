import type { ActionFailure, Actions, Redirect, RequestEvent } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import type { loginFormResponse } from '$lib/types/form';
import { SECRET_JWT } from '$env/static/private';

export const load: PageServerLoad = async ({ cookies }) => {
	const authToken = cookies.get('authToken');
	if (!authToken) return { clearUser: true };
	return { clearUser: false };
};

export const actions: Actions = {
	login: async ({
		cookies,
		request
	}: RequestEvent): Promise<loginFormResponse | ActionFailure<loginFormResponse> | Redirect> => {
		const loginFormData = await request.formData();
		const email = loginFormData.get('email')?.toString() ?? '';
		const password = loginFormData.get('password')?.toString() ?? '';

		let loginResponse = {
			email,
			error: false,
			message: ''
		};

		try {
			const user = await prisma.user.findUnique({
				where: {
					email: email as string
				}
			});
			const authAttempt = await bcryptjs.compare(password, user?.password as string);

			if (!authAttempt || !user) {
				loginResponse.error = true;
				loginResponse.message = 'Invalid email or password';
			} else if (authAttempt) {
				const { password, ...userWithoutPassword } = user;
				const authToken = jwt.sign({ authedUser: userWithoutPassword }, SECRET_JWT, {
					expiresIn: '1h'
				});
				cookies.set('authToken', authToken, {
					httpOnly: true,
					maxAge: 60 * 60 * 1000,
					sameSite: 'strict',
					path: '/'
				});
				throw redirect(302, '/');
			}
		} finally {
		}
		return loginResponse;
	}
};
