# ChatData
Données du chat

## Path
`/chat/data`

## Input parameters
| Name | Type | Conditions |
| --- | --- | --- |
| `token` | string | token |
| `date_start?` | string | date |
| `date_end?` | string | date |
| `channels?` | array(number) | minLength(1) |
| `from?` | array(number) | minLength(1), content: serial |
| `to?` | array(number) | minLength(1), content: serial |

## Output

### Example success
```TypeScript
{
    success: true,
    data: [
        {
            date: "12/12/2017",
            id_message: 5,
            from: {
                id_user: 29,
                username: "Aubergine",
                id_rank: 2,
                avatar: "/489.jpg"
            },
            channel: 2,
            content: "coucou"
        },
        {
            date: "12/12/2017",
            id_message: 5,
            from: {
                id_user: 29,
                username: "Aubergine",
                id_rank: 2,
                avatar: "/489.jpg"
            },
            to?: {
                id_user: 974,
                username: "Tomate",
                id_rank: 3,
                avatar: "/974.jpg"
            },
            channel: 4,
            content: "coucou"
        }
    ]
}
```

### Error codes
#### Template
170X

#### Codes
| Code | Description |
| ---: | :--- |

---
Please check the **README.md** of the directory for the general properties.