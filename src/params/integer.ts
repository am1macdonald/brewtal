import { redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param: unknown) {
	if (typeof param === 'number') {
		return /^\d+$/.test(param.toString());
	} else if (typeof param === 'string') {
		return /^\d+$/.test(param);
	} else {
		throw redirect(300, '/');
	}
}
