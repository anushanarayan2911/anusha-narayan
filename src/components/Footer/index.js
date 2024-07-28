import React from "react";
import { Link, Row } from "./footerElements";

const Footer = ({}) => {
    return (
        <>
            <Row>
                <Link href="mailto:anusha.narayan2002@outlook.com">Email me</Link>
                <Link href="https://www.linkedin.com/in/a-k-narayan/">Find me on LinkedIn</Link>
            </Row>
        </>
    )
}

export default Footer