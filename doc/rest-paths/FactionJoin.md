# FactionJoin
Rejoindre une faction

## Path
`/faction/join`

## Input parameters
| Name | Type | Conditions |
| --- | --- | --- |
| `token` | string | noEmpty, alphanum |
| `id_faction` | number | serial |

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
Please check the **README.md** of the directory for the general properties.
