# ActionCancel
Cancel an action if alone, or quit it if call.

## Path
`/action/cancel`

## Input parameters
| Name | Type | Conditions | Description |
| --- | --- | --- | --- |
| `token` | string | token | Token of the connected user |
| `id_action` | number | serial |

## Output

### Example success
```TypeScript
{
    success: true,
    action: {
        resources: {
            mi?: 123,
            mo?: 123,
            ma?: 123
        }
    }
}
```

### Error codes
#### Template
185X

#### Codes
| Code | Description |
| ---: | :--- |
| 1813 | Type not found |
| 1814 | Not enough resources |
| 1816 | Date not accepted |
| 1821 | Structure not found |
| 1831 | Structure can not be upgrade |
| 1841 | Action not found |
| 1851 | Action ca not be cancel |

---
Please check the **[README.md](../README.md)** of the rest-paths directory for the general properties.