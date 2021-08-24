export {default as foo} from './foo';
export {default as PageNav} from './pageNav';

import {version} from '../package.json';
import answer from 'the-answer';

export default function () {
	console.log('version ' + version);
	console.log(`the answer is ${answer}`);
}