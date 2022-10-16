import React from "react";
import "../assets/css/help.css";

export default function Help() {
	const questions = [
		{
			question: "Can I book tickets with the app?",
			answer:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo enim ratione dicta ipsa numquam harum provident necessitatibus praesentium ea debitis nulla laborum rem autem sunt, incidunt dignissimos eius, eveniet odit commodi corporis reprehenderit? Saepe, eaque aperiam. Libero adipisci alias incidunt necessitatibus tenetur, quo perspiciatis hic quod quaerat dolores quisquam magnam corrupti eius optio beatae ipsum ab. Ratione, inventore magni.",
		},
		{
			question: "Can I set multiple reminders?",
			answer:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo enim ratione dicta ipsa numquam harum provident necessitatibus praesentium ea debitis nulla laborum rem autem sunt, incidunt dignissimos eius, eveniet odit commodi corporis reprehenderit? Saepe, eaque aperiam. Libero adipisci alias incidunt necessitatibus tenetur, quo perspiciatis hic quod quaerat dolores quisquam magnam corrupti eius optio beatae ipsum ab. Ratione, inventore magni.",
		},
		{
			question: "How frequently are the details updated?",
			answer:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo enim ratione dicta ipsa numquam harum provident necessitatibus praesentium ea debitis nulla laborum rem autem sunt, incidunt dignissimos eius, eveniet odit commodi corporis reprehenderit? Saepe, eaque aperiam. Libero adipisci alias incidunt necessitatibus tenetur, quo perspiciatis hic quod quaerat dolores quisquam magnam corrupti eius optio beatae ipsum ab. Ratione, inventore magni.",
		},
		{
			question: "How far can I rely on this app?",
			answer:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo enim ratione dicta ipsa numquam harum provident necessitatibus praesentium ea debitis nulla laborum rem autem sunt, incidunt dignissimos eius, eveniet odit commodi corporis reprehenderit? Saepe, eaque aperiam. Libero adipisci alias incidunt necessitatibus tenetur, quo perspiciatis hic quod quaerat dolores quisquam magnam corrupti eius optio beatae ipsum ab. Ratione, inventore magni.",
		},
		{
			question: "Are the flight route accurate?",
			answer:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo enim ratione dicta ipsa numquam harum provident necessitatibus praesentium ea debitis nulla laborum rem autem sunt, incidunt dignissimos eius, eveniet odit commodi corporis reprehenderit? Saepe, eaque aperiam. Libero adipisci alias incidunt necessitatibus tenetur, quo perspiciatis hic quod quaerat dolores quisquam magnam corrupti eius optio beatae ipsum ab. Ratione, inventore magni.",
		},
		{
			question: "Is there any helpline contact details?",
			answer:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo enim ratione dicta ipsa numquam harum provident necessitatibus praesentium ea debitis nulla laborum rem autem sunt, incidunt dignissimos eius, eveniet odit commodi corporis reprehenderit? Saepe, eaque aperiam. Libero adipisci alias incidunt necessitatibus tenetur, quo perspiciatis hic quod quaerat dolores quisquam magnam corrupti eius optio beatae ipsum ab. Ratione, inventore magni.",
		},
		{
			question: "How will this app benefit us?",
			answer:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo enim ratione dicta ipsa numquam harum provident necessitatibus praesentium ea debitis nulla laborum rem autem sunt, incidunt dignissimos eius, eveniet odit commodi corporis reprehenderit? Saepe, eaque aperiam. Libero adipisci alias incidunt necessitatibus tenetur, quo perspiciatis hic quod quaerat dolores quisquam magnam corrupti eius optio beatae ipsum ab. Ratione, inventore magni.",
		},
		{
			question: "Will I get infos on flight cancellation?",
			answer:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo enim ratione dicta ipsa numquam harum provident necessitatibus praesentium ea debitis nulla laborum rem autem sunt, incidunt dignissimos eius, eveniet odit commodi corporis reprehenderit? Saepe, eaque aperiam. Libero adipisci alias incidunt necessitatibus tenetur, quo perspiciatis hic quod quaerat dolores quisquam magnam corrupti eius optio beatae ipsum ab. Ratione, inventore magni.",
		},
		{
			question: "Is this app paid or free?",
			answer:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo enim ratione dicta ipsa numquam harum provident necessitatibus praesentium ea debitis nulla laborum rem autem sunt, incidunt dignissimos eius, eveniet odit commodi corporis reprehenderit? Saepe, eaque aperiam. Libero adipisci alias incidunt necessitatibus tenetur, quo perspiciatis hic quod quaerat dolores quisquam magnam corrupti eius optio beatae ipsum ab. Ratione, inventore magni.",
		},
		{
			question: "Can I use this app on other OS or web?",
			answer:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo enim ratione dicta ipsa numquam harum provident necessitatibus praesentium ea debitis nulla laborum rem autem sunt, incidunt dignissimos eius, eveniet odit commodi corporis reprehenderit? Saepe, eaque aperiam. Libero adipisci alias incidunt necessitatibus tenetur, quo perspiciatis hic quod quaerat dolores quisquam magnam corrupti eius optio beatae ipsum ab. Ratione, inventore magni.",
		},
	];

	return (
		<div class="container">
			<h1>Frequently Asked Questions</h1>
			{questions.map((question, index) => {
				return (
					<details className={index}>
						<summary>{question.question}</summary>
						<div>
							<p>{question.answer}</p>
						</div>
					</details>
				);
			})}
		</div>
	);
}
