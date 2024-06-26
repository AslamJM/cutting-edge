import { Link, useLocation } from "@tanstack/react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import React from "react";

const BreadCrumbsComp = () => {
  const location = useLocation();

  const crumbs = location.pathname.split("/").slice(1);

  const page = crumbs.at(-1);
  const links = crumbs.slice(0, crumbs.length - 1);

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {links.map((l) => (
          <React.Fragment key={l}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={`/${l}`}>{l}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </React.Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>{page}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbsComp;
