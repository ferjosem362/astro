import { expect } from 'chai';
import { AstroCookies } from '../../../dist/core/cookies/index.js';
import { apply as applyPolyfill } from '../../../dist/core/polyfill.js';

applyPolyfill();

describe('astro/src/core/cookies', () => {
	describe('errors', () => {
		it('Produces an error if the response is already sent', () => {
			const req = new Request('http://example.com/', {});
			const cookies = new AstroCookies(req);
			req[Symbol.for('astro.responseSent')] = true;
			try {
				cookies.set('foo', 'bar');
				expect(false).to.equal(true);
			} catch (err) {
				expect(err.name).to.equal('ResponseSentError');
			}
		});
	});
});
