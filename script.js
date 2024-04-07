

const transportationChoices = {
	"0.5": { name: "Car (10 miles per day)", description: "A car driven 10 miles per day produces approximately 0.5 metric tons of CO2 emissions per year." },
	"0.1": { name: "Bus (10 miles per day)", description: "A bus used for a 10-mile commute produces approximately 0.1 metric tons of CO2 emissions per year." },
	"0": { name: "Bike or Walk (10 miles per day)", description: "Biking or walking for a 10-mile commute produces approximately 0 metric tons of CO2 emissions per year." }
};

const dietChoices = {
	"1.5": { name: "Meat-based diet", description: "A meat-based diet produces approximately 1.5 metric tons of CO2 emissions per year." },
	"0.5": { name: "Vegetarian diet", description: "A vegetarian diet produces approximately 0.5 metric tons of CO2 emissions per year." },
	"0": { name: "Vegan diet", description: "A vegan diet produces approximately 0 metric tons of CO2 emissions per year." }
};

const homeEnergyChoices = {
	"0.5": { name: "Electricity and gas (average usage)", description: "The average household in the US produces approximately 0.5 metric tons of CO2 emissions per year from electricity and gas usage." },
	"0.25": { name: "Electricity only (low usage)", description: "A household that uses only electricity and has low usage produces approximately 0.25 metric tons of CO2 emissions per year." },
	"0.75": { name: "Gas only (high usage)", description: "A household that uses only gas and has high usage produces approximately 0.75 metric tons of CO2 emissions per year." }
};

const calculateButton = document.getElementById("calculate");
const resultsDiv = document.getElementById("results");

calculateButton.addEventListener("click", function() {
	const transportation = parseFloat(document.getElementById("transportation").value);
	const diet = parseFloat(document.getElementById("diet").value);
	const homeEnergy = parseFloat(document.getElementById("home-energy").value);
	const totalCarbonEmissions = transportation + diet + homeEnergy;
	const totalCarbonEmissionsRounded = totalCarbonEmissions.toFixed(2);
	const carbonEmissionsDescription = `Your estimated carbon footprint is ${totalCarbonEmissionsRounded} metric tons of CO2 emissions per year.`;
	const carbonFootprintResults = `
		<h2>Your Carbon Footprint</h2>
		<p>${carbonEmissionsDescription}</p>
		<p>This is how your carbon footprint breaks down:</p>
		<ul>
			<li><strong>Transportation:</strong> ${transportation} metric tons of CO2 emissions per year</li>
			<li><strong>Diet:</strong> ${diet} metric tons of CO2 emissions per year</li>
			<li><strong>Home Energy:</strong> ${homeEnergy} metric tons of CO2 emissions per year</li>
		</ul>
	`;
	resultsDiv.innerHTML = carbonFootprintResults;
});






