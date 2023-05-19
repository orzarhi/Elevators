import { IdType } from "../../types";
import { FloorStatus } from "./FloorStatus";

export class Floor {
	protected _value: IdType;
	protected _position: number;
	protected _status: FloorStatus = FloorStatus.IDLE;

	constructor(position: number, value: IdType) {
		this._value = value;
		this._position = position;
	}

	get status() {
		return this._status;
	}

	get value() {
		return this._value;
	}

	get position() {
		return this._position;
	}

	call() {
		if (this.status !== FloorStatus.IDLE) return;
		// call LoadBalancer and receive the time to wait
	}
}
