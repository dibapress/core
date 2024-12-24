import { NextRequest, NextResponse } from "next/server";
import { useConfig } from "../stores/useConfig";

type HttpRequestMethod = "GET" | "POST" | "PUT" | "DELETE";

const DibapressRouteHandler = (req: NextRequest) => {
  const config = useConfig.getState();
  const method = req.method as HttpRequestMethod;
  const url = req.nextUrl.pathname;
  const segments = url.split("/").filter((path) => path !== "");

  if (segments.includes("collection")) {
    const collection = segments[segments.indexOf("collection") + 1];
    if (collection) {
      return NextResponse.json({
        collection: [
          {
            id: Math.random(),
            title: "Hasan Zirak",
          },
          {
            id: Math.random(),
            title: "Navid Zardi",
          },
        ],
        pages: 2,
        page: 1,
        total: 2,
      });
    } else {
      return NextResponse.json({ message: "collection not found" });
    }
  }

  return NextResponse.json({ name: "bahman" });
};

export {
  DibapressRouteHandler as GET,
  DibapressRouteHandler as POST,
  DibapressRouteHandler as PUT,
  DibapressRouteHandler as DELETE,
};
