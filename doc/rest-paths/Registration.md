# Registration
Inscription

## Path
`/user/registration`

## Method
POST

## Input parameters
| Name | Type | Conditions |
| --- | --- | --- |
|`username` | string | minLength(3), maxLength(32), alphanum, noIsset
|`password` | string | minLength(6), maxLength(32), isStrong
|`email` | string | maxLength(128), isMail, noIsset

## Output

### Type
JSON

### Example success
```TypeScript
{
    success: true, 
    token: "efknsldfn1dq35de1sedsef1"
}
```

### Error codes
#### Template
112X

#### Codes
| Code | Description |
| ---: | :--- |
| 1121 | username already exist |
| 1122 | email already exist |
| 1123 | parameters do not meet the required format |

---
Please check the **README.md** of the directory for the general properties.
