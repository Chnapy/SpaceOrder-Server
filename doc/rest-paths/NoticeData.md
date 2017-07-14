# NoticeData
Les notifications

## Path
`/notice/data`

## Input parameters
| Name | Type | Conditions |
| --- | --- | --- |
| `token` | string | token |
| `date_start?` | string | date |
| `date_end?` | string | date |
| `id_users?` | array(number) | minLength(1), content: serial |
| `id_factions?` | array(number) | minLength(1), content: serial |
| `id_actions?` | array(number) | minLength(1), content: serial |

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
Please check the **README.md** of the directory for the general properties.