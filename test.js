import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();
	const result = await alfy('test');

	t.deepEqual(result, [
		{
			title: 'Test Passed!',
			subtitle: 'Good job.'
		}
	]);
});
