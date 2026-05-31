import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', { name, email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Register failed');
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {error && <div className="bg-red-100 text-red-800 px-3 py-2 rounded mb-2">{error}</div>}
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full Name" className="mb-3 w-full border px-4 py-2 rounded" required />
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" className="mb-3 w-full border px-4 py-2 rounded" required />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="mb-3 w-full border px-4 py-2 rounded" required />
        <button className="bg-indigo-600 w-full text-white py-2 rounded hover:bg-indigo-700 transition">Register</button>
      </form>
    </div>
  );
}

export default Register;
