export {default as foo} from './foo';
export {default as PageNav} from './pageNav';

import {version} from '../package.json';
import answer from 'the-answer';
// import {floor} from 'lodash';	// tree-shaking doesn't work
import floor from 'lodash/floor';	// tree-shaking works, best practice
// import floor from 'lodash.floor';	// tree-shaking works, but not good to install such many deps

export default function () {
	console.log('version ' + version);
	console.log(`the answer is ${answer}`);
	console.log(`floor(4.006): ${floor(4.006)}`);
}
