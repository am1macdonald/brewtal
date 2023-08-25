import { redirect } from '@sveltejs/kit';

// @ts-ignore
export const GET = async (request) => {
	throw redirect(303, '/app/pour');
};
