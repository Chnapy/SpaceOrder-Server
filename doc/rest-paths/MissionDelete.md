# MissionDelete
Suppression d'une mission

## Path
`/mission/delete`

## Input parameters
| Name | Type | Conditions |
| --- | --- | --- |
| `token` | string | token |
| `id_missions` | array(number) | minLength(1), content: serial |

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
Please check the **README.md** of the directory for the general properties.
