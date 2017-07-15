# FactionLeave
Leave a faction.

## Path
`/faction/leave`

## Input parameters
| Name | Type | Conditions | Description |
| --- | --- | --- | --- |
| `token` | string | token | Token of the connected user |

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
Please check the **[README.md](../README.md)** of the rest-paths directory for the general properties.
