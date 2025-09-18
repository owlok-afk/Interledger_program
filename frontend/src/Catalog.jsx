import React from "react";

export default function Catalog({ onSelectProduct }) {
  const products = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Producto ${i + 1}`,
  }));

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <button onClick={() => onSelectProduct(product)}>{product.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
