import { Suspense } from "react";
import OffersClient from "./OffersClient";

export default function OffersPage() {
  return (
    <Suspense fallback={<div>Carregando ofertas...</div>}>
      <OffersClient />
    </Suspense>
  );
}

