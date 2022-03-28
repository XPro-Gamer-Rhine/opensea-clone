import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChander = () => {
    if (!mounted) {
      return null;
    }
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };
  return <>{renderThemeChander()}</>;
};

export default DarkMode;
