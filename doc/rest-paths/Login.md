# Login
Connexion

## Path
`/user/login`

## Method
POST

## Input parameters
| Name | Type | Conditions |
| --- | --- | --- |
|`username` | string | minLength(3), maxLength(32), alphanum
|`password` | string | minLength(6), maxLength(32)

## Output

### Type
JSON

### Example
```JSON
{"success" : true, "token" : "efknsldfn1dq35de1sedsef1"}
{"success": false, "errorCode" : 1001}
```

### Error codes
| Code | Description |
| ---: | :--- |
| 1001 | Username or password wrong |
