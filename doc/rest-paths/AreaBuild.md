# AreaBuild
Construction d'une structure

## Path
`/area/build`

## Input parameters
| Name | Type | Conditions |
| --- | --- | --- |
| `token` | string | token |
| `x` | number | greaterOrEqual(0) |
| `y` | number | greaterOrEqual(0) |
| `support` | number | serial |
| `static` | number | serial |

## Output

### Example success
```TypeScript
{
    success: true,
    structure: {
        id_structure: 427,
        id_structure_static: 8,
        state: 1,
        date_end: "15/01/2017",
        life: {
            actu: 75,
            total: 100
        },
        grade: 2
    }
}
```

### Error codes
#### Template
151X

#### Codes
| Code | Description |
| ---: | :--- |
| 1511 | Support structure not found |
| 1512 | Static structure not found |
| 1513 | Support and static are incompatible |
| 1514 | Not enough resources |

---
Please check the **README.md** of the directory for the general properties.