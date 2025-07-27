'use client'

import { useState } from 'react';
import { Eye, EyeOff, ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <><div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-zinc-900 flex items-center justify-center p-4 relative overflow-hidden">

              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20">
                  <div className="text-center mb-6">
                      <h2 className="text-2xl font-semibold text-white mb-2">Welcome back</h2>
                        </div>

                  <div className="space-y-6">
                      
                      <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-slate-200 block">
                              Email address
                          </label>
                          <input
                              id="email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                              placeholder="Enter your email" />
                      </div>

                      <div className="space-y-2">
                          <label htmlFor="password" className="text-sm font-medium text-slate-200 block">
                              Password
                          </label>
                          <div className="relative">
                              <input
                                  id="password"
                                  type={showPassword ? 'text' : 'password'}
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 pr-12"
                                  placeholder="Enter your password" />
                              <button
                                  type="button"
                                  onClick={() => setShowPassword(!showPassword)}
                                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                              >
                                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                              </button>
                          </div>
                      </div>

                      <div className="flex items-center justify-between">
                          <div className="flex items-center">
                              <input type="checkbox" className="rounded border-white/20 bg-white/5 focus:ring-offset-0" />
                              <span className="ml-2 text-sm text-slate-300">Remember me</span>
                          </div>
                          <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                              Forgot password?
                          </a>
                      </div>

                      <button
                          onClick={handleSubmit}
                          disabled={isLoading}
                          className="w-full bg-white text-black py-3 px-4 rounded-xl font-semibold flex items-center justify-center space-x-2"
                      >
                          {isLoading ? (
                              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          ) : (
                              <>
                                  <span>Sign In</span>
                                  <ArrowRight className="w-4 h-4" />
                              </>
                          )}
                      </button>
                  </div>

                  <p className="text-center mt-6 text-slate-400">
                      Don't have an account?{' '}
                      <a href="#" className="text-white font-medium transition-colors">
                          Sign up
                      </a>
                  </p>
              </div>
          </div></>
  );
}