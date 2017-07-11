# README
All paths of this directory follow these properties.

## Method
POST

## Output

### Type
JSON

### Error codes
```TypeScript
{
    success: false, 
    errorCode : #code
}
```
| Code | Description |
| ---: | :--- |
| 1000 | Unhandled error |
| 1001 | Request not recognized |
| 1002 | Request no longer accepted |
| 1003 | Server no longer responding |
| 1004 | Client can't send the request |