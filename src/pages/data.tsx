import { useState, useEffect } from 'react';

export default function data() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [data, setData] = useState([]);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		// Fetch data from an API
		fetch('https://www.goodreturns.in/src/gold_silver_rates.php?cmd=gold_rates_4_graph&__token=X435rt78&city=jaipur&callback=jQuery19103302749524144587_1679614933953&_=1679614933954')
			.then((response) => response.json())
			.then((data) => {
				// Update state with the fetched data
				setData(data[0]);
			});
	}, []); // Only run once on component mount

  console.log(data[0]);
  
	return (
		<div>
			hello
		</div>
	);
}
