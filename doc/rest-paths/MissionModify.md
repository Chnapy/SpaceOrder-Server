# MissionModify
Création d'une mission

## Path
`/mission/modify`

## Input parameters
| Name | Type | Conditions |
| --- | --- | --- |
| `token` | string | token |
| `id_mission` | number | serial |
| `content?` | string | minLength(6), maxLength(2048) |
| `state?` | number |  |
| `target?` | array(number) | minLength(1), maxLength(340), content: serial |

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
Please check the **README.md** of the directory for the general properties.
