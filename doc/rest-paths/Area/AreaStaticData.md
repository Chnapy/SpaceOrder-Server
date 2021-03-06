# AreaStaticData
Static data of structures.

## Path
`/area/staticdata`

## Input parameters
| Name | Type | Conditions |
| --- | --- | --- |

## Output

### Example success
```TypeScript
{
    success: true,
    data: [
        {
            id_structure_static: 8,
            origin: 0,  //Natural, arti
            showMap: true,
            taken: true,
            canBeAttack: false,
            grades: [
                {
                    grade: 0, //Build
                    costs: {
                        mo: 50,
                        ma: 150
                    },
                    win: {
                        mo: 20,
                        vit: 25
                    },
                    rank_needed: 4
                },
                {
                    grade: 1, //Upgrade 1
                    costs: {
                        mo: 75,
                        ma: 200
                    },
                    win: {
                        mo: 30,
                        vit: 35
                    },
                    rank_needed: 3
                },
                {
                    grade: 2, //Upgrade 2
                    costs: {
                        mo: 100,
                        ma: 250
                    },
                    win: {
                        mo: 40,
                        vit: 45
                    },
                    rank_needed: 3
                }
            ],
            supports: [3, 6, 11]
        }
    ]
}
```

### Error codes
#### Template
154X

#### Codes
| Code | Description |
| ---: | :--- |

---
Please check the **[README.md](../README.md)** of the rest-paths directory for the general properties.