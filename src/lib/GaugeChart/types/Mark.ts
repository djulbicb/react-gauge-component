export interface MarkLabel {
    hideMinMax: boolean;
    marks: Array<Mark>;
    valueConfig: MarkValueConfig;
    markerConfig: MarkerConfig;
}
export interface Mark {
    value: number;
    valueConfig?: MarkValueConfig;
    markerConfig?: MarkerConfig;
}
export interface MarkValueConfig {
    formatTextValue?: (value: any) => string;
    fontSize: number;
    fontColor: string;
    hide: boolean;
}
export interface MarkerConfig {
    char: string;
    charSize: number;
    charColor: string;
    hide: boolean;
}

const defaultMarkerConfig: MarkerConfig = {
    char: "_ ",
    charSize: 30,
    charColor: "#dedbd7",
    hide: false,
};

const defaultMarkValueConfig: MarkValueConfig = {
    formatTextValue: undefined,
    fontSize: 15,
    fontColor: '#dedbd7',
    hide: false,
};
const defaultMarkList: Mark[] = [];
export const defaultMarkLabel: MarkLabel = {
    hideMinMax: false,
    marks: defaultMarkList,
    valueConfig: defaultMarkValueConfig,
    markerConfig: defaultMarkerConfig
};