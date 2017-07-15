# NoticeData
Data of notices.

## Path
`/notice/data`

## Input parameters
| Name | Type | Conditions | Description |
| --- | --- | --- | --- |
| `token` | string | token | Token of the connected user |
| `date_start?` | string | date | From this date |
| `date_end?` | string | date | Until this date |
| `id_users?` | array(number) | minLength(1), content: serial | From these users |
| `id_factions?` | array(number) | minLength(1), content: serial | From these factions |
| `id_actions?` | array(number) | minLength(1), content: serial | From thses static actions |

## Output

### Example success
```TypeScript
{
    success: true,
    data: [
        {
            date: "12/12/2017",
            id_action: 5,
            faction_origin: 25,
            id_user?: 93,
            id_faction?: 25
        },
        {
            date: "12/12/2017",
            id_action: 6,
            faction_origin: 25,
            id_type_launch?: 1,
            location?: {
                x: 12,
                y: 3
            }
        }
    ]
}
```

### Error codes
#### Template
160X

#### Codes
| Code | Description |
| ---: | :--- |

---
Please check the **[README.md](../README.md)** of the rest-paths directory for the general properties.