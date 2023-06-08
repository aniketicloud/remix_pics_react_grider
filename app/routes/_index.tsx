import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Remix Pics Search" },
    { name: "description", content: "Search images with Unsplash" },
  ];
};

export default function Index() {
  return (
  <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      Main App
    </div>
  );
}
