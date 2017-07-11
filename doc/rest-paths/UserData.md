# UserData


## Path
`/user/data`

## Input parameters
| Name | Type | Conditions |
| --- | --- | --- |
|`id_user` | number | greaterThan(0)

## Output

### Example success
```TypeScript
{
    success: true,
    data: {
        general: {
            username: "Chnapy", 
            email?: "chnapy@gmail.fr"
        },
        faction: {
            id_faction: 42
        },
        hierarchy: {
            id_rank: 3,
            top: {
                id_user: 489
            },
            bottom: [
                {
                    id_user: 974
                },
                {
                    id_user: 745
                },
                {
                    id_user: 124
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
}
```

### Error codes
#### Template
113X

#### Codes
| Code | Description |
| ---: | :--- |
| 1131 | user not found |

---
Please check the **README.md** of the directory for the general properties.