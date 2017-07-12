# MissionCreate
Création d'une mission

## Path
`/mission/create`

## Input parameters
| Name | Type | Conditions |
| --- | --- | --- |
| `token` | string | token |
| `name` | string | minLength(3), maxLength(32) |
| `content` | string | minLength(6), maxLength(2048) |
| `target` | array(number) | minLength(1), maxLength(340), content: serial |

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
Please check the **README.md** of the directory for the general properties.
