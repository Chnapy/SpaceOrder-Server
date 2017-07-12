# FactionCreate
Création d'une faction

## Path
`/faction/create`

## Input parameters
| Name | Type | Conditions |
| --- | --- | --- |
| `token` | string | token |
| `name` | string | minLength(3), maxLength(16) |
| `slogan` | string | minLength(6), maxLength(64) |
| `color` | string | hex, length(6) |

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
Please check the **README.md** of the directory for the general properties.
