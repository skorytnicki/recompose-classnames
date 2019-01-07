import React from "react";
import {Button} from "./Button";
import renderer from "react-test-renderer";

test("Button has class isPrimary", () => {
    const component = renderer.create(
        <Button isPrimary>Jug Button</Button>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});