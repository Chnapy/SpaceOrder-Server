# ActionJoin
Join an action.

## Path
`/action/join`

## Input parameters
| Name | Type | Conditions | Description |
| --- | --- | --- | --- |
| `token` | string | token | Token of the connected user |
| `id_action` | number | serial |
| `mi?` | number | greaterThan(0) | MI resources invested (call) |
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
184X

#### Codes
| Code | Description |
| ---: | :--- |
| 1813 | Type not found |
| 1814 | Not enough resources |
| 1816 | Date not accepted |
| 1821 | Structure not found |
| 1831 | Structure can not be upgrade |
| 1841 | Action not found |
| 1842 | Action can not be join |

---
Please check the **[README.md](../README.md)** of the rest-paths directory for the general properties.