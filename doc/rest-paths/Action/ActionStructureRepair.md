# ActionStructureRepair
Prepare a repair of a structure.

## Path
`/action/structure/repair`

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
    success: true
}
```

### Error codes
#### Template
152X

#### Codes
| Code | Description |
| ---: | :--- |
| 1513 | Type not found |
| 1514 | Not enough resources |
| 1516 | Date not accepted |
| 1521 | Structure not found |
| 1522 | Structure can not be repair |

---
Please check the **README.md** of the directory for the general properties.