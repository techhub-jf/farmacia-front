export class FormSelectOptions {
    label:string;
    value:any;
    constructor(_label: string, _value:any) {
        this.label = _label;
        this.value = _value;
    }
}

export function generateId() {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}