import React, { FC } from 'react';
import './PasswordInput.scss';

const PasswordInput: FC = () => {
	return (
		<div className='password'>
			<label className='password__label' htmlFor='password'>
				Пароль
			</label>
			<input
				type='password'
				name='password'
				className='password__input'
				placeholder='Пароль'
			/>
		</div>
	);
};

export default PasswordInput;
