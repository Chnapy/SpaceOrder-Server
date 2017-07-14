# MissionData
Données d'une mission

## Path
`/mission/data`

## Input parameters
| Name | Type | Conditions |
| --- | --- | --- |
| `token` | string | token |
| `id_missions` | array(number) | minLength(1), content: serial |

## Output

### Example success
```TypeScript
{
    success: true,
    data: [
        {
            id_mission: 563,
            name: "Mission impossible",
            content: "Votre mission si vous l'acceptez...",
            state: 2,
            author: {
                id_user: 98,
                username: "Patate",
                id_rank: 2,
                avatar: "/98.jpg"
            },
            target: [
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
    ]
}
```

### Error codes
#### Template
133X

#### Codes
| Code | Description |
| ---: | :--- |
| 1311 | Some missions not found |

---
Please check the **README.md** of the directory for the general properties.
