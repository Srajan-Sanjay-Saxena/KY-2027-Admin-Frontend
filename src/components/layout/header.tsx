"use client";

import { Bell, Search, Menu } from "lucide-react";
import { Avatar, Badge } from "@/components/ui";
import { useState } from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-30 h-16 border-b border-dark-700 bg-dark-950/80 backdrop-blur-md">
      <div className="flex h-full items-center justify-between px-4 sm:px-6">
        {/* Left side - Title */}
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-dark-800 text-gray-400"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <Menu size={20} />
          </button>
          <div>
            <h1 className="text-lg font-semibold text-white">{title}</h1>
            {subtitle && (
              <p className="text-sm text-gray-400">{subtitle}</p>
            )}
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="h-9 w-64 rounded-lg border border-dark-600 bg-dark-800 pl-9 pr-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-dark-800 text-gray-400 hover:text-white transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-accent-red" />
          </button>

          {/* User */}
          <div className="flex items-center gap-3 pl-3 border-l border-dark-700">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-white">Admin User</p>
              <Badge variant="purple" className="text-[10px]">MASTER_ADMIN</Badge>
            </div>
            <Avatar fallback="Admin User" size="md" />
          </div>
        </div>
      </div>
    </header>
  );
}
