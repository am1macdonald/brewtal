import bcryptjs from 'bcryptjs';
import type { RegisterFormData } from '$lib/types/form';
import prisma from '$lib/prisma';

export const registerUser = async (form: RegisterFormData): Promise<'success' | 'fail'> => {
	const hashedPassword = await bcryptjs.hash(form.password, 10);
	const user = await prisma.user.create({
		data: {
			email: form.email,
			password: hashedPassword
		}
	});

	const registration = await prisma.userRegistration.create({
		data: {
			email: form.email,
			userId: user.id
		}
	});

	const success = await prisma.user.update({
		where: {
			id: user.id
		},
		data: {
			userRegistrationId: {
				connect: {
					id: registration.id
				}
			}
		}
	});

	return user && registration ? 'success' : 'fail';
};
