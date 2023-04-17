
{
	const calculateResault = (amount, currency) => {
		const EUR = 4.6721;
		const USD = 4.3076;
		switch (currency) {
			case "USD":
				return amount / EUR;


			case "EUR":
				return amount / USD;

		}
	};
	const updateResultText = (amount, currency, result) => {
		const resultElement = document.querySelector(".result-js");
		resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
	}

	const onFormSubmit = (event) => {
		event.preventDefault();


		const currencyElement = document.querySelector(".currency-js");
		const amountElement = document.querySelector(".amount-js");

		const amount = +amountElement.value;
		const currency = currencyElement.value;

		const result = calculateResault(amount, currency);

		updateResultText(amount, currency, result);
	};

	const init = () => {

		const formElement = document.querySelector(".form-js");

		formElement.addEventListener("submit", onFormSubmit);
	};

	init();

}