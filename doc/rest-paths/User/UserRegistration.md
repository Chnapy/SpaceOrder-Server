# UserRegistration
Registration of a new user.

## Path
`/user/registration`

## Input parameters
| Name | Type | Conditions |
| --- | --- | --- |
|`username` | string | minLength(3), maxLength(32), alphanum, noIsset |  |
|`password` | string | minLength(6), maxLength(32), isStrong |  |
|`email` | string | maxLength(128), isMail, noIsset |  |

## Output

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
Please check the **[README.md](../README.md)** of the rest-paths directory for the general properties.
