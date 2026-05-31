import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('/api/products').then(res => setProducts(res.data));
  }, []);
  return (
    <div className="max-w-6xl mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">Product Catalog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p._id} className="bg-white p-4 shadow rounded">
            <img src={p.image || 'https://via.placeholder.com/150'} alt={p.name} className="w-full h-40 object-contain mb-2" />
            <div className="font-bold text-lg">{p.name}</div>
            <div className="text-gray-600">{p.description}</div>
            <div className="font-semibold text-indigo-600 text-xl my-2">${p.price}</div>
            <button className="bg-indigo-600 text-white px-3 py-1 rounded mt-2">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
