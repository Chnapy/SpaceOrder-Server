# ActionStructureUpgrade
Prepare an upgrade of a structure.

## Path
`/action/structure/upgrade`

## Input parameters
| Name | Type | Conditions | Description |
| --- | --- | --- | --- |
| `token` | string | token | Token of the connected user |
| `id_structure` | number | serial | ID of the structure |
| `type` | number |  | Type of the action (0: alone, 1: call) |
| `date?` | string |  date | Date when the action will begin (call) |
| `mo?` | number | greaterThan(0) | MO resources invested (call) |
| `ma?` | number | greaterThan(0) | MA resources invested (call) |

## Output

### Example success
```TypeScript
{
    success: true,
    id_action: 1234
}
```

### Error codes
#### Template
183X

#### Codes
| Code | Description |
| ---: | :--- |
| 1813 | Type not found |
| 1814 | Not enough resources |
| 1816 | Date not accepted |
| 1821 | Structure not found |
| 1831 | Structure can not be upgrade |

---
Please check the **[README.md](../README.md)** of the rest-paths directory for the general properties.