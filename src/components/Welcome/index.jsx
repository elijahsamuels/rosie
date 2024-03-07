import React from 'react'
import Rosie from '../../images/Rosie2.png'
import './styles.css'

const Welcome = () => {
	return (
		<div className='welcome-container'>Welcome
			<img src={Rosie} alt="Rosie" className='welcomePhoto' />
		</div>
	)
}

export default Welcome