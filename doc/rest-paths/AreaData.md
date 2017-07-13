# AreaData
Données d'une zone

## Path
`/area/data`

## Input parameters
| Name | Type | Conditions |
| --- | --- | --- |
| `token` | string | token |
| `x` | number | greaterOrEqual(0) |
| `y` | number | greaterOrEqual(0) |

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
            name: "BF21",
            owner?: {
                id_faction: 32,
                id_user: 489,
                username: "Aubergine",
                id_rank: 2,
                avatar: "/489.jpg"
            },
            structures: [
                {
                    id_structure: 427,
                    id_structure_static: 8,
                    name: "BF21-P1",
                    date_build: "01/01/2017",
                    grade: 0,
                    potential_mo: 8.2,
                    state: 0,   //Construction, etc
                    children: [
                        {
                            id_structure: 427,
                            id_structure_static: 8,
                            date_build: "02/01/2017",
                            life: {
                                actu: 75,
                                total: 100
                            },
                            grade: 2
                        }
                    ]
                }
            ],
            attack?: {
                dates: {
                    predicted: "01/01/2017",
                    launch?: "05/01/2017",
                    end?: "10/01/2017"
                },
                origin: {
                    id_faction: 32,
                    id_user: 489,
                    username: "Aubergine",
                    id_rank: 2,
                    avatar: "/489.jpg"
                },
                type: 1, //Seul ou appel
                attack_group?: [
                    {
                        id_user: 489,
                        username: "Aubergine",
                        id_rank: 2,
                        avatar: "/489.jpg",
                        date_join: "01/01/2017",
                        mi: 132
                    },
                    {
                        id_user: 489,
                        username: "Aubergine",
                        id_rank: 2,
                        avatar: "/489.jpg",
                        date_join: "03/01/2017",
                        mi: 132
                    }
                ],
                defense_group?: [
                    {
                        id_user: 89,
                        username: "Aubergine",
                        id_rank: 2,
                        avatar: "/489.jpg",
                        date_join: "01/01/2017",
                        mi: 132
                    },
                    {
                        id_user: 29,
                        username: "Aubergine",
                        id_rank: 2,
                        avatar: "/489.jpg",
                        date_join: "03/01/2017",
                        mi: 132
                    }
                ]
            }
        }
    ]
}
```

### Error codes
#### Template
150X

#### Codes
| Code | Description |
| ---: | :--- |
| 1501 | Area not found |

---
Please check the **README.md** of the directory for the general properties.