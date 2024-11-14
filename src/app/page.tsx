"use client"
import Toggle from '@/components/Toggle/Toggle'
import { themeFunctions } from '@/contexts/Theme/ChangeTheme'
import Link from 'next/link'

import React from 'react'

export default function Inicio() {

  const theme = themeFunctions.getTheme();

  function handleChangeTheme() {
    themeFunctions.changeTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <Toggle theme={theme} changeTheme={handleChangeTheme} />
    </div>
  )
}
