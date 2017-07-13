# AreaRepair
Réparation d'une structure

## Path
`/area/repair`

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
        state: 2,
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
152X

#### Codes
| Code | Description |
| ---: | :--- |
| 1501 | Area not found |
| 1521 | Area can not be repair |
| 1514 | Not enough resources |

---
Please check the **README.md** of the directory for the general properties.