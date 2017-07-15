# MapData
Data of the all map.

## Path
`/map/data`

## Input parameters
| Name | Type | Conditions | Description |
| --- | --- | --- | --- |
| `token` | string | token | Token of the connected user |

## Output

### Example success
```TypeScript
{
    success: true,
    data: [
        {
            location: {
                x: 12,
                y: 21
            },
            structures: [
                {
                    id_structure_static: 8,
                    children: [
                        {
                            id_structure_static: 21,
                            children: []
                        }
                    ]
                },
                {
                    id_structure_static: 8,
                    children: []
                }
            ]
        }
    ]
}
```

### Error codes
#### Template
140X

#### Codes
| Code | Description |
| ---: | :--- |

---
Please check the **[README.md](../README.md)** of the rest-paths directory for the general properties.