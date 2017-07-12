# FactionLeave
Quitter sa faction

## Path
`/faction/leave`

## Input parameters
| Name | Type | Conditions |
| --- | --- | --- |
| `token` | string | noEmpty, alphanum |

## Output

### Example success
```TypeScript
{
    success: true
}
```

### Error codes
#### Template
122X

#### Codes
| Code | Description |
| ---: | :--- |
| 1221 | User is not in a faction |

---
Please check the **README.md** of the directory for the general properties.
