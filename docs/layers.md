## files structure

- .structure - body component
- .styles - style components
- .types - types of component(props, enums,types)
- .data - data for the component
- .messages - our component texts
- index.ts - enter point

## paths

- @shared - shared with all application (components, hooks, types, services, etc)
- components - share components with the current layer
- hooks - share hooks with the current layer

```json
    {
        "@shared": {

        },
        "modules": {
            "signIn": {
                "components: {

                },
                pages: {
                    form: {
                        components: {

                        }
                    }
                }
            }
        }
    }

```
