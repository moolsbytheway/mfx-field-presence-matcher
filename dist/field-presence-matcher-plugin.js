"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldPresenceMatcherPlugin = void 0;
class FieldPresenceMatcherPlugin {
    constructor(fieldName) {
        this.fieldName = fieldName;
    }
    match(context) {
        const matched = this.fieldName && context.formGroup.get(this.fieldName).value;
        return { matched: matched, fields: [this.fieldName] };
    }
}
exports.FieldPresenceMatcherPlugin = FieldPresenceMatcherPlugin;
