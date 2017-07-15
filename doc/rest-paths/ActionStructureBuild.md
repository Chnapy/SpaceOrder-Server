# ActionStructureBuild
Construction d'une structure

## Path
`/action/structure/build`

## Input parameters
| Name | Type | Conditions | Description |
| --- | --- | --- | --- |
| `token` | string | token | Token of the connected user |
| `x` | number | greaterOrEqual(0) | Position X of the area |
| `y` | number | greaterOrEqual(0) | Position Y of the area |
| `type` | number |  | Type of the action (0: alone, 1: call) |
| `date?` | string |  date | Date when the action will begin (call) |
| `support` | number | serial | Structure (no static) which will support the new structure |
| `static` | number | serial | Static structure to be build |
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
151X

#### Codes
| Code | Description |
| ---: | :--- |
| 1501 | Area not found |
| 1511 | Support structure not found |
| 1512 | Static structure not found |
| 1513 | Type not found |
| 1514 | Support and static are incompatible |
| 1515 | Not enough resources |

---
Please check the **README.md** of the directory for the general properties.