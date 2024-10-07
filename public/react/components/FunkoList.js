import React from 'react';
import { Funko } from './Funko';

export const FunkoList = ({funkos}) => {
	return <>
		{
			funkos.map((funko, idx) => {
				return <Funko funko={funko} key={idx} />
			})
		}
	</>
} 
