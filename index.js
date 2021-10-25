"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FieldValueNotEmptyMatcher {
    constructor(fieldName, targetFormGroup) {
        this.fieldName = fieldName;
        this.targetFormGroup = targetFormGroup;
    }
    match(context) {
        const targetFormGroup = this.targetFormGroup || context.formGroup;
        const matched = this.fieldName && targetFormGroup.get(this.fieldName).value;
        return { matched: matched, fields: [this.fieldName], targetFormGroup: targetFormGroup };
    }
}
exports.default = FieldValueNotEmptyMatcher;
