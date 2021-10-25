### Field value presence matcher
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
      visibleWhen: [new FieldValueNotEmptyMatcher("field1")]
    })
            
```

#### Example with external FormGroup:
```javascript

    externalFormGroup = new FormGroup({
        firstName: new FormControl('Ahmed')
    });


    new TextboxFormControl({
        key: 'field1',
        label: 'Field 1'
    }),
        new TextboxFormControl({
            key: 'field2',
            label: 'Field 2',
            visibleWhen: [new FieldValueNotEmptyMatcher("firstName", externalFormGroup)]
        })
            
```

@Since mf-dynamic-form@2.3.0

