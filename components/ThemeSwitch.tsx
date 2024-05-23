'use client'

import { FC } from 'react'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { SwitchProps, useSwitch } from '@nextui-org/switch'
import { useTheme } from 'next-themes'
import { useIsSSR } from '@react-aria/ssr'
import clsx from 'clsx'

import { SunFilledIcon, MoonFilledIcon } from '@/components/icons'

export interface ThemeSwitchProps {
  className?: string
  classNames?: SwitchProps['classNames']
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme()
  const isSSR = useIsSSR()

  const onChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === 'light' || isSSR,
    'aria-label': `Switch to ${
      theme === 'light' || isSSR ? 'dark' : 'light'
    } mode`,
    onChange,
  })

  return (
    <Component
      {...getBaseProps({
        className: clsx('px-px cursor-pointer', className, classNames?.base),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              'w-auto h-auto',
              'bg-transparent',
              'rounded-lg',
              'flex items-center justify-center',
              'group-data-[selected=true]:bg-transparent',
              'pt-px',
              'px-0',
              'mx-0',
            ],
            classNames?.wrapper
          ),
        })}
      >
        {!isSelected || isSSR ? (
          <SunFilledIcon
            size={22}
            className="text-color dark:hover:text-warning dark:hover:opacity-100 transition-all"
          />
        ) : (
          <MoonFilledIcon
            size={22}
            className="text-color hover:opacity-80 transition-all"
          />
        )}
      </div>
    </Component>
  )
}
