# ChatData
Messages from chat.

## Path
`/chat/data`

## Input parameters
| Name | Type | Conditions | Description |
| --- | --- | --- | --- |
| `token` | string | token | Token of the connected user |
| `date_start?` | string | date | From this date |
| `date_end?` | string | date | Until this date |
| `channels?` | array(number) | minLength(1) | Posted in these channels |
| `from?` | array(number) | minLength(1), content: serial | From these users |
| `to?` | array(number) | minLength(1), content: serial | To these users (private messages) |

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
Please check the **[README.md](../README.md)** of the rest-paths directory for the general properties.