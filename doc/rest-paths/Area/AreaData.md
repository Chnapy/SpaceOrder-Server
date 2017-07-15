# AreaData
Data of an area.

## Path
`/area/data`

## Input parameters
| Name | Type | Conditions | Description |
| --- | --- | --- | --- |
| `token` | string | token | Token of the connected user |
| `x` | number | greaterOrEqual(0) | Position X of the area |
| `y` | number | greaterOrEqual(0) | Position Y of the area |

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
            actions: [
                {
                    id_action: 2134,
                    id_action_static: 2,    //Attack
                    dates: {
                        predicted: "01/01/2017",
                        launch: "05/01/2017",
                        end?: "10/01/2017"
                    },
                    origin: {
                        id_faction: 32,
                        id_user: 489,
                        username: "Aubergine",
                        id_rank: 2,
                        avatar: "/489.jpg"
                    },
                    type: 1, //Alone or call
                    group?: [
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
                    ]
                },
                {
                    id_action: 2134,
                    id_action_static: 3,    //Defense
                    dates: {
                        predicted: "01/01/2017",
                        launch: "01/01/2017",
                        end?: "10/01/2017"
                    },
                    origin: {
                        id_faction: 32,
                        id_user: 489,
                        username: "Aubergine",
                        id_rank: 2,
                        avatar: "/489.jpg"
                    },
                    type: 1, //Alone or call
                    group?: [
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
                    ]
                }
            ]
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
Please check the **[README.md](../README.md)** of the rest-paths directory for the general properties.