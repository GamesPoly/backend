import React, { FC } from 'react';
import './EmailInput.scss';

const EmailInput: FC = () => {
	return (
		<div className='email'>
			<label className='email__label' htmlFor='email'>
				Email пользователя
			</label>
			<input
				type='email'
				name='email'
				className='email__input'
				placeholder='Email пользователя'
			/>
		</div>
	);
};

export default EmailInput;
