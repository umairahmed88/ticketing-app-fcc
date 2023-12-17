"use client";

import React, { useState } from "react";

const TicketForm = () => {
	const startingTicketData = {
		title: "",
		description: "",
		priority: 1,
		progress: "",
		status: "not started",
		category: "Hardware Problem",
	};

	const [formData, setFormData] = useState(startingTicketData);

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submitted");
	};

	return (
		<div className=' flex justify-center'>
			<form
				className=' flex flex-col gap-3 w-1/2'
				method='post'
				onSubmit={handleSubmit}
			>
				Create Your Ticket
				<label>Title</label>
				<input
					id='title'
					name='title'
					type='text'
					onChange={handleChange}
					required
					value={formData.title}
				/>
				<label>Description</label>
				<textarea
					id='description'
					name='description'
					onChange={handleChange}
					required
					value={formData.description}
					rows='5'
				/>
				<label>Category</label>
				<select
					name='category'
					value={formData.category}
					onChange={handleChange}
					id=''
				>
					<option value='Hardware Problem'>Hardware Problem</option>
					<option value='Software Problem'>Software Problem</option>
					<option value='Project'>Project</option>
				</select>
				<label>Priority</label>
				<div className=''>
					<input
						type='radio'
						id='priority-1'
						name='priority'
						onChange={handleChange}
						value={1}
						checked={formData.priority == 1}
					/>
					<label>1</label>
					<input
						type='radio'
						id='priority-2'
						name='priority'
						onChange={handleChange}
						value={2}
						checked={formData.priority == 2}
					/>
					<label>2</label>
					<input
						type='radio'
						id='priority-3'
						name='priority'
						onChange={handleChange}
						value={3}
						checked={formData.priority == 3}
					/>
					<label>3</label>
					<input
						type='radio'
						id='priority-4'
						name='priority'
						onChange={handleChange}
						value={4}
						checked={formData.priority == 4}
					/>
					<label>4</label>
					<input
						type='radio'
						id='priority-5'
						name='priority'
						onChange={handleChange}
						value={5}
						checked={formData.priority == 5}
					/>
					<label>5</label>
				</div>
				<label>Progress</label>
				<input
					type='range'
					name='progress'
					value={formData.progress}
					id='progress'
					min='0'
					max='100'
					onChange={handleChange}
				/>
				<label>Status</label>
				<select name='status' value={formData.status} onChange={handleChange}>
					<option value='not started'>Not Started</option>
					<option value='started'>Started</option>
					<option value='done'>Done</option>
				</select>
				<input type='submit' className='btn' value='Create Ticket' />
			</form>
		</div>
	);
};

export default TicketForm;
