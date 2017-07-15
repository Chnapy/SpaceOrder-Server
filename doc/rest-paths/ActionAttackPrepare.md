# ActionAttackPrepare
Prepare an attack on an area.

## Path
`/action/attack/prepare`

## Input parameters
| Name | Type | Conditions | Description |
| --- | --- | --- | --- |
| `token` | string | token | Token of the connected user |
| `x` | number | greaterOrEqual(0) | Position X of the area |
| `y` | number | greaterOrEqual(0) | Position Y of the area |
| `type` | number |  | Type of the action (0: alone, 1: call) |
| `date?` | string |  date | Date when the action will begin (call) |
| `mi` | number | greaterThan(0) | MI resources invested |

## Output

### Example success
```TypeScript
{
    success: true
}
```

### Error codes
#### Template
180X

#### Codes
| Code | Description |
| ---: | :--- |
| 1501 | Area not found |
|  |  |

---
Please check the **README.md** of the directory for the general properties.