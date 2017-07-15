# FactionCreate
Create a faction.

## Path
`/faction/create`

## Input parameters
| Name | Type | Conditions | Description |
| --- | --- | --- | --- |
| `token` | string | token | Token of the connected user |
| `name` | string | minLength(3), maxLength(16) | Name of the faction |
| `slogan` | string | minLength(6), maxLength(64) | Slogan of the faction |
| `color` | string | hex, length(6) | Color of the faction |

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
120X

#### Codes
| Code | Description |
| ---: | :--- |
| 1201 | User already in a faction |
| 1202 | Faction with this name already exist |

---
Please check the **[README.md](../README.md)** of the rest-paths directory for the general properties.
