# AreaUpgrade
Amélioration d'une structure

## Path
`/area/upgrade`

## Input parameters
| Name | Type | Conditions |
| --- | --- | --- |
| `token` | string | token |
| `id_structure` | number | serial |

## Output

### Example success
```TypeScript
{
    success: true,
    structure: {
        id_structure: 427,
        id_structure_static: 8,
        date_build: "02/01/2017",
        state: 3,
        date_end: "15/01/2017",
        life: {
            actu: 75,
            total: 100
        },
        grade: 2
    }
}
```

### Error codes
#### Template
153X

#### Codes
| Code | Description |
| ---: | :--- |
| 1501 | Area not found |
| 1531 | Area can not be upgrade |
| 1514 | Not enough resources |

---
Please check the **README.md** of the directory for the general properties.