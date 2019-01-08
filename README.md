# recompose-classnames
classnames utility for recompose

## Example usage

```
import {compose} from "recompose";
import {withClassNames} from "recompose-classnames";

const Button = compose(
    withClassNames(({isPrimary}) => ({"isPrimary": isPrimary})),
)("button");
```
