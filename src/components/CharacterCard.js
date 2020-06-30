import React from 'react';
import './styles/CharacterCard.css';

const CharacterCard = props => {
	const hero = props.character;
	console.log(hero);
	const thumbnail = hero.thumbnail;
	const path = thumbnail.path;
	const extension = `.${thumbnail.extension}`;
	const picture = path + extension;

	return (
		<>
			<div className='square'>
				<img src={picture} alt='hero' />
			</div>
		</>
	);
};

export default CharacterCard;
