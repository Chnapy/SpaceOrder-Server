# UserRegistration
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
| 1121 | Username already exist |
| 1122 | Email already exist |

---
Please check the **README.md** of the directory for the general properties.
