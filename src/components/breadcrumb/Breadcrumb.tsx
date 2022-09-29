import React from "react";
import { Items } from "./Items";
import './breadcrumb.css'


interface BreadcrumbProps {
    separator?: "—" | "/" | "➡",
    items: Items[],
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
    separator = "—",
    items,
}) => {

    return (
        <ul className="breadcrumbList">
            {items.map((items) => {
                return (
                    <>
                        <li>
                            <a href={items.url} target="_blank">
                                {items.title}
                            </a>
                        </li>
                        <span className="separator">
                            {separator}
                        </span>
                    </>
                )
            })}
        </ul>
    )
}