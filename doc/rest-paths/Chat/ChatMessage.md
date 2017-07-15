# ChatMessage
Send a message to the chat.

## Path
`/chat/message`

## Input parameters
| Name | Type | Conditions | Description |
| --- | --- | --- | --- |
| `token` | string | token | Token of the connected user |
| `channel` | number | Channel where to post |
| `to?` | number | serial | User to send the message to (private message) |

## Output

### Example success
```TypeScript
{
    success: true,
    message: {
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
    }
}
```

### Error codes
#### Template
171X

#### Codes
| Code | Description |
| ---: | :--- |
| 1711 | Channel not found |
| 1712 | Target user not found |

---
Please check the **[README.md](../README.md)** of the rest-paths directory for the general properties.