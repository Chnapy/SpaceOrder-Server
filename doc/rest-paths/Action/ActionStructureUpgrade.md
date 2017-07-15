# ActionStructureUpgrade
Prepare an upgrade of a structure.

## Path
`/action/structure/upgrade`

## Input parameters
| Name | Type | Conditions |
| --- | --- | --- |
| `token` | string | token |
| `id_structure` | number | serial |
| `type` | number |  | Type of the action (0: alone, 1: call) |
| `date?` | string |  date | Date when the action will begin (call) |
| `mo?` | number | greaterThan(0) | MO resources invested (call) |
| `ma?` | number | greaterThan(0) | MA resources invested (call) |

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
| 1513 | Type not found |
| 1514 | Not enough resources |
| 1516 | Date not accepted |
| 1521 | Structure not found |
| 1531 | Structure can not be upgrade |

---
Please check the **[README.md](../README.md)** of the rest-paths directory for the general properties.