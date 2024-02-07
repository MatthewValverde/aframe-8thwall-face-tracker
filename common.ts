export const GAME_ID: string = 'fan-filter-cam';

//{{BRANCH}} replaced by CircleCI with proper value
let BRANCH = '{{BRANCH}}';

//{{BRANCH}} wasn't replaced make it debug
if (BRANCH.indexOf('{{BR') === 0) {
    BRANCH = 'develop-the-swamp';
}

const BUILD_NUM = '{{BUILD_NUM}}';
export const TEAM_NAMES = ['Cabin-A', 'Cabin-B'];

export {BRANCH, BUILD_NUM};

export interface IActiveState {
    id?: string;
    isStarted?: boolean;
    showLeaderboard?: boolean;
    countdown?: number;
}

export interface IMessages {
    [index: string]: string;
}

export interface IGameState {
    active?: IActiveState;
    startTime?: any;
    messages?: IMessages;
    countdownTime?: number;
}

export const EVENT_START_GAME: string = 'START_GAME';
export const EVENT_STOP_GAME: string = 'STOP_GAME';
export const EVENT_SHOW_LEADERS: string = 'SHOW_LEADERS';
export const EVENT_UPDATE_POINT: string = 'UPDATE_POINT';