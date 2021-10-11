import { ConditionMatcher, ConditionMatcherContext, ConditionMatcherResult } from 'mf-dynamic-form';
export declare class FieldPresenceMatcherPlugin implements ConditionMatcher {
    fieldName: string;
    constructor(fieldName: string);
    match(context: ConditionMatcherContext): ConditionMatcherResult;
}
