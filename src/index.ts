import {ConditionMatcher, ConditionMatcherContext, ConditionMatcherResult} from 'mf-dynamic-form';


export default class FieldValueNotEmptyMatcher implements ConditionMatcher {
    fieldName: string;

    constructor(fieldName: string) {
        this.fieldName = fieldName;
    }

    match(context: ConditionMatcherContext): ConditionMatcherResult {

        const matched = this.fieldName && context.formGroup.get(this.fieldName).value;

        return {matched: matched, fields: [this.fieldName]} as ConditionMatcherResult;
    }
}
