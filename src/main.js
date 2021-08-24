export {default as foo} from './foo';
export {default as PageNav} from './pageNav';

import {version} from '../package.json';
import answer from 'the-answer';
import {floor} from 'lodash-es';

export default function () {
	console.log('version ' + version);
	console.log(`the answer is ${answer}`);
	console.log(`floor(4.006): ${floor(4.006)}`);
}
