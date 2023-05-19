import { FC, useMemo, useRef } from "react";
import { useCssVariable } from "../../hooks";
import { iterateNumerical } from "../../utils";
import "./elevator-grid.scss";

interface ElevatorGridProps {
	levels: number;
	elevators: number;
}

export const ElevatorGrid: FC<ElevatorGridProps> = ({ levels, elevators }) => {
	const gridRef = useRef<HTMLDivElement>(null);

	const cells = useMemo(
		() =>
			iterateNumerical(levels, (l) =>
				iterateNumerical(elevators, (e) => (
					<div className="overlay-cell" key={`${l}-${e}`}></div>
				))
			).flat(),
		[elevators, levels]
	);

	useCssVariable(gridRef, "levels", () => levels.toString(), [levels]);

	useCssVariable(gridRef, "elevators", () => elevators.toString(), [
		elevators,
	]);

	return (
		<div className="elevator-grid" ref={gridRef}>
			<div className="overlay">{cells}</div>
		</div>
	);
};
