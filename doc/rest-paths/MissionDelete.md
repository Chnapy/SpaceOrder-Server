# MissionDelete
Suppression d'une mission

## Path
`/mission/delete`

## Input parameters
| Name | Type | Conditions |
| --- | --- | --- |
| `token` | string | token |
| `id_mission` | number | serial |

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
| 1311 | Mission not found |

---
Please check the **README.md** of the directory for the general properties.
