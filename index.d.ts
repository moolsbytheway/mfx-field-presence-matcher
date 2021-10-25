import { ConditionMatcher, ConditionMatcherContext, ConditionMatcherResult } from 'mf-dynamic-form';
export default class FieldValueNotEmptyMatcher implements ConditionMatcher {
    fieldName: string;
    constructor(fieldName: string, targetFormGroup?: any);
    match(context: ConditionMatcherContext): ConditionMatcherResult;
}
