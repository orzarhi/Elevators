import { IdType } from '../../types';
import { ElevatorStatus } from './ElevatorStatus';

export class Elevator{
    protected _floorQueue: IdType[] = [];
    protected _currentPosition: number = 0;
    protected _status: ElevatorStatus = ElevatorStatus.IDLE

    get position(){
        return this._currentPosition
    }

    get status(){
        return this._status
    }

}