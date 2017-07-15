# FactionData
Data of factions.

## Path
`/faction/data`

## Input parameters
| Name | Type | Conditions | Description |
| --- | --- | --- | --- |
| `token` | string | token | Token of the connected user |
| `id_factions` | array(number) | minLength(1), content: serial | Desired factions by their ID |

## Output

### Example success
```TypeScript
{
    success: true,
    data: [
        {
            id_faction: 31,
            name: "Faction du turfu",
            slogan: "On est trop loin",
            color: "#4488FF",
            nb_users: {
                actu: 34,
                total: 341
            },
            date_creation: "01/01/2017",
            hierarchy?: {
                id_user: 67,
                username: "Chnapy",
                id_rank: 1,
                avatar: "/67.jpg",
                bottom: [
                    {
                        id_user: 98,
                        username: "Patate",
                        id_rank: 2,
                        avatar: "/98.jpg",
                        bottom: [
                            {
                                id_user: 215,
                                username: "Tomate",
                                id_rank: 3,
                                avatar: "/215.jpg",
                            }
                        ]
                    },
                    {
                        id_user: 165,
                        username: "Courgette",
                        id_rank: 2,
                        avatar: "/165.jpg",
                    },
                    {
                        id_user: 128,
                        username: "Concombre",
                        id_rank: 2,
                        avatar: "/128.jpg",
                    }
                ]
            }
        }
    ]
}
```

### Error codes
#### Template
123X

#### Codes
| Code | Description |
| ---: | :--- |
| 1211 | Some factions not found |

---
Please check the **[README.md](../README.md)** of the rest-paths directory for the general properties.
