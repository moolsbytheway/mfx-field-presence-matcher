import { ConditionMatcher, ConditionMatcherContext, ConditionMatcherResult } from 'mf-dynamic-form';
export default class FieldValueNotEmptyMatcher implements ConditionMatcher {
    fieldName: string;
    targetFormGroup: any;
    constructor(fieldName: string, targetFormGroup?: any);
    match(context: ConditionMatcherContext): ConditionMatcherResult;
}
