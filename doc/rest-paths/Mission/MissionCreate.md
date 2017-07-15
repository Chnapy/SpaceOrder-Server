# MissionCreate
Create a mission.

## Path
`/mission/create`

## Input parameters
| Name | Type | Conditions | Description |
| --- | --- | --- | --- |
| `token` | string | token | Token of the connected user |
| `name` | string | minLength(3), maxLength(32) | Name of the mission |
| `content` | string | minLength(6), maxLength(2048) | Text content of the mission |
| `target` | array(number) | minLength(1), maxLength(340), content: serial | Users targeted by the mission |

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
130X

#### Codes
| Code | Description |
| ---: | :--- |
| 1301 | Users targeted are not all under your orders |

---
Please check the **[README.md](../README.md)** of the rest-paths directory for the general properties.
