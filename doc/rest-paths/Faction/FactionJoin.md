# FactionJoin
Join a faction.

## Path
`/faction/join`

## Input parameters
| Name | Type | Conditions | Description |
| --- | --- | --- | --- |
| `token` | string | token | Token of the connected user |
| `id_faction` | number | serial | ID of the faction |

## Output

### Example success
```TypeScript
{
    success: true,
    faction: {
        id_faction: 31
    }
}
```

### Error codes
#### Template
121X

#### Codes
| Code | Description |
| ---: | :--- |
| 1201 | User already in a faction |
| 1211 | Faction not found |
| 1212 | Faction is full |

---
Please check the **[README.md](../README.md)** of the rest-paths directory for the general properties.
