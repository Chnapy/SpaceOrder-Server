# ActionStructureBuild
Prepare a build of a structure.

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
    success: true,
    action: {
        id_action: 1234,
        id_structure: 823
    }
}
```

### Error codes
#### Template
181X

#### Codes
| Code | Description |
| ---: | :--- |
| 1501 | Area not found |
| 1811 | Support structure not found |
| 1812 | Static structure not found |
| 1813 | Type not found |
| 1814 | Support and static are incompatible |
| 1815 | Not enough resources |
| 1816 | Date not accepted |

---
Please check the **[README.md](../README.md)** of the rest-paths directory for the general properties.