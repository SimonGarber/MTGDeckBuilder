import React, { memo } from "react";

import { fields } from "../DynamicForm/formData";

import Input from "./Input";
import styles from "./styles";

const Body = memo(() => {
	return (
		<div style={styles.body}>
			{fields.map(field => {
				const { fieldId, fieldName } = field;

				return (
					<div style={styles.formRow} key={fieldId}>
						<label htmlFor={fieldId} style={styles.rowLabel}>
							{fieldName}
						</label>
						<Input {...field} />
					</div>
				);
			})}
		</div>
	);
});

export default Body;
