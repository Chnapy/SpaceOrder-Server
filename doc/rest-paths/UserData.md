# UserData
Données d'un utilisateur

## Path
`/user/data`

## Input parameters
| Name | Type | Conditions |
| --- | --- | --- |
| `token` | string | token |
|`id_users` | array(number) | minLength(1), content: serial |

## Output

### Example success
```TypeScript
{
    success: true,
    data: [
        {
            id_user: 123,
            general: {
                username: "Chnapy", 
                email?: "chnapy@gmail.fr",
                id_rank: 3,
                avatar: "/123.jpg",
                date_register: "01/01/2017",
                date_last_activity: "03/01/2017"
            },
            faction: {
                id_faction: 42
            },
            hierarchy: {
                top: {
                    id_user: 489,
                    username: "Aubergine",
                    id_rank: 2,
                    avatar: "/489.jpg"
                },
                bottom: [
                    {
                        id_user: 974,
                        username: "Tomate",
                        id_rank: 3,
                        avatar: "/974.jpg"
                    },
                    {
                        id_user: 745,
                        username: "PoisChiche",
                        id_rank: 3,
                        avatar: "/745.jpg"
                    },
                    {
                        id_user: 124,
                        username: "Camembert",
                        id_rank: 3,
                        avatar: "/124.jpg"
                    }
                ]
            },
            resources?: {
                mo: {
                    actu: 123,
                    total: 324
                },
                ma: {
                    actu: 268
                },
                mi: {
                    actu: 167,
                    total: 167
                }
            },
            missions?: [
                {
                    id_mission: 458
                },
                {
                    id_mission: 591
                }
            ]
        }
    ]
}
```

### Error codes
#### Template
113X

#### Codes
| Code | Description |
| ---: | :--- |
| 1131 | Some users not found |

---
Please check the **README.md** of the directory for the general properties.