import React, { useState } from "react";
import React from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
	const [dataSubmit, setdataSubmit] = React.useState([]);
	const [errors, setErrors] = React.useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
	function handleFirstNameChange(event) {
		setFirstName(event.target.value);
	}

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
	function handleLastNameChange(event) {
		setLastName(event.target.value);
	}
	// Listen to the onsubmit event
	const handleSubmit = (event) => {
		event.preventDefault();
		// First Name is required
		if (firstName.length > 0) {
			const formData = { firstName, lastName };
			const nameData = [...dataSubmit, formData];
			// Create a copy of all the data sumitted
			setdataSubmit([...dataSubmit, nameData]);
			setdataSubmit(nameData);
			console.log(nameData);
			// Reset the input value to empty string after submit
			setFirstName("");
			setLastName("");
		} else {
			setErrors(["First Name is required"]);
		}
	};

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
	const handleSubmitnames = dataSubmit.map((data, index) => {
		return (
			<div key={index}>
				<p>
					{`${data.firstName} 
						${data.lastName}`}
				</p>
			</div>
		);
	});

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleFirstNameChange} value={firstName} />
				<input type="text" onChange={handleLastNameChange} value={lastName} />
				<button type="submit">Submit</button>
			</form>
			{/* Render Error Message */}
			{errors.length > 0 && (
				<div>
					{errors.map((error, index) => (
						<p key={index}>{error}</p>
					))}
				</div>
			)}

			<h3>Submissions</h3>
			{handleSubmitnames}
		</>
	);
}

export default Form;


