import React from 'react';
import { defaultMemoize } from 'reselect';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quanitity } }) => (
	<div className="checkout-item">
		<div className="image-container">
			<img src={imageUrl} alt="item" />
		</div>
		<span className="name">{name}</span>
		<span className="quantity">{quanitity}</span>
		<span className="price">{price}</span>
		<dib className="remove-button">&#10005;</dib>
	</div>
);

export default CheckoutItem;
