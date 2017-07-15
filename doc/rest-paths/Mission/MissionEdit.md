# MissionEdit
Edit a mission.

## Path
`/mission/edit`

## Input parameters
| Name | Type | Conditions | Description |
| --- | --- | --- | --- |
| `token` | string | token | Token of the connected user |
| `id_mission` | number | serial | Desired mission by his ID |
| `content?` | string | minLength(6), maxLength(2048) | New content |
| `state?` | number |  | New state |
| `target?` | array(number) | minLength(1), maxLength(340), content: serial | New users targeted |

## Output

### Example success
```TypeScript
{
    success: true,
    mission: {
        id_mission: 563
    }
}
```

### Error codes
#### Template
131X

#### Codes
| Code | Description |
| ---: | :--- |
| 1301 | Users targeted are not all under your orders |
| 1311 | Mission not found |

---
Please check the **[README.md](../README.md)** of the rest-paths directory for the general properties.
