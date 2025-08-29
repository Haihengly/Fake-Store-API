import React, { useEffect, useState } from 'react';

function Api() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-10">Loading</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-red-500">Fake Store Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4" />
            <h2 className="font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Api;
