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
| 1003 | Server no responding |
| 1004 | User can not send the request |
| 1005 | User is not logged |
| 1006 | Token is wrong |
| 1007 | Parameters missing or don't respect the required format |
