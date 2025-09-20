import React from 'react';
import Link from 'next/link';
import LumenLogo from '../components/LumenLogo';

export default function Home() {
  return (
    <div className="min-h-screen bg-lumen-bg flex flex-col justify-center items-center">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <LumenLogo size={100} />
        </div>
        <h1 className="text-4xl font-bold text-lumen-cyan mb-4">Lumen</h1>
        <p className="text-xl text-lumen-text mb-8">
          Intuitive GUI Menu Builder
        </p>
        
        <div className="space-x-4">
          <Link 
            href="/login" 
            className="bg-lumen-cyan text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition"
          >
            Login
          </Link>
          <Link 
            href="/signup" 
            className="bg-white text-lumen-cyan border border-lumen-cyan px-6 py-3 rounded-lg hover:bg-cyan-50 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
