import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/thorbeck/rafflinator.git', // Update to point to your repository
		user: {
			name: 'Tom-Erik Thorbeck', // update to use your name
			email: 'tomerik@thorbeck.no' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
