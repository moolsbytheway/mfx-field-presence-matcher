### Field presence matcher
#### mf-dynamic-form plugin

#### Usage
Use it in your dynamic-form spec in `visibleWhen`, `requiredWhen`, `disabledWhen`

#### Example:
```javascript
   new TextboxFormControl({
              key: 'field1',
              label: 'Field 1'
            }), 
   new TextboxFormControl({
      key: 'field2',
      label: 'Field 2',
      visibleWhen: [new FieldPresenceMatcherPlugin("field1")]
    }),
            
```

@Since mf-dynamic-form@2.0.0

