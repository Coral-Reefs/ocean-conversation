import React, { Suspense } from "react";
import Encyclopedia from "../components/EncyclopediaContent";

export default function EncyclopediaPage() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Encyclopedia />
    </Suspense>
  );
}
