# UserLogin
Connexion

## Path
`/user/login`

## Input parameters
| Name | Type | Conditions |
| --- | --- | --- |
|`username` | string | minLength(3), maxLength(32), alphanum
|`password` | string | minLength(6), maxLength(32)

## Output

### Example success
```TypeScript
{
    success : true,
    token : "efknsldfn1dq35de1sedsef1"
}
```

### Error codes
#### Template
110X

#### Codes
| Code | Description |
| ---: | :--- |
| 1101 | Username or password wrong |

---
Please check the **README.md** of the directory for the general properties.