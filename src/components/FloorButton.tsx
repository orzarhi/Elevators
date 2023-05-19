import { FC } from "react";
import { IdType } from "../types";
import { FloorStatus } from "../logic/Floor";
import { capitalize } from "../utils";

interface FloorClickPayload {
	value: IdType;
	status: FloorStatus;
}
interface FloorButtonProps {
	value: IdType;
	onClick: (payload: FloorClickPayload) => unknown;
	status: FloorStatus;
}

export const FloorButton: FC<FloorButtonProps> = (props) => {
	return (
		<button
			onClick={() =>
				props.onClick({
					value: props.value,
					status: props.status,
				})
			}
		>
			{capitalize(props.status)}
		</button>
	);
};
