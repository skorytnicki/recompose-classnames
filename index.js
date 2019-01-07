import {withProps} from "recompose";
import classNames from "classnames";

export function withClassNames(rules) {
    return withProps(({className, ...props}) => {
        return {
            className: classNames(rules(props), className)
        }
    })
}