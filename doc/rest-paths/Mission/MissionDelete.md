# MissionDelete
Delete missions.

## Path
`/mission/delete`

## Input parameters
| Name | Type | Conditions | Description |
| --- | --- | --- | --- |
| `token` | string | token | Token of the connected user |
| `id_missions` | array(number) | minLength(1), content: serial | Desired missions by their ID |

## Output

### Example success
```TypeScript
{
    success: true
}
```

### Error codes
#### Template
132X

#### Codes
| Code | Description |
| ---: | :--- |
| 1311 | Some missions not found |

---
Please check the **[README.md](../README.md)** of the rest-paths directory for the general properties.
