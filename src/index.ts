import {ConditionMatcher, ConditionMatcherContext, ConditionMatcherResult} from 'mf-dynamic-form';


export default class FieldValueNotEmptyMatcher implements ConditionMatcher {
    fieldName: string;
    targetFormGroup: any;

    constructor(fieldName: string, targetFormGroup?: any) {
        this.fieldName = fieldName;
        this.targetFormGroup = targetFormGroup;
    }

    match(context: ConditionMatcherContext): ConditionMatcherResult {

        const targetFormGroup: any = this.targetFormGroup || context.formGroup;

        const matched = this.fieldName && targetFormGroup.get(this.fieldName).value;

        return {matched: matched, fields: [this.fieldName], targetFormGroup: targetFormGroup} as ConditionMatcherResult;
    }
}
