import React from "react";
import {render} from "react-dom";
import {compose} from "recompose";
import {withClassNames} from "../index";

export const Button = compose(
    withClassNames(({isPrimary}) => ({"isPrimary": isPrimary})),
)("button");
