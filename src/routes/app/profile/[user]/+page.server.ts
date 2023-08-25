import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals: {} }) => {
	return {};
}) satisfies PageServerLoad;

export const actions = {} satisfies Actions;
