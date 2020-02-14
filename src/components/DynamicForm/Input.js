import React, { memo, useContext } from "react";

import { FormDataContext } from "../../stateManagement/Context";
import styles from "./styles";
const Input = memo(props => {
	const context = useContext(FormDataContext);
	const { fieldId, fieldType } = props;
	const { formData, setState } = context;

	switch (fieldType) {
		case "text":
			return (
				<input
					type='text'
					id={fieldId}
					style={styles.textInput}
					onChange={event =>
						setState({
							[`${fieldId}`]: event.target.value
						})
					}
					value={formData[`${fieldId}`]}
				/>
			);

		default:
			return null;
	}
});

export default Input;
