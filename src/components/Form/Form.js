import React, { useContext } from "react";
import { Formik, useField, Form } from "formik";
import { Context as SearchContext } from "../../stateManagement/searchCardsContext";
import styled from "styled-components";

import { Button, Checkbox, FormControlLabel, Input } from "@material-ui/core";

const FieldContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 1rem;
`;
const FormContainerColumn = styled.div`
	justify-content: center;

	padding: 1rem;
`;

const FormContainerRow = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	padding: 1rem;
`;

const MyCheckBox = ({ label, ...props }) => {
	const [field] = useField(props);

	return <FormControlLabel {...field} control={<Checkbox />} label={label} />;
};

const MyTextField = ({ label, ...props }) => {
	const [field] = useField(props);

	return (
		<>
			<label style={{ display: "grid", padding: "1em" }}>
				{label}
				<Input {...field} {...props} />
			</label>
		</>
	);
};
const NewForm = () => {
	const { state, searchDatabase, resetSearch } = useContext(SearchContext);
	return (
		<FieldContainer>
			<Formik
				initialValues={{
					cardName: "",
					setName: "",
					colorId: "",
					cmc: "",
					typeLine: "",
					oracleText: "",
					colors: []
				}}
				onSubmit={async function(data, { setSubmitting }) {
					setSubmitting(true);
					await searchDatabase(data);
					setSubmitting(false);
				}}
			>
				{({ values, isSubmitting }) => (
					<Form>
						<FormContainerColumn>
							<MyTextField name='cardName' type='input' label='Card Name' />

							<MyTextField name='setName' type='input' label='Set Name' />

							<MyTextField name='colorId' type='input' label='Color Identity' />

							<MyTextField
								name='cmc'
								type='input'
								label='Converted Mana Cost'
							/>

							<MyTextField name='typeLine' label='Type Line' type='input' />

							<MyTextField name='oracleText' type='input' label='Oracle Text' />
						</FormContainerColumn>

						<FormContainerRow>
							<MyCheckBox
								name='colors'
								type='checkbox'
								value={`W`}
								label='White'
							/>
							<MyCheckBox
								name='colors'
								type='checkbox'
								value={`U`}
								label='Blue'
							/>
							<MyCheckBox
								name='colors'
								type='checkbox'
								value={`B`}
								label='Black'
							/>
							<MyCheckBox
								name='colors'
								type='checkbox'
								value={`R`}
								label='Red'
							/>
							<MyCheckBox
								name='colors'
								type='checkbox'
								value={`G`}
								label='Green'
							/>
						</FormContainerRow>
						<FieldContainer>
							<Button disabled={isSubmitting} type='submit'>
								submit
							</Button>
						</FieldContainer>
					</Form>
				)}
			</Formik>
		</FieldContainer>
	);
};

export default NewForm;
