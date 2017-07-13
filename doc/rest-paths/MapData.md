# MapData
Données de la carte

## Path
`/map/data`

## Input parameters
| Name | Type | Conditions |
| --- | --- | --- |
| `token` | string | token |

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
Please check the **README.md** of the directory for the general properties.